import { LESSONS, CRAM_TABLES } from './lessons.js';
import { TEXTBOOK_QUESTIONS } from './questions-textbook.js';
import { EXPANDED_QUESTIONS_PART1 } from './questions-exp-1.js';
import { EXPANDED_QUESTIONS_PART2 } from './questions-exp-2.js';

const ALL_QUESTIONS = [
  ...TEXTBOOK_QUESTIONS,
  ...EXPANDED_QUESTIONS_PART1,
  ...EXPANDED_QUESTIONS_PART2
];

const QUESTION_MAP = new Map(ALL_QUESTIONS.map(q => [q.id, q]));
const LESSON_MAP = new Map(LESSONS.map(l => [l.id, l]));
const LETTERS = ['A', 'B', 'C', 'D'];
const TYPE_LABELS = {
  recall: 'Lý thuyết',
  case: 'Tình huống lâm sàng',
  calc: 'Tính toán & Số liệu'
};

const STORAGE_KEY = 'dd_vsattp_2026_state_v1';

function loadState() {
  const base = {
    activeTab: 'practice',
    selectedLesson: 1, // 'all' or 1..10
    filterSource: 'all',
    filterType: 'all',
    filterStatus: 'all',
    viewMode: 'single',
    revealAllList: false,
    currentIndexByScope: {},
    answers: {}, // { [qId]: { selected: number, isCorrect: boolean } }
    wrongCounts: {}, // { [qId]: number }
    bookmarks: [], // [qId]
    checkedObjectives: {}, // { [`${lessonId}-${section}-${idx}`]: true }
    examHistory: [] // [{ id, date, total, correct, score10, durationSec, scopeLabel }]
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    return {
      ...base,
      ...parsed,
      answers: parsed.answers || {},
      wrongCounts: parsed.wrongCounts || {},
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
      checkedObjectives: parsed.checkedObjectives || {},
      examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : []
    };
  } catch {
    return base;
  }
}

const state = loadState();
let showObjectivesDrawer = false;
let cramSearchQuery = '';
let cramSubView = 'tables'; // 'tables' | 'objectives'
let savedSubView = 'wrong'; // 'wrong' | 'bookmarks'

// Active mock exam session (not persisted mid-flight unless finished, kept in memory)
let examSession = null;
let examTimerHandle = null;
let pendingSubmitConfirm = false;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore quota errors cleanly
  }
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatDuration(totalSec) {
  const s = Math.max(0, Math.floor(totalSec));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}

function formatDurationWords(totalSec) {
  const s = Math.max(0, Math.floor(totalSec));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  if (m === 0) return `${rem} giây`;
  return `${m} phút ${rem} giây`;
}

function scopeKey() {
  return `${state.selectedLesson}|${state.filterSource}|${state.filterType}|${state.filterStatus}`;
}

function getFilteredQuestions() {
  return ALL_QUESTIONS.filter(q => {
    if (state.selectedLesson !== 'all' && q.lesson !== state.selectedLesson) return false;
    if (state.filterSource !== 'all' && q.source !== state.filterSource) return false;
    if (state.filterType !== 'all' && q.type !== state.filterType) return false;
    const ans = state.answers[q.id];
    if (state.filterStatus === 'unanswered' && ans) return false;
    if (state.filterStatus === 'correct' && (!ans || !ans.isCorrect)) return false;
    if (state.filterStatus === 'wrong' && (!ans || ans.isCorrect)) return false;
    return true;
  });
}

function updateHeaderStats() {
  const answeredCount = Object.keys(state.answers).length;
  const correctCount = Object.values(state.answers).filter(a => a.isCorrect).length;
  const el = document.getElementById('overallProgressText');
  if (el) {
    el.textContent = answeredCount > 0
      ? `Đúng ${correctCount}/${answeredCount}`
      : `0/${ALL_QUESTIONS.length} câu`;
  }

  const wrongIds = Object.keys(state.wrongCounts).filter(id => (state.wrongCounts[id] || 0) > 0);
  const uniqueSaved = new Set([...wrongIds, ...state.bookmarks]);
  const badge = document.getElementById('savedNavCount');
  if (badge) badge.textContent = String(uniqueSaved.size);
}

// ================= TAB SWITCHING =================
function switchTab(tabName) {
  state.activeTab = tabName;
  saveState();

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('is-active', panel.id === `tab-${tabName}`);
  });

  if (tabName === 'practice') renderPracticeTab();
  if (tabName === 'exam') renderExamTab();
  if (tabName === 'cram') renderCramTab();
  if (tabName === 'saved') renderSavedTab();
}

// ================= TAB 1: ÔN THEO BÀI =================
function renderSidebar() {
  const listEl = document.getElementById('lessonList');
  const mobileSel = document.getElementById('mobileLessonSelect');
  const allBtn = document.getElementById('selectAllLessonsBtn');

  allBtn.style.fontWeight = state.selectedLesson === 'all' ? '700' : '500';

  const itemsHtml = LESSONS.map(lesson => {
    const qs = ALL_QUESTIONS.filter(q => q.lesson === lesson.id);
    const done = qs.filter(q => state.answers[q.id]).length;
    const pct = qs.length ? Math.round((done / qs.length) * 100) : 0;
    const active = state.selectedLesson === lesson.id ? 'is-active' : '';
    return `
      <li>
        <button class="lesson-item-btn ${active}" data-select-lesson="${lesson.id}" type="button">
          <div class="lesson-item-top">
            <span class="lesson-item-code">${esc(lesson.code)}</span>
            <span class="lesson-item-count">${done}/${qs.length}</span>
          </div>
          <div class="lesson-item-title">${esc(lesson.title)}</div>
          <div class="thin-bar"><div class="thin-bar-fill" style="width:${pct}%"></div></div>
        </button>
      </li>
    `;
  }).join('');

  listEl.innerHTML = itemsHtml;

  const optionsHtml = [
    `<option value="all" ${state.selectedLesson === 'all' ? 'selected' : ''}>Tất cả 10 bài (${ALL_QUESTIONS.length} câu)</option>`,
    ...LESSONS.map(l => {
      const qs = ALL_QUESTIONS.filter(q => q.lesson === l.id);
      const done = qs.filter(q => state.answers[q.id]).length;
      return `<option value="${l.id}" ${state.selectedLesson === l.id ? 'selected' : ''}>${esc(l.code)}: ${esc(l.title)} (${done}/${qs.length})</option>`;
    })
  ].join('');
  mobileSel.innerHTML = optionsHtml;
}

function renderLessonBanner() {
  const bannerEl = document.getElementById('lessonBanner');
  if (state.selectedLesson === 'all') {
    const tbCount = ALL_QUESTIONS.filter(q => q.source === 'textbook').length;
    const expCount = ALL_QUESTIONS.length - tbCount;
    const doneCount = Object.keys(state.answers).length;
    bannerEl.innerHTML = `
      <div class="lesson-banner-top">
        <div>
          <div class="lesson-kicker">TỔNG HỢP TOÀN MÔN · 10 BÀI GIẢNG</div>
          <h1 class="lesson-heading">Ngân hàng ${ALL_QUESTIONS.length} câu hỏi ôn tập</h1>
        </div>
        <div class="lesson-banner-actions">
          <button class="btn-secondary btn-sm" id="quickExamFromLessonBtn" type="button">Tạo đề thi 40 câu</button>
        </div>
      </div>
      <p class="muted-text" style="margin:8px 0 0;">
        Gồm ${tbCount} câu có sẵn trong giáo trình và ${expCount} câu mở rộng theo mục tiêu bài học. Đã hoàn thành ${doneCount}/${ALL_QUESTIONS.length} câu.
      </p>
    `;
    return;
  }

  const lesson = LESSON_MAP.get(state.selectedLesson);
  const qs = ALL_QUESTIONS.filter(q => q.lesson === lesson.id);
  const tbCount = qs.filter(q => q.source === 'textbook').length;
  const expCount = qs.length - tbCount;
  const doneCount = qs.filter(q => state.answers[q.id]).length;
  const okCount = qs.filter(q => state.answers[q.id]?.isCorrect).length;

  const renderObjList = (secKey, arr) => {
    if (!arr || !arr.length) return '';
    return arr.map((item, idx) => {
      const key = `${lesson.id}-${secKey}-${idx}`;
      const checked = state.checkedObjectives[key] ? 'checked' : '';
      return `
        <li>
          <label>
            <input type="checkbox" data-obj-key="${key}" ${checked}>
            <span>${esc(item)}</span>
          </label>
        </li>
      `;
    }).join('');
  };

  bannerEl.innerHTML = `
    <div class="lesson-banner-top">
      <div>
        <div class="lesson-kicker">${esc(lesson.code.toUpperCase())} · ${esc(lesson.pages)} · ${tbCount} câu file + ${expCount} câu mục tiêu</div>
        <h1 class="lesson-heading">${esc(lesson.title)}</h1>
      </div>
      <div class="lesson-banner-actions">
        <button class="btn-subtle btn-sm" id="toggleObjectivesBtn" type="button">
          ${showObjectivesDrawer ? 'Ẩn mục tiêu & tóm tắt' : 'Xem mục tiêu & tóm tắt'}
        </button>
        <button class="btn-secondary btn-sm" id="quickExamFromLessonBtn" type="button">Thi thử bài này</button>
      </div>
    </div>
    <div style="margin-top:8px;font-size:0.82rem;color:var(--text-muted);">
      Tiến độ bài: ${doneCount}/${qs.length} câu đã làm${doneCount ? ` · Đúng ${okCount}/${doneCount}` : ''}
    </div>

    ${showObjectivesDrawer ? `
      <div class="objectives-drawer">
        <div class="obj-columns">
          <div class="obj-block">
            <h4>1. Mục tiêu Kiến thức</h4>
            <ul class="obj-checklist">${renderObjList('k', lesson.objectives.knowledge)}</ul>
          </div>
          <div class="obj-block">
            <h4>2. Mục tiêu Kỹ năng</h4>
            <ul class="obj-checklist">${renderObjList('s', lesson.objectives.skills)}</ul>
          </div>
          <div class="obj-block">
            <h4>3. Mục tiêu Thái độ</h4>
            <ul class="obj-checklist">${renderObjList('a', lesson.objectives.attitude)}</ul>
          </div>
        </div>
        <div class="highlights-box">
          <h4>Ý chính và con số trọng tâm của ${esc(lesson.code)}</h4>
          <ul>${lesson.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>
        </div>
      </div>
    ` : ''}
  `;
}

function renderQuestionCard(q, index, total, options = {}) {
  const { revealOverride = false } = options;
  const userAns = state.answers[q.id];
  const isAnswered = Boolean(userAns);
  const showResult = isAnswered || revealOverride;
  const isSaved = state.bookmarks.includes(q.id);
  const lesson = LESSON_MAP.get(q.lesson);

  const sourceBadge = q.source === 'textbook'
    ? `<span class="tag tag-file">Có sẵn trong file · Câu ${q.origNum} (${esc(lesson.code)})</span>`
    : `<span class="tag tag-obj">Mở rộng mục tiêu (${esc(lesson.code)})</span>`;

  const optionsHtml = q.options.map((optText, idx) => {
    let cls = 'option-btn';
    if (showResult) {
      if (idx === q.answer) {
        cls += ' is-correct';
      } else if (userAns && userAns.selected === idx && idx !== q.answer) {
        cls += ' is-wrong';
      }
    }
    return `
      <button class="${cls}" data-practice-answer="${q.id}" data-opt-idx="${idx}" type="button">
        <span class="opt-letter">${LETTERS[idx]}</span>
        <span>${esc(optText)}</span>
      </button>
    `;
  }).join('');

  let explainHtml = '';
  if (showResult) {
    const statusText = userAns
      ? (userAns.isCorrect ? 'Chính xác' : `Chưa đúng · Đáp án đúng là ${LETTERS[q.answer]}`)
      : `Đáp án đúng: ${LETTERS[q.answer]}`;
    const statusCls = userAns && !userAns.isCorrect ? 'bad' : 'ok';
    const boxCls = userAns && !userAns.isCorrect ? 'explain-box is-wrong-state' : 'explain-box';
    explainHtml = `
      <div class="${boxCls}">
        <div class="explain-status ${statusCls}">${statusText}</div>
        <div>${esc(q.explain)}</div>
      </div>
    `;
  }

  return `
    <article class="q-card" data-qid="${q.id}">
      <div class="q-meta-row">
        <div class="q-badges">
          <span class="q-num">Câu ${index + 1} / ${total}</span>
          ${sourceBadge}
          <span class="tag">${esc(TYPE_LABELS[q.type] || q.type)}</span>
        </div>
        <button class="bookmark-btn ${isSaved ? 'is-saved' : ''}" data-toggle-bookmark="${q.id}" type="button">
          ${isSaved ? 'Đã đánh dấu' : 'Đánh dấu'}
        </button>
      </div>
      <div class="q-objective-line">${esc(q.objectiveTag)}</div>
      <p class="q-stem">${esc(q.q)}</p>
      <div class="options-list">${optionsHtml}</div>
      ${explainHtml}
    </article>
  `;
}

function renderPracticeTab() {
  renderSidebar();
  renderLessonBanner();

  // Sync filter UI
  document.querySelectorAll('[data-filter-source]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.filterSource === state.filterSource);
  });
  document.getElementById('filterType').value = state.filterType;
  document.getElementById('filterStatus').value = state.filterStatus;
  document.querySelectorAll('[data-view-mode]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.viewMode === state.viewMode);
  });

  const listToolbar = document.getElementById('listToolbar');
  const revealToggle = document.getElementById('revealAllListToggle');
  revealToggle.checked = state.revealAllList;
  listToolbar.classList.toggle('is-hidden', state.viewMode !== 'list');

  const filtered = getFilteredQuestions();
  const container = document.getElementById('practiceContainer');

  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty-box">
        <p style="margin:0 0 10px;">Không có câu hỏi nào khớp với bộ lọc hiện tại.</p>
        <button class="btn-secondary btn-sm" id="clearFiltersBtn" type="button">Bỏ bộ lọc trạng thái/dạng câu</button>
      </div>
    `;
    return;
  }

  if (state.viewMode === 'list') {
    container.innerHTML = filtered
      .map((q, idx) => renderQuestionCard(q, idx, filtered.length, { revealOverride: state.revealAllList }))
      .join('');
    return;
  }

  // Single view
  const key = scopeKey();
  let curIdx = state.currentIndexByScope[key] || 0;
  if (curIdx >= filtered.length) curIdx = filtered.length - 1;
  if (curIdx < 0) curIdx = 0;
  state.currentIndexByScope[key] = curIdx;

  const currentQ = filtered[curIdx];
  const cardHtml = renderQuestionCard(currentQ, curIdx, filtered.length);

  const jumperHtml = filtered.map((q, idx) => {
    const ans = state.answers[q.id];
    const flagged = state.bookmarks.includes(q.id) ? 'is-flagged' : '';
    let st = '';
    if (ans) st = ans.isCorrect ? 'is-correct' : 'is-wrong';
    const cur = idx === curIdx ? 'is-current' : '';
    return `<button class="jump-num ${st} ${cur} ${flagged}" data-jump-idx="${idx}" type="button">${idx + 1}</button>`;
  }).join('');

  container.innerHTML = `
    ${cardHtml}
    <div class="q-nav-bar">
      <div style="display:flex;gap:8px;">
        <button class="btn-secondary" id="prevQuestionBtn" type="button" ${curIdx === 0 ? 'disabled' : ''}>← Câu trước</button>
        <button class="btn-primary" id="nextQuestionBtn" type="button" ${curIdx >= filtered.length - 1 ? 'disabled' : ''}>Câu tiếp →</button>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span class="kbd-hint">Phím tắt: A–D hoặc 1–4 chọn · ← → chuyển câu · S đánh dấu</span>
        <button class="link-btn" id="resetScopeBtnSingle" type="button">Làm lại phần này</button>
      </div>
    </div>
    <div class="q-jumper">
      <div class="q-jumper-label">
        <span>Chuyển nhanh câu hỏi (${filtered.length} câu)</span>
        <span>Xanh: đúng · Đỏ: sai · Chấm vàng: đã lưu</span>
      </div>
      <div class="jumper-grid">${jumperHtml}</div>
    </div>
  `;
}

function recordPracticeAnswer(qId, optIdx) {
  const q = QUESTION_MAP.get(qId);
  if (!q) return;
  const isCorrect = optIdx === q.answer;
  state.answers[qId] = { selected: optIdx, isCorrect };
  if (!isCorrect) {
    state.wrongCounts[qId] = (state.wrongCounts[qId] || 0) + 1;
  }
  saveState();
  updateHeaderStats();
  if (state.activeTab === 'practice') renderPracticeTab();
  if (state.activeTab === 'saved') renderSavedTab();
}

function toggleBookmark(qId) {
  const idx = state.bookmarks.indexOf(qId);
  if (idx >= 0) {
    state.bookmarks.splice(idx, 1);
  } else {
    state.bookmarks.push(qId);
  }
  saveState();
  updateHeaderStats();
  if (state.activeTab === 'practice') renderPracticeTab();
  if (state.activeTab === 'saved') renderSavedTab();
}

function resetFilteredQuestions() {
  const filtered = getFilteredQuestions();
  filtered.forEach(q => {
    delete state.answers[q.id];
  });
  state.currentIndexByScope[scopeKey()] = 0;
  saveState();
  updateHeaderStats();
  renderPracticeTab();
}

// ================= TAB 2: THI THỬ =================
function stopExamTimer() {
  if (examTimerHandle) {
    clearInterval(examTimerHandle);
    examTimerHandle = null;
  }
}

function startExam({ lessons, source, count, minutes, shuffleQ, shuffleOpts, label, customIds = null }) {
  stopExamTimer();
  pendingSubmitConfirm = false;

  let pool;
  if (Array.isArray(customIds) && customIds.length) {
    pool = customIds.map(id => QUESTION_MAP.get(id)).filter(Boolean);
  } else {
    pool = ALL_QUESTIONS.filter(q => {
      if (!lessons.includes(q.lesson)) return false;
      if (source !== 'all' && q.source !== source) return false;
      return true;
    });
  }

  if (!pool.length) return;

  if (shuffleQ) {
    pool = shuffleArray(pool);
  }
  const finalCount = count === 'all' ? pool.length : Math.min(Number(count), pool.length);
  const chosen = pool.slice(0, finalCount);

  const items = chosen.map(q => {
    let optionOrder = [0, 1, 2, 3];
    if (shuffleOpts) {
      optionOrder = shuffleArray(optionOrder);
    }
    return {
      qId: q.id,
      optionOrder, // maps displayIdx -> original option index
      selectedDisplayIdx: null,
      flagged: false
    };
  });

  examSession = {
    status: 'active',
    label: label || `Đề ${items.length} câu`,
    items,
    currentIdx: 0,
    startedAt: Date.now(),
    timeLimitSec: minutes > 0 ? minutes * 60 : 0,
    remainingSec: minutes > 0 ? minutes * 60 : 0,
    elapsedSec: 0,
    reviewFilter: 'all'
  };

  if (examSession.timeLimitSec > 0) {
    examTimerHandle = setInterval(() => {
      if (!examSession || examSession.status !== 'active') {
        stopExamTimer();
        return;
      }
      examSession.remainingSec -= 1;
      const timerEl = document.getElementById('examTimerDisplay');
      if (timerEl) {
        timerEl.textContent = formatDuration(examSession.remainingSec);
        timerEl.classList.toggle('is-low', examSession.remainingSec <= 120);
      }
      if (examSession.remainingSec <= 0) {
        submitExam();
      }
    }, 1000);
  }

  renderExamTab();
}

function submitExam() {
  if (!examSession || examSession.status !== 'active') return;
  stopExamTimer();
  pendingSubmitConfirm = false;

  examSession.elapsedSec = Math.max(1, Math.round((Date.now() - examSession.startedAt) / 1000));
  examSession.status = 'submitted';

  let correct = 0;
  examSession.items.forEach(item => {
    const q = QUESTION_MAP.get(item.qId);
    const origSelected = item.selectedDisplayIdx === null ? null : item.optionOrder[item.selectedDisplayIdx];
    const isCorrect = origSelected !== null && origSelected === q.answer;
    item.origSelected = origSelected;
    item.isCorrect = isCorrect;
    if (isCorrect) {
      correct += 1;
    } else if (origSelected !== null) {
      state.wrongCounts[q.id] = (state.wrongCounts[q.id] || 0) + 1;
    }
  });

  const total = examSession.items.length;
  const score10 = total > 0 ? Number(((correct / total) * 10).toFixed(2)) : 0;
  examSession.correctCount = correct;
  examSession.score10 = score10;

  state.examHistory.unshift({
    id: Date.now(),
    date: new Date().toLocaleString('vi-VN', { hour12: false }),
    label: examSession.label,
    total,
    correct,
    score10,
    durationSec: examSession.elapsedSec
  });
  state.examHistory = state.examHistory.slice(0, 15);

  saveState();
  updateHeaderStats();
  renderExamTab();
}

function renderExamSetup() {
  const historyHtml = state.examHistory.length
    ? `
      <div class="panel-card">
        <h3 style="margin:0 0 10px;font-size:0.98rem;">Lịch sử thi thử gần đây</h3>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th>Thời điểm</th>
                <th>Đề thi</th>
                <th>Kết quả</th>
                <th>Điểm (thang 10)</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              ${state.examHistory.map(h => `
                <tr>
                  <td>${esc(h.date)}</td>
                  <td>${esc(h.label)}</td>
                  <td><span style="font-family:var(--mono);">${h.correct}/${h.total}</span></td>
                  <td><strong style="font-family:var(--mono);color:var(--accent);">${h.score10.toFixed(2)}</strong></td>
                  <td>${esc(formatDurationWords(h.durationSec))}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : '';

  return `
    <div class="exam-setup-wrap">
      <div class="panel-card">
        <h2 class="panel-title">Chọn đề thi nhanh</h2>
        <p class="muted-text">Mô phỏng làm bài trắc nghiệm bấm giờ, xáo trộn câu hỏi và chấm điểm chi tiết theo từng bài học.</p>
        <div class="preset-grid">
          <button class="preset-card" data-preset="40-30" type="button">
            <strong>Đề chuẩn 40 câu · 30 phút</strong>
            <span>Tổng hợp ngẫu nhiên cả 10 bài</span>
          </button>
          <button class="preset-card" data-preset="60-45" type="button">
            <strong>Đề tổng lực 60 câu · 45 phút</strong>
            <span>Phủ rộng lý thuyết, lâm sàng, tính toán</span>
          </button>
          <button class="preset-card" data-preset="textbook-99" type="button">
            <strong>99 câu gốc trong file · 60 phút</strong>
            <span>Toàn bộ câu lượng giá từ giáo trình</span>
          </button>
          <button class="preset-card" data-preset="quick-20" type="button">
            <strong>Kiểm tra nhanh 20 câu · 15 phút</strong>
            <span>Ôn nhanh trước giờ vào phòng thi</span>
          </button>
        </div>
      </div>

      <div class="panel-card">
        <h2 class="panel-title">Tự cấu hình đề thi</h2>
        <div class="form-grid">
          <div>
            <label class="field-label" for="examCountSelect">Số câu hỏi</label>
            <select id="examCountSelect" class="select-input" style="width:100%;">
              <option value="10">10 câu</option>
              <option value="20">20 câu</option>
              <option value="30">30 câu</option>
              <option value="40" selected>40 câu</option>
              <option value="60">60 câu</option>
              <option value="100">100 câu</option>
              <option value="all">Tất cả câu trong phạm vi</option>
            </select>
          </div>
          <div>
            <label class="field-label" for="examTimeSelect">Thời gian làm bài</label>
            <select id="examTimeSelect" class="select-input" style="width:100%;">
              <option value="0">Không giới hạn thời gian</option>
              <option value="15">15 phút</option>
              <option value="30" selected>30 phút</option>
              <option value="45">45 phút</option>
              <option value="60">60 phút</option>
              <option value="90">90 phút</option>
            </select>
          </div>
          <div>
            <label class="field-label" for="examSourceSelect">Nguồn câu hỏi</label>
            <select id="examSourceSelect" class="select-input" style="width:100%;">
              <option value="all" selected>Cả file gốc &amp; mở rộng mục tiêu</option>
              <option value="textbook">Chỉ câu có sẵn trong file (99 câu)</option>
              <option value="objective">Chỉ câu mở rộng mục tiêu (201 câu)</option>
            </select>
          </div>
        </div>

        <div style="margin-top:16px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="field-label" style="margin:0;">Phạm vi bài học</span>
            <div style="display:flex;gap:10px;">
              <button class="link-btn" id="examCheckAllLessons" type="button">Chọn tất cả</button>
              <button class="link-btn" id="examUncheckAllLessons" type="button">Bỏ chọn</button>
            </div>
          </div>
          <div class="lesson-tick-grid">
            ${LESSONS.map(l => `
              <label class="tick-item">
                <input type="checkbox" class="exam-lesson-cb" value="${l.id}" checked>
                <span><strong>${esc(l.code)}:</strong> ${esc(l.title)}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <div style="display:flex;gap:18px;flex-wrap:wrap;margin-top:14px;">
          <label class="checkbox-label">
            <input type="checkbox" id="examShuffleQ" checked>
            <span>Xáo trộn thứ tự câu hỏi</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" id="examShuffleOpts" checked>
            <span>Xáo trộn đáp án A–D</span>
          </label>
        </div>

        <div style="margin-top:18px;display:flex;align-items:center;gap:12px;">
          <button class="btn-primary" id="startCustomExamBtn" type="button">Bắt đầu làm bài</button>
          <span class="muted-text" id="examConfigHint" style="margin:0;"></span>
        </div>
      </div>

      ${historyHtml}
    </div>
  `;
}

function renderActiveExam() {
  const { items, currentIdx, timeLimitSec, remainingSec, label } = examSession;
  const item = items[currentIdx];
  const q = QUESTION_MAP.get(item.qId);
  const lesson = LESSON_MAP.get(q.lesson);
  const answeredCount = items.filter(it => it.selectedDisplayIdx !== null).length;
  const unansweredCount = items.length - answeredCount;

  const timerBlock = timeLimitSec > 0
    ? `<div class="exam-timer ${remainingSec <= 120 ? 'is-low' : ''}" id="examTimerDisplay">${formatDuration(remainingSec)}</div>`
    : `<div class="exam-timer">Không giới hạn giờ</div>`;

  const submitLabel = pendingSubmitConfirm && unansweredCount > 0
    ? `Còn ${unansweredCount} câu chưa chọn — Nhấn lại để nộp`
    : 'Nộp bài';

  const optionsHtml = item.optionOrder.map((origIdx, dispIdx) => {
    const selected = item.selectedDisplayIdx === dispIdx ? 'is-selected' : '';
    return `
      <button class="option-btn ${selected}" data-exam-opt="${dispIdx}" type="button">
        <span class="opt-letter">${LETTERS[dispIdx]}</span>
        <span>${esc(q.options[origIdx])}</span>
      </button>
    `;
  }).join('');

  const paletteHtml = items.map((it, idx) => {
    const cls = [
      'jump-num',
      idx === currentIdx ? 'is-current' : '',
      it.selectedDisplayIdx !== null ? 'is-answered' : '',
      it.flagged ? 'is-flagged' : ''
    ].filter(Boolean).join(' ');
    return `<button class="${cls}" data-exam-jump="${idx}" type="button">${idx + 1}</button>`;
  }).join('');

  return `
    <div class="exam-topbar">
      <div>
        <strong>${esc(label)}</strong>
        <span class="muted-text" style="margin-left:10px;">Đã chọn ${answeredCount}/${items.length} câu</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        ${timerBlock}
        <button class="btn-subtle btn-sm" id="abortExamBtn" type="button">Hủy bài</button>
        <button class="btn-primary btn-sm" id="submitExamBtn" type="button">${submitLabel}</button>
      </div>
    </div>

    <div class="exam-layout">
      <div>
        <article class="q-card">
          <div class="q-meta-row">
            <div class="q-badges">
              <span class="q-num">Câu ${currentIdx + 1} / ${items.length}</span>
              <span class="tag">${esc(lesson.code)}</span>
              <span class="tag">${q.source === 'textbook' ? 'Câu gốc trong file' : 'Mở rộng mục tiêu'}</span>
            </div>
            <button class="bookmark-btn ${item.flagged ? 'is-saved' : ''}" id="toggleExamFlagBtn" type="button">
              ${item.flagged ? 'Đã gắn cờ xem lại' : 'Đánh dấu xem lại'}
            </button>
          </div>
          <p class="q-stem">${esc(q.q)}</p>
          <div class="options-list">${optionsHtml}</div>
        </article>

        <div class="q-nav-bar">
          <div style="display:flex;gap:8px;">
            <button class="btn-secondary" id="examPrevBtn" type="button" ${currentIdx === 0 ? 'disabled' : ''}>← Câu trước</button>
            <button class="btn-primary" id="examNextBtn" type="button" ${currentIdx >= items.length - 1 ? 'disabled' : ''}>Câu tiếp →</button>
          </div>
          <span class="kbd-hint">Phím tắt: 1–4 / A–D chọn · ← → chuyển câu</span>
        </div>
      </div>

      <aside class="exam-sheet">
        <h3>Phiếu trả lời (${answeredCount}/${items.length})</h3>
        <div class="jumper-grid">${paletteHtml}</div>
        <div class="legend-row">
          <span>Trắng: chưa chọn</span>
          <span>Xanh đậm: đã chọn</span>
          <span>Chấm vàng: xem lại</span>
        </div>
      </aside>
    </div>
  `;
}

function renderExamResult() {
  const { items, correctCount, score10, elapsedSec, label, reviewFilter } = examSession;
  const total = items.length;
  const pct = total ? Math.round((correctCount / total) * 100) : 0;

  // Per-lesson breakdown
  const byLesson = new Map();
  items.forEach(it => {
    const q = QUESTION_MAP.get(it.qId);
    if (!byLesson.has(q.lesson)) {
      byLesson.set(q.lesson, { total: 0, correct: 0 });
    }
    const stat = byLesson.get(q.lesson);
    stat.total += 1;
    if (it.isCorrect) stat.correct += 1;
  });

  const breakdownRows = [...byLesson.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([lessonId, st]) => {
      const lesson = LESSON_MAP.get(lessonId);
      const lPct = Math.round((st.correct / st.total) * 100);
      return `
        <tr>
          <td><strong>${esc(lesson.code)}</strong>: ${esc(lesson.title)}</td>
          <td style="font-family:var(--mono);">${st.correct} / ${st.total}</td>
          <td style="font-family:var(--mono);color:${lPct < 70 ? 'var(--wrong)' : 'var(--correct)'};">${lPct}%</td>
          <td><button class="link-btn" data-jump-lesson="${lessonId}" type="button">Ôn lại bài này</button></td>
        </tr>
      `;
    }).join('');

  const filteredItems = items
    .map((it, origIdx) => ({ it, origIdx }))
    .filter(({ it }) => {
      if (reviewFilter === 'wrong') return !it.isCorrect;
      if (reviewFilter === 'correct') return it.isCorrect;
      if (reviewFilter === 'flagged') return it.flagged;
      return true;
    });

  const wrongIds = items.filter(it => !it.isCorrect).map(it => it.qId);

  const reviewCardsHtml = filteredItems.length
    ? filteredItems.map(({ it, origIdx }) => {
        const q = QUESTION_MAP.get(it.qId);
        const lesson = LESSON_MAP.get(q.lesson);
        const optsHtml = it.optionOrder.map((origOptIdx, dispIdx) => {
          let cls = 'option-btn';
          if (origOptIdx === q.answer) cls += ' is-correct';
          else if (it.selectedDisplayIdx === dispIdx && !it.isCorrect) cls += ' is-wrong';
          return `
            <button class="${cls}" disabled type="button">
              <span class="opt-letter">${LETTERS[dispIdx]}</span>
              <span>${esc(q.options[origOptIdx])}</span>
            </button>
          `;
        }).join('');

        const correctDisplayIdx = it.optionOrder.indexOf(q.answer);
        const statusLine = it.isCorrect
          ? `<div class="explain-status ok">Đúng</div>`
          : `<div class="explain-status bad">${it.selectedDisplayIdx === null ? 'Chưa trả lời' : 'Chưa đúng'} · Đáp án đúng: ${LETTERS[correctDisplayIdx]}</div>`;

        return `
          <article class="q-card">
            <div class="q-meta-row">
              <div class="q-badges">
                <span class="q-num">Câu ${origIdx + 1} / ${total}</span>
                <span class="tag">${esc(lesson.code)}</span>
                <span class="tag ${q.source === 'textbook' ? 'tag-file' : 'tag-obj'}">
                  ${q.source === 'textbook' ? `File gốc · Câu ${q.origNum}` : 'Mở rộng mục tiêu'}
                </span>
              </div>
              <button class="bookmark-btn ${state.bookmarks.includes(q.id) ? 'is-saved' : ''}" data-toggle-bookmark="${q.id}" type="button">
                ${state.bookmarks.includes(q.id) ? 'Đã đánh dấu' : 'Đánh dấu'}
              </button>
            </div>
            <p class="q-stem">${esc(q.q)}</p>
            <div class="options-list">${optsHtml}</div>
            <div class="explain-box ${it.isCorrect ? '' : 'is-wrong-state'}">
              ${statusLine}
              <div>${esc(q.explain)}</div>
            </div>
          </article>
        `;
      }).join('')
    : `<div class="empty-box">Không có câu nào trong nhóm lọc này.</div>`;

  return `
    <div style="max-width:860px;margin:0 auto;">
      <div class="panel-card">
        <div class="score-hero">
          <div>
            <div class="lesson-kicker">${esc(label)} · ĐÃ NỘP BÀI</div>
            <div class="score-number">${score10.toFixed(2)} / 10 điểm</div>
            <div style="font-size:0.9rem;color:var(--text-secondary);margin-top:4px;">
              Đúng <strong>${correctCount}/${total}</strong> câu (${pct}%) · Thời gian làm bài: ${esc(formatDurationWords(elapsedSec))}
            </div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${wrongIds.length ? `<button class="btn-secondary" id="retakeWrongExamBtn" type="button">Làm lại ${wrongIds.length} câu sai</button>` : ''}
            <button class="btn-primary" id="newExamSetupBtn" type="button">Tạo đề thi mới</button>
          </div>
        </div>

        <h3 style="margin:0 0 8px;font-size:0.94rem;">Phân tích kết quả theo từng bài</h3>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th>Bài học</th>
                <th>Số câu đúng</th>
                <th>Tỷ lệ</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>${breakdownRows}</tbody>
          </table>
        </div>
      </div>

      <div class="filter-bar">
        <div class="filter-group">
          <button class="chip ${reviewFilter === 'all' ? 'is-active' : ''}" data-review-filter="all" type="button">Tất cả (${total})</button>
          <button class="chip ${reviewFilter === 'wrong' ? 'is-active' : ''}" data-review-filter="wrong" type="button">Câu sai (${total - correctCount})</button>
          <button class="chip ${reviewFilter === 'correct' ? 'is-active' : ''}" data-review-filter="correct" type="button">Câu đúng (${correctCount})</button>
          <button class="chip ${reviewFilter === 'flagged' ? 'is-active' : ''}" data-review-filter="flagged" type="button">Gắn cờ (${items.filter(i => i.flagged).length})</button>
        </div>
      </div>

      ${reviewCardsHtml}
    </div>
  `;
}

function renderExamTab() {
  const container = document.getElementById('examContainer');
  if (!examSession) {
    container.innerHTML = renderExamSetup();
  } else if (examSession.status === 'active') {
    container.innerHTML = renderActiveExam();
  } else {
    container.innerHTML = renderExamResult();
  }
}

// ================= TAB 3: MỤC TIÊU & SỐ LIỆU =================
function renderCramTab() {
  const container = document.getElementById('cramContainer');
  const query = cramSearchQuery.trim().toLowerCase();

  let contentHtml = '';
  if (cramSubView === 'tables') {
    const filteredTables = CRAM_TABLES.map(tbl => {
      const rows = query
        ? tbl.rows.filter(r => r.some(cell => cell.toLowerCase().includes(query)) || tbl.title.toLowerCase().includes(query))
        : tbl.rows;
      return { ...tbl, rows };
    }).filter(t => t.rows.length > 0);

    contentHtml = filteredTables.length
      ? filteredTables.map(tbl => `
          <div class="panel-card">
            <h3 style="margin:0 0 10px;font-size:0.98rem;">${esc(tbl.title)}</h3>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>${tbl.columns.map(c => `<th>${esc(c)}</th>`).join('')}</tr>
                </thead>
                <tbody>
                  ${tbl.rows.map(row => `<tr>${row.map((cell, i) => `<td>${i === 0 ? `<strong>${esc(cell)}</strong>` : esc(cell)}</td>`).join('')}</tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `).join('')
      : `<div class="empty-box">Không tìm thấy nội dung nào khớp với "${esc(cramSearchQuery)}".</div>`;
  } else {
    // Objectives checklist across all 10 lessons
    contentHtml = LESSONS.map((l, idx) => {
      const renderObj = (sec, arr) => arr.map((item, i) => {
        const key = `${l.id}-${sec}-${i}`;
        const checked = state.checkedObjectives[key] ? 'checked' : '';
        return `<li><label><input type="checkbox" data-obj-key="${key}" ${checked}><span>${esc(item)}</span></label></li>`;
      }).join('');

      return `
        <details class="obj-accordion" ${idx === 0 ? 'open' : ''}>
          <summary>
            <span>${esc(l.code)}: ${esc(l.title)} <span style="font-weight:400;color:var(--text-muted);font-size:0.82rem;">(${esc(l.pages)})</span></span>
            <span class="link-btn" data-jump-lesson="${l.id}" style="font-size:0.8rem;">Làm trắc nghiệm</span>
          </summary>
          <div class="obj-accordion-body">
            <div class="obj-columns">
              <div class="obj-block"><h4>Kiến thức</h4><ul class="obj-checklist">${renderObj('k', l.objectives.knowledge)}</ul></div>
              <div class="obj-block"><h4>Kỹ năng</h4><ul class="obj-checklist">${renderObj('s', l.objectives.skills)}</ul></div>
              <div class="obj-block"><h4>Thái độ</h4><ul class="obj-checklist">${renderObj('a', l.objectives.attitude)}</ul></div>
            </div>
            <div class="highlights-box">
              <h4>Tóm tắt con số trọng tâm</h4>
              <ul>${l.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>
            </div>
          </div>
        </details>
      `;
    }).join('');
  }

  container.innerHTML = `
    <div style="max-width:960px;margin:0 auto;">
      <div class="cram-head">
        <div class="segmented">
          <button class="seg-btn ${cramSubView === 'tables' ? 'is-active' : ''}" data-cram-view="tables" type="button">Bảng số liệu &amp; Tóm tắt thi</button>
          <button class="seg-btn ${cramSubView === 'objectives' ? 'is-active' : ''}" data-cram-view="objectives" type="button">Mục tiêu 10 bài học</button>
        </div>
        ${cramSubView === 'tables' ? `
          <input type="search" id="cramSearchInput" class="text-input cram-search" placeholder="Tìm nhanh: B12, DASH, 165, Warfarin..." value="${esc(cramSearchQuery)}">
        ` : ''}
      </div>
      ${contentHtml}
    </div>
  `;
}

// ================= TAB 4: HAY SAI & ĐÃ LƯU =================
function renderSavedTab() {
  const container = document.getElementById('savedContainer');
  const wrongEntries = Object.entries(state.wrongCounts)
    .filter(([, cnt]) => cnt > 0)
    .sort((a, b) => b[1] - a[1]);

  const wrongIds = wrongEntries.map(([id]) => id).filter(id => QUESTION_MAP.has(id));
  const bookmarkIds = state.bookmarks.filter(id => QUESTION_MAP.has(id));
  const activeIds = savedSubView === 'wrong' ? wrongIds : bookmarkIds;

  const cardsHtml = activeIds.length
    ? activeIds.map((qId, idx) => {
        const q = QUESTION_MAP.get(qId);
        const lesson = LESSON_MAP.get(q.lesson);
        const wrongCnt = state.wrongCounts[qId] || 0;
        const userAns = state.answers[qId];
        const isBookmarked = state.bookmarks.includes(qId);

        const optsHtml = q.options.map((optText, oIdx) => {
          let cls = 'option-btn';
          if (userAns) {
            if (oIdx === q.answer) cls += ' is-correct';
            else if (userAns.selected === oIdx) cls += ' is-wrong';
          }
          return `
            <button class="${cls}" data-practice-answer="${q.id}" data-opt-idx="${oIdx}" type="button">
              <span class="opt-letter">${LETTERS[oIdx]}</span>
              <span>${esc(optText)}</span>
            </button>
          `;
        }).join('');

        return `
          <article class="q-card">
            <div class="q-meta-row">
              <div class="q-badges">
                <span class="q-num">Câu ${idx + 1} / ${activeIds.length}</span>
                <span class="tag">${esc(lesson.code)}</span>
                ${wrongCnt > 0 ? `<span class="tag" style="color:var(--wrong);background:var(--wrong-bg);border-color:var(--wrong-border);">Sai ${wrongCnt} lần</span>` : ''}
              </div>
              <div style="display:flex;gap:8px;">
                ${savedSubView === 'wrong' ? `<button class="btn-subtle btn-sm" data-clear-wrong="${q.id}" type="button">Đã thuộc, bỏ khỏi mục sai</button>` : ''}
                <button class="bookmark-btn ${isBookmarked ? 'is-saved' : ''}" data-toggle-bookmark="${q.id}" type="button">
                  ${isBookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu'}
                </button>
              </div>
            </div>
            <p class="q-stem">${esc(q.q)}</p>
            <div class="options-list">${optsHtml}</div>
            ${userAns ? `
              <div class="explain-box ${userAns.isCorrect ? '' : 'is-wrong-state'}">
                <div class="explain-status ${userAns.isCorrect ? 'ok' : 'bad'}">
                  ${userAns.isCorrect ? 'Chính xác' : `Chưa đúng · Đáp án đúng: ${LETTERS[q.answer]}`}
                </div>
                <div>${esc(q.explain)}</div>
              </div>
            ` : ''}
          </article>
        `;
      }).join('')
    : `
      <div class="empty-box">
        ${savedSubView === 'wrong'
          ? 'Hiện chưa có câu nào bị làm sai. Khi làm bài ở mục Ôn theo bài hoặc Thi thử, các câu sai sẽ tự động lưu vào đây.'
          : 'Bạn chưa đánh dấu câu hỏi nào. Nhấn "Đánh dấu" ở góc phải mỗi câu hỏi để lưu lại ôn riêng.'}
      </div>
    `;

  container.innerHTML = `
    <div style="max-width:820px;margin:0 auto;">
      <div class="filter-bar">
        <div class="filter-group">
          <button class="chip ${savedSubView === 'wrong' ? 'is-active' : ''}" data-saved-view="wrong" type="button">Câu từng làm sai (${wrongIds.length})</button>
          <button class="chip ${savedSubView === 'bookmarks' ? 'is-active' : ''}" data-saved-view="bookmarks" type="button">Câu đã đánh dấu (${bookmarkIds.length})</button>
        </div>
        ${activeIds.length ? `
          <button class="btn-primary btn-sm" id="quizFromSavedBtn" type="button">Làm bài kiểm tra ${activeIds.length} câu này</button>
        ` : ''}
      </div>
      ${cardsHtml}
    </div>
  `;
}

// ================= BACKUP MODAL =================
function openBackupModal() {
  const modal = document.getElementById('backupModal');
  const statsEl = document.getElementById('modalStatsSummary');
  const answered = Object.keys(state.answers).length;
  const correct = Object.values(state.answers).filter(a => a.isCorrect).length;
  const wrongCnt = Object.values(state.wrongCounts).filter(c => c > 0).length;

  statsEl.innerHTML = `
    <div>Câu đã làm: <strong>${answered}/${ALL_QUESTIONS.length}</strong></div>
    <div>Trả lời đúng: <strong>${correct}</strong></div>
    <div>Câu hay sai: <strong>${wrongCnt}</strong></div>
    <div>Đánh dấu: <strong>${state.bookmarks.length}</strong></div>
    <div>Số đề đã thi: <strong>${state.examHistory.length}</strong></div>
  `;
  document.getElementById('backupStatusMsg').classList.add('is-hidden');
  modal.classList.remove('is-hidden');
}

function closeBackupModal() {
  document.getElementById('backupModal').classList.add('is-hidden');
}

// ================= EVENT WIRING =================
document.addEventListener('click', e => {
  const target = e.target;

  // Nav tabs
  const navBtn = target.closest('.nav-btn');
  if (navBtn) {
    switchTab(navBtn.dataset.tab);
    return;
  }

  // Select lesson
  const lessonBtn = target.closest('[data-select-lesson]');
  if (lessonBtn) {
    state.selectedLesson = Number(lessonBtn.dataset.selectLesson);
    saveState();
    renderPracticeTab();
    return;
  }

  if (target.id === 'selectAllLessonsBtn') {
    state.selectedLesson = 'all';
    saveState();
    renderPracticeTab();
    return;
  }

  if (target.id === 'toggleObjectivesBtn') {
    showObjectivesDrawer = !showObjectivesDrawer;
    renderLessonBanner();
    return;
  }

  if (target.id === 'quickExamFromLessonBtn') {
    const scope = state.selectedLesson === 'all' ? LESSONS.map(l => l.id) : [state.selectedLesson];
    const label = state.selectedLesson === 'all'
      ? 'Đề tổng hợp 40 câu'
      : `Kiểm tra ${LESSON_MAP.get(state.selectedLesson).code}`;
    switchTab('exam');
    startExam({
      lessons: scope,
      source: 'all',
      count: state.selectedLesson === 'all' ? 40 : 30,
      minutes: state.selectedLesson === 'all' ? 30 : 20,
      shuffleQ: true,
      shuffleOpts: true,
      label
    });
    return;
  }

  // Filter source
  const srcBtn = target.closest('[data-filter-source]');
  if (srcBtn) {
    state.filterSource = srcBtn.dataset.filterSource;
    saveState();
    renderPracticeTab();
    return;
  }

  // View mode
  const viewBtn = target.closest('[data-view-mode]');
  if (viewBtn) {
    state.viewMode = viewBtn.dataset.viewMode;
    saveState();
    renderPracticeTab();
    return;
  }

  if (target.id === 'clearFiltersBtn') {
    state.filterSource = 'all';
    state.filterType = 'all';
    state.filterStatus = 'all';
    saveState();
    renderPracticeTab();
    return;
  }

  if (target.id === 'resetScopeBtn' || target.id === 'resetScopeBtnSingle') {
    resetFilteredQuestions();
    return;
  }

  // Practice answer click
  const ansBtn = target.closest('[data-practice-answer]');
  if (ansBtn) {
    recordPracticeAnswer(ansBtn.dataset.practiceAnswer, Number(ansBtn.dataset.optIdx));
    return;
  }

  // Bookmark toggle
  const bmBtn = target.closest('[data-toggle-bookmark]');
  if (bmBtn) {
    toggleBookmark(bmBtn.dataset.toggleBookmark);
    return;
  }

  // Single view prev / next / jump
  if (target.id === 'prevQuestionBtn' || target.id === 'nextQuestionBtn') {
    const filtered = getFilteredQuestions();
    const key = scopeKey();
    const cur = state.currentIndexByScope[key] || 0;
    const next = target.id === 'prevQuestionBtn' ? Math.max(0, cur - 1) : Math.min(filtered.length - 1, cur + 1);
    state.currentIndexByScope[key] = next;
    saveState();
    renderPracticeTab();
    return;
  }

  const jumpBtn = target.closest('[data-jump-idx]');
  if (jumpBtn) {
    state.currentIndexByScope[scopeKey()] = Number(jumpBtn.dataset.jumpIdx);
    saveState();
    renderPracticeTab();
    return;
  }

  // Exam presets
  const presetBtn = target.closest('[data-preset]');
  if (presetBtn) {
    const p = presetBtn.dataset.preset;
    const allIds = LESSONS.map(l => l.id);
    if (p === '40-30') {
      startExam({ lessons: allIds, source: 'all', count: 40, minutes: 30, shuffleQ: true, shuffleOpts: true, label: 'Đề chuẩn 40 câu · 30 phút' });
    } else if (p === '60-45') {
      startExam({ lessons: allIds, source: 'all', count: 60, minutes: 45, shuffleQ: true, shuffleOpts: true, label: 'Đề tổng lực 60 câu · 45 phút' });
    } else if (p === 'textbook-99') {
      startExam({ lessons: allIds, source: 'textbook', count: 99, minutes: 60, shuffleQ: false, shuffleOpts: false, label: 'Toàn bộ 99 câu gốc giáo trình' });
    } else if (p === 'quick-20') {
      startExam({ lessons: allIds, source: 'all', count: 20, minutes: 15, shuffleQ: true, shuffleOpts: true, label: 'Kiểm tra nhanh 20 câu' });
    }
    return;
  }

  if (target.id === 'examCheckAllLessons' || target.id === 'examUncheckAllLessons') {
    const checked = target.id === 'examCheckAllLessons';
    document.querySelectorAll('.exam-lesson-cb').forEach(cb => { cb.checked = checked; });
    return;
  }

  if (target.id === 'startCustomExamBtn') {
    const lessons = [...document.querySelectorAll('.exam-lesson-cb:checked')].map(cb => Number(cb.value));
    const hint = document.getElementById('examConfigHint');
    if (!lessons.length) {
      if (hint) hint.textContent = 'Vui lòng chọn ít nhất 1 bài học.';
      return;
    }
    const count = document.getElementById('examCountSelect').value;
    const minutes = Number(document.getElementById('examTimeSelect').value);
    const source = document.getElementById('examSourceSelect').value;
    const shuffleQ = document.getElementById('examShuffleQ').checked;
    const shuffleOpts = document.getElementById('examShuffleOpts').checked;
    const label = lessons.length === LESSONS.length
      ? `Đề tự chọn (${count === 'all' ? 'Tất cả' : count} câu)`
      : `Đề ${lessons.map(i => `B${i}`).join(', ')}`;
    startExam({ lessons, source, count, minutes, shuffleQ, shuffleOpts, label });
    return;
  }

  // Active exam controls
  const examOptBtn = target.closest('[data-exam-opt]');
  if (examOptBtn && examSession && examSession.status === 'active') {
    examSession.items[examSession.currentIdx].selectedDisplayIdx = Number(examOptBtn.dataset.examOpt);
    pendingSubmitConfirm = false;
    renderExamTab();
    return;
  }

  const examJumpBtn = target.closest('[data-exam-jump]');
  if (examJumpBtn && examSession && examSession.status === 'active') {
    examSession.currentIdx = Number(examJumpBtn.dataset.examJump);
    pendingSubmitConfirm = false;
    renderExamTab();
    return;
  }

  if (target.id === 'examPrevBtn' && examSession && examSession.status === 'active') {
    examSession.currentIdx = Math.max(0, examSession.currentIdx - 1);
    pendingSubmitConfirm = false;
    renderExamTab();
    return;
  }

  if (target.id === 'examNextBtn' && examSession && examSession.status === 'active') {
    examSession.currentIdx = Math.min(examSession.items.length - 1, examSession.currentIdx + 1);
    pendingSubmitConfirm = false;
    renderExamTab();
    return;
  }

  if (target.id === 'toggleExamFlagBtn' && examSession && examSession.status === 'active') {
    const it = examSession.items[examSession.currentIdx];
    it.flagged = !it.flagged;
    renderExamTab();
    return;
  }

  if (target.id === 'submitExamBtn' && examSession && examSession.status === 'active') {
    const unanswered = examSession.items.filter(it => it.selectedDisplayIdx === null).length;
    if (unanswered > 0 && !pendingSubmitConfirm) {
      pendingSubmitConfirm = true;
      renderExamTab();
      return;
    }
    submitExam();
    return;
  }

  if (target.id === 'abortExamBtn') {
    stopExamTimer();
    examSession = null;
    pendingSubmitConfirm = false;
    renderExamTab();
    return;
  }

  if (target.id === 'newExamSetupBtn') {
    examSession = null;
    renderExamTab();
    return;
  }

  if (target.id === 'retakeWrongExamBtn' && examSession && examSession.status === 'submitted') {
    const wrongIds = examSession.items.filter(it => !it.isCorrect).map(it => it.qId);
    if (wrongIds.length) {
      startExam({
        lessons: LESSONS.map(l => l.id),
        source: 'all',
        count: 'all',
        minutes: 0,
        shuffleQ: true,
        shuffleOpts: true,
        label: `Ôn lại ${wrongIds.length} câu sai`,
        customIds: wrongIds
      });
    }
    return;
  }

  const revFilterBtn = target.closest('[data-review-filter]');
  if (revFilterBtn && examSession && examSession.status === 'submitted') {
    examSession.reviewFilter = revFilterBtn.dataset.reviewFilter;
    renderExamTab();
    return;
  }

  const jumpLessonBtn = target.closest('[data-jump-lesson]');
  if (jumpLessonBtn) {
    state.selectedLesson = Number(jumpLessonBtn.dataset.jumpLesson);
    state.filterSource = 'all';
    state.filterType = 'all';
    state.filterStatus = 'all';
    switchTab('practice');
    return;
  }

  // Cram subviews
  const cramViewBtn = target.closest('[data-cram-view]');
  if (cramViewBtn) {
    cramSubView = cramViewBtn.dataset.cramView;
    renderCramTab();
    return;
  }

  // Saved subviews
  const savedViewBtn = target.closest('[data-saved-view]');
  if (savedViewBtn) {
    savedSubView = savedViewBtn.dataset.savedView;
    renderSavedTab();
    return;
  }

  const clearWrongBtn = target.closest('[data-clear-wrong]');
  if (clearWrongBtn) {
    delete state.wrongCounts[clearWrongBtn.dataset.clearWrong];
    saveState();
    updateHeaderStats();
    renderSavedTab();
    return;
  }

  if (target.id === 'quizFromSavedBtn') {
    const ids = savedSubView === 'wrong'
      ? Object.entries(state.wrongCounts).filter(([, c]) => c > 0).map(([id]) => id)
      : [...state.bookmarks];
    if (ids.length) {
      switchTab('exam');
      startExam({
        lessons: LESSONS.map(l => l.id),
        source: 'all',
        count: 'all',
        minutes: 0,
        shuffleQ: true,
        shuffleOpts: true,
        label: savedSubView === 'wrong' ? `Luyện lại ${ids.length} câu sai` : `Kiểm tra ${ids.length} câu đã lưu`,
        customIds: ids
      });
    }
    return;
  }

  // Modal controls
  if (target.id === 'backupBtn') {
    openBackupModal();
    return;
  }
  if (target.id === 'closeBackupModal' || target.id === 'backupModal') {
    closeBackupModal();
    return;
  }
  if (target.id === 'exportProgressBtn') {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tien-do-dinh-duong-2026.json`;
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  if (target.id === 'clearAllProgressBtn') {
    if (!target.dataset.confirm) {
      target.dataset.confirm = '1';
      target.textContent = 'Nhấn lại để xác nhận xóa';
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(state, loadState());
    target.dataset.confirm = '';
    target.textContent = 'Xóa tiến độ';
    updateHeaderStats();
    closeBackupModal();
    switchTab(state.activeTab);
  }
});

document.addEventListener('change', e => {
  const target = e.target;

  if (target.id === 'mobileLessonSelect') {
    state.selectedLesson = target.value === 'all' ? 'all' : Number(target.value);
    saveState();
    renderPracticeTab();
    return;
  }
  if (target.id === 'filterType') {
    state.filterType = target.value;
    saveState();
    renderPracticeTab();
    return;
  }
  if (target.id === 'filterStatus') {
    state.filterStatus = target.value;
    saveState();
    renderPracticeTab();
    return;
  }
  if (target.id === 'revealAllListToggle') {
    state.revealAllList = target.checked;
    saveState();
    renderPracticeTab();
    return;
  }
  if (target.dataset.objKey) {
    const key = target.dataset.objKey;
    if (target.checked) state.checkedObjectives[key] = true;
    else delete state.checkedObjectives[key];
    saveState();
    return;
  }
  if (target.id === 'importProgressInput') {
    const file = target.files && target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (parsed && typeof parsed === 'object' && parsed.answers) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
          Object.assign(state, loadState());
          updateHeaderStats();
          openBackupModal();
          const msg = document.getElementById('backupStatusMsg');
          msg.textContent = 'Khôi phục tiến độ thành công.';
          msg.classList.remove('is-hidden');
          switchTab(state.activeTab);
        }
      } catch {
        const msg = document.getElementById('backupStatusMsg');
        msg.textContent = 'File không đúng định dạng sao lưu.';
        msg.classList.remove('is-hidden');
      }
    };
    reader.readAsText(file);
  }
});

document.addEventListener('input', e => {
  if (e.target.id === 'cramSearchInput') {
    cramSearchQuery = e.target.value;
    const pos = e.target.selectionStart;
    renderCramTab();
    const fresh = document.getElementById('cramSearchInput');
    if (fresh) {
      fresh.focus();
      fresh.setSelectionRange(pos, pos);
    }
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
  if (!document.getElementById('backupModal').classList.contains('is-hidden')) {
    if (e.key === 'Escape') closeBackupModal();
    return;
  }

  const keyLower = e.key.toLowerCase();
  const keyMap = { '1': 0, 'a': 0, '2': 1, 'b': 1, '3': 2, 'c': 2, '4': 3, 'd': 3 };

  if (state.activeTab === 'practice' && state.viewMode === 'single') {
    const filtered = getFilteredQuestions();
    if (!filtered.length) return;
    const curIdx = state.currentIndexByScope[scopeKey()] || 0;
    const curQ = filtered[curIdx];
    if (!curQ) return;

    if (keyLower in keyMap) {
      e.preventDefault();
      recordPracticeAnswer(curQ.id, keyMap[keyLower]);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      state.currentIndexByScope[scopeKey()] = Math.max(0, curIdx - 1);
      saveState();
      renderPracticeTab();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      state.currentIndexByScope[scopeKey()] = Math.min(filtered.length - 1, curIdx + 1);
      saveState();
      renderPracticeTab();
    } else if (keyLower === 's') {
      e.preventDefault();
      toggleBookmark(curQ.id);
    }
  } else if (state.activeTab === 'exam' && examSession && examSession.status === 'active') {
    if (keyLower in keyMap) {
      e.preventDefault();
      examSession.items[examSession.currentIdx].selectedDisplayIdx = keyMap[keyLower];
      pendingSubmitConfirm = false;
      renderExamTab();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      examSession.currentIdx = Math.max(0, examSession.currentIdx - 1);
      renderExamTab();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      examSession.currentIdx = Math.min(examSession.items.length - 1, examSession.currentIdx + 1);
      renderExamTab();
    }
  }
});

// Init
updateHeaderStats();
switchTab(state.activeTab || 'practice');
