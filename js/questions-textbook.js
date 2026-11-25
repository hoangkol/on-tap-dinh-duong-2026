export const TEXTBOOK_QUESTIONS = [
  // ================= BÀI 1 =================
  {
    id: 'tb-1-1',
    lesson: 1,
    origNum: 1,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Định nghĩa Sức khỏe & Trạng thái thứ ba',
    q: 'Định nghĩa nào sau đây phản ánh chính xác nhất về "Trạng thái thứ ba" của sức khỏe?',
    options: [
      'Là trạng thái hoàn toàn khỏe mạnh về cả thể chất lẫn tinh thần.',
      'Là trạng thái bệnh lý cấp tính, có đầy đủ triệu chứng lâm sàng đặc hiệu.',
      'Là vùng tiếp giáp trung gian giữa sức khỏe và bệnh tật, có thể đảo ngược bằng can thiệp dinh dưỡng hợp lý.',
      'Là giai đoạn suy kiệt cuối cùng của các bệnh lý mạn tính không lây.'
    ],
    answer: 2,
    explain: 'Bài 1 (Mục 1.2): "Trạng thái thứ ba" là vùng xám sinh học nằm giữa sức khỏe hoàn mỹ và bệnh lý rõ rệt (ví dụ mệt mỏi mạn tính, đề kháng insulin nhẹ), có thể đảo ngược về khỏe mạnh nhờ can thiệp dinh dưỡng và lối sống.'
  },
  {
    id: 'tb-1-2',
    lesson: 1,
    origNum: 2,
    source: 'textbook',
    type: 'calc',
    objectiveTag: 'Kỹ năng · Tính năng lượng Atwater',
    q: 'Tính toán năng lượng khẩu phần của một bữa ăn chứa 50g Carbohydrate, 20g Protein và 10g Lipid (bỏ qua cồn và chất xơ)?',
    options: ['370 kcal', '420 kcal', '450 kcal', '500 kcal'],
    answer: 0,
    explain: 'Áp dụng hệ số Atwater (Bài 1, Mục 1.3): (50 × 4) + (20 × 4) + (10 × 9) = 200 + 80 + 90 = 370 kcal.'
  },
  {
    id: 'tb-1-3',
    lesson: 1,
    origNum: 3,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Phát triển thần kinh & não bộ',
    q: 'Đỉnh cao tăng sinh, lớn lên và phân hóa của tế bào não bộ người diễn ra ở giai đoạn nào?',
    options: [
      'Giai đoạn đầu thai kỳ và tuổi mẫu giáo.',
      'Giai đoạn cuối thai kỳ và thời kỳ sơ sinh.',
      'Tuổi dậy thì và lứa tuổi vị thành niên.',
      'Giai đoạn trung niên trước khi bắt đầu lão hóa.'
    ],
    answer: 1,
    explain: 'Bài 1 (Mục 2.2): Sự tăng sinh, lớn lên và phân hóa của tế bào não đạt đỉnh cao vào giai đoạn cuối thai kỳ và thời kỳ sơ sinh; thiếu protein/năng lượng lúc này gây tổn thương không hồi phục.'
  },
  {
    id: 'tb-1-4',
    lesson: 1,
    origNum: 4,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Hoạt chất chống lão hóa từ thực phẩm',
    q: 'Hoạt chất cylogen có trong củ cà rốt có tác dụng sinh học nào sau đây?',
    options: [
      'Kích thích não giữa, tuyến yên tăng cường tuần hoàn máu.',
      'Ngăn ngừa peroxy hóa chất béo để bảo vệ màng tế bào.',
      'Tăng cường hoạt lực đại thực bào gấp ba lần để thực bào các tế bào ung thư.',
      'Kích thích sản sinh tế bào lympho T tại tuyến ức bị teo.'
    ],
    answer: 2,
    explain: 'Bài 1 (Mục 2.4): Cà rốt chứa hoạt chất chống oxy hóa tự nhiên cylogen/beta-carotene giúp tăng hoạt lực đại thực bào gấp 3 lần, hỗ trợ tiêu diệt tế bào ung thư.'
  },
  {
    id: 'tb-1-5',
    lesson: 1,
    origNum: 5,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Suy giảm miễn dịch do PEM',
    q: 'Ở người suy dinh dưỡng protein - năng lượng nặng (PEM), sự biến đổi suy thoái xảy ra nổi bật ở cơ quan nào?',
    options: [
      'Chỉ xảy ra ở các cơ xương chi dưới.',
      'Tủy xương, tuyến ức, tụ lách, hạch bạch huyết.',
      'Hệ thống mạch máu ngoại vi và tế bào nội mạc.',
      'Tuyến giáp và tuyến thượng thận sinh dục.'
    ],
    answer: 1,
    explain: 'Bài 1 (Mục 3.1): Suy dinh dưỡng PEM nặng làm teo nhỏ và suy thoái cả cơ quan miễn dịch trung tâm (tủy xương, tuyến ức) lẫn ngoại vi (tụ lách, hạch bạch huyết).'
  },
  {
    id: 'tb-1-6',
    lesson: 1,
    origNum: 6,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Vi chất điều hòa miễn dịch',
    q: 'Sự thiếu hụt Vitamin B6 trong khẩu phần ăn sẽ gây ra hậu quả nào lên hệ miễn dịch?',
    options: [
      'Làm tăng quá mức hoạt tính của đại thực bào.',
      'Giảm nhẹ trọng lượng tuyến ức, tụy phát triển không hoàn thiện, giảm tế bào lympho đặc biệt là lympho T.',
      'Gây keratin hóa các biểu mô đường hô hấp.',
      'Làm tăng nồng độ globulin miễn dịch IgA trong sữa non.'
    ],
    answer: 1,
    explain: 'Bài 1 (Mục 3.2): Thiếu Vitamin B6 (Pyridoxine) làm sụt giảm trọng lượng tuyến ức, tụy phát triển không hoàn thiện và giảm mạnh tế bào lympho (đặc biệt lympho T).'
  },
  {
    id: 'tb-1-7',
    lesson: 1,
    origNum: 7,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Quá liều vi chất & miễn dịch',
    q: 'Nguy cơ can thiệp vi chất dinh dưỡng cực đoan (như bổ sung quá liều Vitamin E và Selen) sẽ dẫn đến điều gì?',
    options: [
      'Kích thích tuyến ức sản sinh dòng lympho T khỏe mạnh hơn.',
      'Tăng cường khả năng chống oxy hóa màng tế bào lên gấp nhiều lần.',
      'Làm giảm và ức chế chức năng miễn dịch của cơ thể.',
      'Đẩy lùi hoàn toàn nguy cơ xơ vữa động mạch vành.'
    ],
    answer: 2,
    explain: 'Bài 1 (Mục 3.2): Lạm dụng Vitamin E và Selen vượt ngưỡng an toàn gây phản tác dụng, trực tiếp ức chế và làm suy giảm chức năng miễn dịch.'
  },
  {
    id: 'tb-1-8',
    lesson: 1,
    origNum: 8,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Bệnh mạch vành & Lipid máu',
    q: 'Chỉ số nào trong xét nghiệm lipid máu được coi là tác nhân trực tiếp kích thích tạo mảng xơ vữa động mạch?',
    options: [
      'HDL-Cholesterol (Lipoprotein tỷ trọng cao).',
      'LDL-Cholesterol (Lipoprotein tỷ trọng thấp).',
      'Triglyceride chuỗi trung bình (MCT).',
      'Aflatoxin tự do trong huyết thanh gan.'
    ],
    answer: 1,
    explain: 'Bài 1 (Mục 4.2): LDL-C vận chuyển cholesterol đến mô ngoại vi; khi tăng cao dễ tích lũy và oxy hóa ở thành mạch, kích hoạt phản ứng viêm tạo mảng xơ vữa ("cholesterol xấu").'
  },
  {
    id: 'tb-1-9',
    lesson: 1,
    origNum: 9,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Dinh dưỡng & Tăng huyết áp',
    q: 'Lượng muối tiêu thụ trung bình hàng ngày của người Việt Nam hiện nay xấp xỉ bao nhiêu so với khuyến nghị của WHO?',
    options: [
      'Trung bình 5g/ngày, bằng mức khuyến nghị.',
      'Trung bình 8g/ngày, cao hơn một ít so với khuyến nghị.',
      'Trung bình 12g/ngày, gấp đôi so với khuyến nghị dưới 5g/ngày.',
      'Trung bình 20g/ngày, gấp bốn lần khuyến nghị.'
    ],
    answer: 2,
    explain: 'Bài 1 (Mục 4.3): Điều tra khẩu phần ở Việt Nam ghi nhận mức tiêu thụ muối trung bình lên tới 12g/ngày, gấp hơn hai lần mức khuyến nghị của WHO (< 5g/ngày).'
  },
  {
    id: 'tb-1-10',
    lesson: 1,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Dự phòng ung thư bằng dinh dưỡng',
    q: 'Chế độ dinh dưỡng hợp lý phối hợp vận động thể lực có khả năng phòng ngừa được bao nhiêu phần trăm tỷ lệ ung thư?',
    options: ['5% - 10%', '10% - 20%', '30% - 40%', '70% - 80%'],
    answer: 2,
    explain: 'Bài 1 (Mục 4.7): Dinh dưỡng hợp lý phối hợp vận động thể lực khoa học phòng ngừa được 30% - 40% tỷ lệ mắc các loại ung thư trong cộng đồng.'
  },

  // ================= BÀI 2 =================
  {
    id: 'tb-2-1',
    lesson: 2,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Kém hấp thu & Hấp thu Lipid',
    q: 'Một bệnh nhân bị suy tụy ngoại tiết nặng dẫn đến sụt giảm nghiêm trọng bài tiết dịch tụy. Nhóm chất béo nào sau đây có thể được hấp thu dễ dàng nhất trong chế độ ăn của bệnh nhân này mà không phụ thuộc vào hoạt động của lipase tụy và muối mật?',
    options: [
      'Triglyceride chuỗi dài chứa acid palmitic.',
      'Triglyceride chuỗi trung bình (MCT) chứa acid béo có mạch carbon từ 8 đến 12.',
      'Cholesterol ester từ lòng đỏ trứng.',
      'Phospholipid từ sữa toàn phần.'
    ],
    answer: 1,
    explain: 'Bài 2 (Mục 3.3 - Bước 5): MCT (8–12 carbon) tan tốt hơn trong nước, hấp thu trực tiếp qua biểu mô ruột vào tĩnh mạch cửa về gan mà không cần nhũ tương hóa bởi muối mật, lipase tụy hay đóng gói chylomicron.'
  },
  {
    id: 'tb-2-2',
    lesson: 2,
    origNum: 2,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Hệ nội tiết tiêu hóa',
    q: 'Hormon tiêu hóa nào sau đây đóng vai trò kích thích bài tiết ion bicarbonate (HCO3-) từ tuyến tụy để trung hòa acid dịch vị tràn xuống tá tràng?',
    options: ['Gastrin.', 'Cholecystokinin (CCK).', 'Secretin.', 'Motilin.'],
    answer: 2,
    explain: 'Bài 2 (Bảng 2.2): Secretin do tế bào S tá tràng tiết ra khi dưỡng trấp acid (pH < 4,5) tràn xuống, kích thích tụy tiết nước và lượng lớn HCO3- để trung hòa acid.'
  },
  {
    id: 'tb-2-3',
    lesson: 2,
    origNum: 3,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Tiêu hóa cơ học tại ruột non',
    q: 'Động cơ học nào sau đây tại ruột non giúp khuấy trộn dưỡng trấp liên tục với dịch tiêu hóa và đưa dưỡng trấp tiếp xúc sát với bề mặt biểu mô nhung mao để hấp thu?',
    options: [
      'Nhu động (Peristalsis).',
      'Sự phân đoạn (Segmentation).',
      'Phức hợp vận động di chuyển (MMC).',
      'Sự trống dạ dày.'
    ],
    answer: 1,
    explain: 'Bài 2 (Sinh lý tiêu hóa ruột non): Sự phân đoạn (Segmentation) co thắt từng đoạn vòng giúp nhào trộn dưỡng trấp với enzym/dịch mật và ép sát vào bờ bàn chải để hấp thu; trong khi nhu động đẩy khối thức ăn tiến tới và MMC làm sạch ruột lúc đói.'
  },
  {
    id: 'tb-2-4',
    lesson: 2,
    origNum: 4,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Hấp thu Carbohydrate',
    q: 'Cơ chế nào sau đây chịu trách nhiệm chính cho sự hấp thu chủ động Glucose và Galactose qua màng đỉnh của tế bào biểu mô ruột non vào trong tế bào?',
    options: [
      'Khuếch tán đơn giản qua màng phospholipid kỵ nước.',
      'Đồng vận chuyển tích cực phụ thuộc dòng Natri qua chất vận chuyển SGLT-1.',
      'Khuếch tán hỗ trợ không phụ thuộc năng lượng qua GLUT-5.',
      'Ẩm bào màng tế bào.'
    ],
    answer: 1,
    explain: 'Bài 2 (Mục 3.1): Ở nồng độ thấp, Glucose và Galactose hấp thu chủ động ngược gradient qua chất đồng vận chuyển phụ thuộc Na+ là SGLT-1 (nhờ bơm Na+-K+ ATPase ở màng đáy bên); GLUT-5 dành cho Fructose.'
  },
  {
    id: 'tb-2-5',
    lesson: 2,
    origNum: 5,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Hệ vi sinh vật đường ruột',
    q: 'Một trẻ sơ sinh 4 ngày tuổi được nuôi bằng sữa mẹ hoàn toàn. Nhóm vi sinh vật nào sau đây dự kiến sẽ chiếm ưu thế tuyệt đối trong hệ vi sinh vật đường ruột của trẻ nhờ nguồn oligosaccharide dồi dào trong sữa mẹ?',
    options: ['Escherichia coli.', 'Bifidobacterium.', 'Clostridium.', 'Bacteroides.'],
    answer: 1,
    explain: 'Bài 2 (Mục 4.1 - Giai đoạn 2): Trẻ bú mẹ hoàn toàn có chủng Bifidobacterium có lợi chiếm ưu thế tuyệt đối nhờ lượng lớn oligosaccharide chuỗi nhánh trong sữa mẹ.'
  },
  {
    id: 'tb-2-6',
    lesson: 2,
    origNum: 6,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Sinh lý bệnh cắt hồi tràng',
    q: 'Sau một cuộc phẫu thuật cắt bỏ đoạn dài hồi tràng (trên 100 cm) do bệnh Crohn, bệnh nhân có nguy cơ cao nhất mắc phải hội chứng nào sau đây?',
    options: [
      'Thiếu hụt kẽm do mất vị trí hấp thu chính của kẽm ở tá tràng.',
      'Suy giảm tiêu hóa tinh bột do mất amylase tụy.',
      'Tiêu chảy thẩm thấu do muối mật không được hấp thu kích thích đại tràng, kèm thiếu hụt Vitamin B12.',
      'Thừa sắt hệ thống do tăng hấp thu không kiểm soát.'
    ],
    answer: 2,
    explain: 'Bài 2 (Mục 2.3): Hồi tràng đảm nhận tái hấp thu ~95% muối mật (tuần hoàn ruột gan) và là vị trí duy nhất hấp thu phức hợp Vitamin B12 - yếu tố nội tại; cắt đoạn dài gây tiêu chảy do muối mật tràn xuống đại tràng và thiếu B12.'
  },
  {
    id: 'tb-2-7',
    lesson: 2,
    origNum: 7,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Hoạt hóa enzym tiêu hóa Protein',
    q: 'Enzym nào sau đây ở bờ bàn chải tế bào biểu mô ruột non chịu trách nhiệm khởi động dòng hoạt hóa các protease của dịch tụy bằng cách chuyển trypsinogen không hoạt động thành trypsin hoạt động?',
    options: ['Aminopeptidase.', 'Enterokinase (Enteropeptidase).', 'Pepsin.', 'Isomaltase.'],
    answer: 1,
    explain: 'Bài 2 (Mục 3.2): Enterokinase ở màng niêm mạc tá tràng hoạt hóa trypsinogen thành trypsin; sau đó trypsin tự động kích hoạt các proenzym tụy khác (chymotrypsinogen, procarboxypeptidase).'
  },
  {
    id: 'tb-2-8',
    lesson: 2,
    origNum: 8,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Hấp thu Lipid & Chylomicron',
    q: 'Sự đóng gói lipid vào chylomicron diễn ra tại cơ quan nào bên trong tế bào biểu mô ruột non trước khi xuất bào vào hệ bạch huyết?',
    options: [
      'Ty lạp thể.',
      'Mạng lưới nội chất hạt.',
      'Mạng lưới nội chất trơn và bộ máy Golgi.',
      'Nhân tế bào.'
    ],
    answer: 2,
    explain: 'Bài 2 (Mục 3.3 - Bước 3 & 4): Tại mạng lưới nội chất trơn, acid béo và monoglyceride tái este hóa thành triglyceride và đóng gói cùng cholesterol este, phospholipid, ApoB-48 (qua bộ máy Golgi) tạo hạt chylomicron.'
  },
  {
    id: 'tb-2-9',
    lesson: 2,
    origNum: 9,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Điều hòa hấp thu Sắt',
    q: 'Cơ chế bảo vệ tự nhiên nào giúp cơ thể điều hòa hấp thu sắt không heme ở tế bào biểu mô ruột để tránh nguy cơ ứ đọng sắt gây tổn thương các cơ quan (bệnh Hemochromatosis)?',
    options: [
      'Lưu giữ tạm thời sắt trong phân tử mucosal ferritin và thải trừ ra phân khi tế bào bong tróc sau 3 - 5 ngày.',
      'Tăng đào thải sắt liên tục qua mồ hôi và nước tiểu khi cơ thể thừa sắt.',
      'Khóa hoàn toàn kênh hấp thu sắt DMT-1 ở niêm mạc tá tràng vĩnh viễn.',
      'Phân hủy cấu trúc transferrin vận chuyển sắt trong máu.'
    ],
    answer: 0,
    explain: 'Bài 2 (Mục 3.4): Khi cơ thể đã bão hòa sắt, sắt được giữ lại trong tế bào niêm mạc ruột dưới dạng mucosal ferritin và thải trừ ra phân khi tế bào biểu mô ruột bong tróc sau 3–5 ngày.'
  },
  {
    id: 'tb-2-10',
    lesson: 2,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Probiotic, Prebiotic & Synbiotic',
    q: 'Chế phẩm sinh học phối hợp đồng thời cả vi sinh vật sống có lợi và cơ chất dinh dưỡng oligosaccharide tương ứng để tăng hiệu quả sống sót định cư của vi khuẩn trong lòng ruột được gọi là gì?',
    options: ['Probiotics.', 'Prebiotics.', 'Synbiotics.', 'Antibiotics.'],
    answer: 2,
    explain: 'Bài 2 (Mục 4.3): Synbiotics phối hợp đồng thời Probiotics (vi khuẩn sống có lợi) và Prebiotics (oligosaccharide cơ chất chọn lọc) nhằm tối ưu hóa tỷ lệ sống sót và định cư trong ruột.'
  },

  // ================= BÀI 3 =================
  {
    id: 'tb-3-1',
    lesson: 3,
    origNum: 1,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Vai trò sinh lý Carbohydrate',
    q: 'Vai trò sinh lý nào sau đây của Carbohydrate giúp bảo vệ hệ thống protein mô cơ không bị dị hóa để tạo năng lượng trong trạng thái đói kéo dài?',
    options: [
      'Vai trò tạo hình cấu trúc màng tế bào thông qua các phân tử glycoprotein.',
      'Vai trò điều hòa và giữ thăng bằng acid - base nội môi thông qua thể cetonic.',
      'Tác dụng kích thích cơ học nhu động ruột và hấp phụ độc chất của chất xơ pectin.',
      'Tác dụng tiết kiệm protein (Protein-sparing action) khi khẩu phần cung cấp đầy đủ carbohydrate.'
    ],
    answer: 3,
    explain: 'Bài 3 (Mục 1.1): Tác dụng tiết kiệm protein (Protein-sparing action) giúp giảm tối đa quá trình dị hóa protein mô cơ và gan cho tân tạo đường (gluconeogenesis).'
  },
  {
    id: 'tb-3-2',
    lesson: 3,
    origNum: 2,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Lựa chọn Carbohydrate lâm sàng',
    q: 'Một bệnh nhân nam, 58 tuổi, có tiền sử tăng huyết áp và rối loạn lipid máu xơ vữa mạch vành. Nhóm chất ngọt nào sau đây là phù hợp nhất để thay thế đường saccharose trong chế độ ăn hàng ngày của bệnh nhân này?',
    options: [
      'Saccharose tinh luyện dạng đường kính trắng.',
      'Fructose tự nhiên từ trái cây chín ngọt vừa.',
      'Glucose nguyên chất hòa tan truyền tĩnh mạch.',
      'Đường Lactose tinh khiết chiết xuất từ sữa bò.'
    ],
    answer: 1,
    explain: 'Bài 3 (Mục 1.2.1): Fructose có độ ngọt cao nhất trong đường tự nhiên, chuyển hóa không phụ thuộc trực tiếp insulin ở giai đoạn đầu nên thích hợp thay thế saccharose cho người cao tuổi, xơ vữa động mạch, rối loạn lipid máu.'
  },
  {
    id: 'tb-3-3',
    lesson: 3,
    origNum: 3,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Vai trò chất xơ hòa tan Pectin',
    q: 'Chất xơ hòa tan Pectin có đặc tính và vai trò sinh học quan trọng nào sau đây trong hỗ trợ điều trị bỏng loét và nhiễm độc?',
    options: [
      'Thủy phân hoàn toàn giải phóng 4 kcal/g năng lượng trực tiếp cho tế bào mô sẹo.',
      'Có đặc tính đông keo, giúp ức chế vi khuẩn gây thối ở ruột, thúc đẩy liền sẹo tổn thương và liên kết bài xuất chì.',
      'Đồng hấp thu hoàn toàn với các acid béo chuỗi dài tại niêm mạc đại tràng.',
      'Kích thích tăng bài tiết men pepsinogen hoạt hóa tại niêm mạc dạ dày.'
    ],
    answer: 1,
    explain: 'Bài 3 (Mục 1.2.2): Pectin tạo khối đông keo, ức chế vi khuẩn hoại tử đường ruột, điều hòa vi sinh vật, liên kết bài xuất chì (nhiễm độc chì nghề nghiệp) và thúc đẩy liền sẹo bỏng loét.'
  },
  {
    id: 'tb-3-4',
    lesson: 3,
    origNum: 4,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Acid béo thiết yếu Omega-3',
    q: 'Acid béo chưa no chuỗi dài EPA và DHA thuộc họ Omega-3 được gan tổng hợp trực tiếp từ tiền chất nào sau đây trong chế độ ăn?',
    options: ['Acid Linoleic.', 'Acid Linolenic.', 'Acid Palmitic.', 'Acid Oleic.'],
    answer: 1,
    explain: 'Bài 3 (Mục 2.3.2): Họ Omega-3 có đại diện là Acid linolenic (18:3), là tiền chất để cơ thể tổng hợp EPA (20:5) và DHA (22:6). (Acid linoleic 18:2 thuộc họ Omega-6).'
  },
  {
    id: 'tb-3-5',
    lesson: 3,
    origNum: 5,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Vai trò tim mạch của EPA',
    q: 'Tại sao acid béo chưa no chuỗi dài EPA có vai trò bảo vệ tim mạch mạnh mẽ hơn so với các acid béo no (SFA)?',
    options: [
      'EPA kích thích tăng tổng hợp VLDL tại tế bào biểu mô gan để tích lũy mỡ.',
      'EPA là tiền chất để tổng hợp các eicosanoid có tác dụng chống viêm, giãn mạch và chống kết tập tiểu cầu.',
      'EPA làm tăng nồng độ LDL-C trong máu ngoại vi để dễ bài xuất qua nước tiểu.',
      'EPA ức chế hoàn toàn sự hấp thu Canxi và Phospho tại niêm mạc tá tràng.'
    ],
    answer: 1,
    explain: 'Bài 3 (Mục 2.3.2): EPA là tiền chất tổng hợp eicosanoid họ 3 (prostaglandin và thromboxane họ 3) có tác dụng chống viêm, giãn mạch và chống kết tập tiểu cầu mạnh mẽ.'
  },
  {
    id: 'tb-3-6',
    lesson: 3,
    origNum: 6,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Sinh lý bệnh thiếu Protein (Kwashiorkor)',
    q: 'Triệu chứng phù nề xuất hiện trong bệnh lý suy dinh dưỡng thể phù Kwashiorkor ở trẻ em là do cơ chế sinh lý bệnh nào sau đây?',
    options: [
      'Tăng huyết áp hệ thống làm tăng áp lực thủy tĩnh trong lòng mạch máu.',
      'Giảm albumin huyết thanh làm giảm áp lực keo huyết tương, dẫn đến nước thoát từ lòng mạch ra khoảng kẽ tế bào.',
      'Tích lũy quá mức Canxi tự do trong tế bào cơ trơn mạch máu gây co thắt.',
      'Tăng đào thải hormone cận giáp PTH gây giữ muối natri ở màng đáy cầu thận.'
    ],
    answer: 1,
    explain: 'Bài 3 (Mục 3.1 & 3.4): Albumin huyết thanh duy trì áp lực keo giữ nước trong lòng mạch; khi protein máu giảm (< 54 g/l), áp lực keo sụt giảm khiến nước thoát ra khoảng gian bào gây phù dinh dưỡng.'
  },
  {
    id: 'tb-3-7',
    lesson: 3,
    origNum: 7,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Nhu cầu Lipid theo độ tuổi',
    q: 'Đối với trẻ dưới 6 tháng tuổi, khuyến nghị chính thức về nhu cầu năng lượng do Lipid cung cấp là bao nhiêu và từ nguồn nào là tốt nhất?',
    options: [
      'Chiếm 15% năng lượng tổng số, từ nguồn dầu hướng dương thô.',
      'Chiếm 20% - 25% năng lượng tổng số, từ nguồn dầu ô-liu nguyên chất.',
      'Chiếm 45% - 50% năng lượng tổng số, cung cấp chủ yếu từ sữa mẹ.',
      'Chiếm 60% - 70% năng lượng tổng số, cung cấp từ lòng đỏ trứng gà.'
    ],
    answer: 2,
    explain: 'Bài 3 (Mục 2.4): Trẻ dưới 6 tháng tuổi bú mẹ hoàn toàn nhận 45% - 50% tổng năng lượng từ lipid của sữa mẹ để hỗ trợ phát triển não bộ và myelin.'
  },
  {
    id: 'tb-3-8',
    lesson: 3,
    origNum: 8,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Cân đối Canxi và Phospho',
    q: 'Khẩu phần ăn có tỷ lệ Phospho quá cao (thừa Phospho) ảnh hưởng xấu đến lượng Canxi của cơ thể như thế nào?',
    options: [
      'Phospho liên kết cạnh tranh với albumin làm tăng canxi ion hóa tự do trong máu ngoại vi.',
      'Gây cản trở hấp thu Canxi tại ruột do tạo Canxi-phosphate không tan và kích thích PTH tăng đào thải Canxi qua nước tiểu.',
      'Phospho ức chế trực tiếp sự tổng hợp vitamin D3 hoạt động tại niêm mạc dạ dày.',
      'Làm tăng hoạt tính của men lipase tụy gây tiêu phân mỡ kéo dài.'
    ],
    answer: 1,
    explain: 'Bài 3 (Mục 4.3): Thừa Phospho tạo muối canxi-phosphate không tan tại ruột gây kém hấp thu, đồng thời tăng Pi máu kích thích PTH rút Canxi từ xương và tăng thải Canxi qua thận.'
  },
  {
    id: 'tb-3-9',
    lesson: 3,
    origNum: 9,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Tỷ lệ P:L:G khuyến nghị Việt Nam',
    q: 'Để đáp ứng nhu cầu năng lượng cho chuyển hóa tế bào bình thường, tỷ lệ P : L : G khuyến nghị hiện tại của Bộ Y tế Việt Nam là bao nhiêu?',
    options: ['14 : 20 : 66', '12 : 18 : 70', '15 : 25 : 60', '10 : 30 : 60'],
    answer: 1,
    explain: 'Bài 3 (Mục 4.1): Khuyến nghị hiện tại của Bộ Y tế Việt Nam là 12 : 18 : 70 (và định hướng phấn đấu trong thời gian tới là 14 : 20 : 66).'
  },
  {
    id: 'tb-3-10',
    lesson: 3,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Cân đối Vitamin nhóm B & đa lượng',
    q: 'Đồng yếu tố (coenzym) nào sau đây tham gia trực tiếp vào quá trình chuyển hóa carbohydrate và đòi hỏi lượng Thiamin (Vitamin B1) tương ứng trong khẩu phần?',
    options: [
      'FAD (Flavin Adenine Dinucleotide).',
      'NAD (Nicotinamide Adenine Dinucleotide).',
      'TPP (Thiamin Pyrophosphate).',
      'PLP (Pyridoxal Phosphate).'
    ],
    answer: 2,
    explain: 'Bài 3 (Mục 4.2) & Bài 4: Vitamin B1 (Thiamin) hoạt động dưới dạng coenzyme TPP (Thiamin Pyrophosphate), cần tối thiểu 0,5 mg/1000 kcal và tăng khi khẩu phần giàu carbohydrate.'
  },

  // ================= BÀI 4 =================
  {
    id: 'tb-4-1',
    lesson: 4,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Sinh hóa & Thiếu hụt Vitamin B1',
    q: 'Bệnh nhân nam 48 tuổi, tiền sử nghiện rượu mạn tính 15 năm, nhập viện trong tình trạng lú lẫn, mất định hướng không gian, có hiện tượng giật rung nhãn cầu ngang và đi loạng choạng mất thăng bằng. Bác sĩ chẩn đoán hội chứng Wernicke-Korsakoff. Cơ chế sinh hóa nào đứng sau các biểu hiện thần kinh của bệnh nhân này?',
    options: [
      'Thiếu hụt Pyridoxal phosphate làm giảm tổng hợp gamma-aminobutyric acid (GABA) từ glutamate.',
      'Thiếu hụt Thiamin pyrophosphate (TPP) làm gián đoạn chuyển hóa glucose và dẫn truyền xung động thần kinh cơ.',
      'Thiếu hụt Cobalamin gây thoái hóa bao myelin tủy sống cổ.',
      'Thiếu hụt Nicotinamide adenine dinucleotide (NAD) gây tổn thương biểu mô vỏ não cảm giác.'
    ],
    answer: 1,
    explain: 'Bài 4 (Mục 3.1 - Thiamin B1): Nghiện rượu mạn giảm hấp thu và tăng thải B1 gây thiếu hụt coenzyme TPP, làm gián đoạn phản ứng chuyển pyruvate thành acetyl-CoA cung cấp năng lượng từ glucose cho tế bào não.'
  },
  {
    id: 'tb-4-2',
    lesson: 4,
    origNum: 2,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Cận lâm sàng đánh giá Vitamin D',
    q: 'Một bệnh nhi 14 tháng tuổi được mẹ đưa đến khám vì chậm biết đi, thóp trước chưa đóng hoàn toàn, lồng ngực xuất hiện các gờ nổi dạng chuỗi hạt dọc khớp sườn sụn và hai chân bị cong vòng kiềng khi đứng thẳng. Mẹ bé cho biết bé được bú sữa mẹ hoàn toàn và rất ít khi tiếp xúc ánh nắng. Xét nghiệm cận lâm sàng nào phản ánh chính xác nhất tình trạng dự trữ vi chất của trẻ ở thời điểm hiện tại?',
    options: [
      'Định lượng nồng độ Canxi ion hóa (Ca2+) trong huyết thanh.',
      'Định lượng nồng độ 1,25-dihydroxyvitamin D3 (Calcitriol) huyết thanh.',
      'Định lượng nồng độ 25-hydroxyvitamin D3 (Calcidiol) huyết thanh.',
      'Định lượng nồng độ Phospho vô cơ huyết thanh.'
    ],
    answer: 2,
    explain: 'Bài 4 (Mục 2.2): 25-hydroxyvitamin D3 (Calcidiol) tạo tại gan là dạng tuần hoàn chính trong máu và là chỉ số cận lâm sàng chuẩn mực nhất đánh giá tình trạng dự trữ Vitamin D của cơ thể.'
  },
  {
    id: 'tb-4-3',
    lesson: 4,
    origNum: 3,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Phân biệt thiếu B12 và thiếu Folate',
    q: 'Bệnh nhân nữ 35 tuổi, ăn chay trường hoàn toàn từ 5 năm nay, đến khám vì mệt mỏi kéo dài, đau đầu, tê bì dị cảm bắt đầu từ ngón chân sau đó lan dần lên bắp chân. Xét nghiệm huyết học tế bào ngoại vi cho thấy số lượng hồng cầu giảm, huyết sắc tố giảm, thể tích trung bình hồng cầu (MCV) đạt 112 fL (tăng cao). Xét nghiệm sinh hóa nào giúp chẩn đoán phân biệt chính xác nhất nguyên nhân thiếu máu của bệnh nhân này là do thiếu vitamin B12 chứ không phải do thiếu folate?',
    options: [
      'Định lượng nồng độ Homocysteine trong huyết thanh.',
      'Định lượng nồng độ Acid Methylmalonic (MMA) trong huyết thanh.',
      'Định lượng nồng độ Folate trong tế bào hồng cầu.',
      'Xét nghiệm kháng thể kháng yếu tố nội tại dạ dày.'
    ],
    answer: 1,
    explain: 'Bài 4 (Mục tiêu kỹ năng & Vitamin B12): Homocysteine tăng trong cả thiếu B12 và thiếu Folate, còn Acid Methylmalonic (MMA) chỉ tăng đặc hiệu khi thiếu Vitamin B12 (do adenosylcobalamin là cofactor của methylmalonyl-CoA mutase).'
  },
  {
    id: 'tb-4-4',
    lesson: 4,
    origNum: 4,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Độc tính gây quái thai của Vitamin A',
    q: 'Một sản phụ mang thai ở tuần thứ 6 đến phòng khám sản khoa tư nhân và được bác sĩ kê đơn bổ sung một loại thực phẩm chức năng xách tay chứa Vitamin A liều cao (10.000 IU/ngày) để tăng cường sức đề kháng. Bác sĩ sản khoa của sản phụ cần can thiệp như thế nào?',
    options: [
      'Đồng ý đơn thuốc vì vitamin A rất cần thiết cho sự biệt hóa tế bào và phát triển phôi thai giai đoạn sớm.',
      'Yêu cầu sản phụ dừng ngay viên uống này vì vitamin A liều cao trong 3 tháng đầu thai kỳ có nguy cơ cao gây dị dạng bẩm sinh nghiêm trọng (teratogen).',
      'Khuyên sản phụ giảm nửa liều để đảm bảo an toàn nhưng vẫn duy trì tác dụng bảo vệ niêm mạc biểu mô.',
      'Chuyển sản phụ sang sử dụng dạng acid retinoic bôi da để thay thế hoàn toàn viên uống.'
    ],
    answer: 1,
    explain: 'Bài 4 (Mục 2.1): Preformed retinol liều cao là chất gây dị dạng thai nhi nghiêm trọng (teratogen: sứt môi, hở hàm ếch, dị tật tim mạch), tuyệt đối chống chỉ định dùng > 3.000 IU/ngày trong 3 tháng đầu thai kỳ.'
  },
  {
    id: 'tb-4-5',
    lesson: 4,
    origNum: 5,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Cơ chế "Bẫy Folate"',
    q: 'Tại sao việc tự ý bổ sung Acid Folic (Folate) liều cao (>1.000 mcg/ngày) ở bệnh nhân có tình trạng thiếu hụt Vitamin B12 tiềm ẩn lại được coi là một thực hành lâm sàng nguy hiểm?',
    options: [
      'Acid folic liều cao gây ức chế ngược quá trình hấp thu vitamin B12 tại hồi tràng.',
      'Acid folic cạnh tranh trực tiếp với vitamin B12 trên các protein vận chuyển trong máu.',
      'Folate liều cao sửa chữa được tình trạng thiếu máu hồng cầu to nhưng làm mờ mắt và che giấu tổn thương thần kinh tiến triển do thiếu B12.',
      'Gây ra hiện tượng toan hóa máu do tích lũy acid methylmalonic cực đoan.'
    ],
    answer: 2,
    explain: 'Bài 4 (Mục 3.1 - Folate Trap): Folate liều cao cung cấp đủ THF để sửa chữa quá trình tạo hồng cầu nhưng không bảo vệ được bao myelin thần kinh phụ thuộc B12, làm che giấu (mask) thiếu B12 dẫn tới liệt không hồi phục.'
  },
  {
    id: 'tb-4-6',
    lesson: 4,
    origNum: 6,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Bệnh Scorbut & Tổng hợp Collagen',
    q: 'Bệnh nhân nam 54 tuổi, nhập viện vì xuất huyết dưới da dạng chấm rải rác chi dưới, nướu răng sưng đỏ, chảy máu lợi tự phát khi đánh răng, các vết trầy xước nông ở chân tay từ 1 tháng nay vẫn chưa lành sẹo. Hỏi kỹ bệnh nhân cho biết ông sống độc thân, chế độ ăn chủ yếu là mì gói, bánh mì trắng và thịt hộp, hoàn toàn không ăn rau quả tươi. Cơ chế tổn thương phân tử nào gây ra các biểu hiện trên của bệnh nhân?',
    options: [
      'Thiếu hụt vitamin K làm giảm hoạt hóa prothrombin gây suy sụp chu trình đông máu.',
      'Thiếu hụt vitamin C làm gián đoạn phản ứng hydroxyl hóa proline và lysine để tổng hợp cấu trúc collagen vững chắc.',
      'Thiếu hụt vitamin A làm sừng hóa tế bào biểu mô tuyến bã nhờn nướu răng.',
      'Tích lũy gốc tự do gây phá hủy màng lipid kép của hồng cầu và tiểu cầu ngoại vi.'
    ],
    answer: 1,
    explain: 'Bài 4 (Mục 3.2 - Vitamin C): Chế độ ăn thiếu rau quả tươi gây bệnh Scorbut do thiếu Vitamin C — cofactor giữ Fe2+ cho phản ứng hydroxyl hóa proline và lysine liên kết chéo sợi collagen thành mạch và mô liên kết.'
  },
  {
    id: 'tb-4-7',
    lesson: 4,
    origNum: 7,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Tương tác Vitamin K và Warfarin',
    q: 'Thuốc chống đông máu Warfarin thường được kê đơn để dự phòng huyết khối ở bệnh nhân rung nhĩ hoặc thay van tim nhân tạo. Warfarin thể hiện tác dụng dược lý thông qua cơ chế nào liên quan đến vitamin K?',
    options: [
      'Warfarin gắn kết và trung hòa trực tiếp các phân tử vitamin K1 tự do trong lòng mạch.',
      'Warfarin ức chế enzyme tái hoạt hóa vitamin K (vitamin K epoxide reductase), làm gián đoạn sự carboxyl hóa các yếu tố đông máu.',
      'Warfarin kích thích thận tăng đào thải vitamin K2 ra nước tiểu.',
      'Warfarin ngăn chặn hoàn toàn sự hấp thu vitamin K tại hồi tràng thông qua cạnh tranh micelle.'
    ],
    answer: 1,
    explain: 'Bài 4 (Mục 2.4): Warfarin ức chế enzyme vitamin K epoxide reductase, ngăn tái chế vitamin K hoạt động, qua đó ức chế carboxyl hóa các yếu tố đông máu II, VII, IX, X.'
  },
  {
    id: 'tb-4-8',
    lesson: 4,
    origNum: 8,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Thiếu máu ác tính (Pernicious anemia)',
    q: 'Một bệnh nhân nữ 62 tuổi, có tiền sử viêm dạ dày mạn tính tự miễn gây teo niêm mạc dạ dày vùng thân vị và đáy vị từ nhiều năm. Xét nghiệm cận lâm sàng của bệnh nhân cho thấy tình trạng thiếu máu hồng cầu to nặng nề. Cơ chế trực tiếp nào gây ra tình trạng thiếu máu của bệnh nhân này?',
    options: [
      'Thiếu acid dịch vị làm giảm khả năng giải phóng vitamin B12 khỏi protein thức ăn.',
      'Sự phá hủy các tế bào thành dạ dày làm mất hoàn toàn khả năng bài tiết yếu tố nội tại cần cho hấp thu vitamin B12 ở hồi tràng.',
      'Giảm nhu động dạ dày làm tăng sinh vi khuẩn kỵ khí tiêu thụ hết lượng folate khẩu phần.',
      'Thiếu hụt men pepsin làm mất hoạt tính của protein calbindin gắn vitamin B12.'
    ],
    answer: 1,
    explain: 'Bài 4 (Mục 3.1 - Vitamin B12): Thiếu máu ác tính (pernicious anemia) do cơ chế tự miễn phá hủy tế bào thành dạ dày làm mất yếu tố nội tại (IF) cần thiết để hấp thu B12 tại hồi tràng.'
  },
  {
    id: 'tb-4-9',
    lesson: 4,
    origNum: 9,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Dự phòng xuất huyết sơ sinh',
    q: 'Trẻ sơ sinh khỏe mạnh sinh thường tại bệnh viện được chỉ định can thiệp dự phòng y khoa nào dưới đây để ngăn ngừa hội chứng xuất huyết não - màng não nguy hiểm tính mạng?',
    options: [
      'Bổ sung vitamin D3 liều cao (400 IU) nhỏ giọt hàng ngày ngay sau sinh.',
      'Tiêm bắp một liều duy nhất 1mg Vitamin K1 ngay sau sinh.',
      'Cho mẹ uống bổ sung vitamin K liều cao trước khi cho con bú.',
      'Nhỏ giọt dung dịch vitamin K phối hợp vitamin A qua đường miệng trong tuần đầu sau sinh.'
    ],
    answer: 1,
    explain: 'Bài 4 (Mục 2.4): Do dự trữ vitamin K qua nhau thai thấp, ruột trẻ sơ sinh còn vô khuẩn chưa tổng hợp K2 và sữa mẹ nghèo vitamin K, bắt buộc tiêm bắp 1 liều duy nhất 1 mg Vitamin K1 ngay sau sinh.'
  },
  {
    id: 'tb-4-10',
    lesson: 4,
    origNum: 10,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Thái độ · Phản biện Y học chứng cứ về TPCN',
    q: 'Một phụ nữ 32 tuổi đến phòng khám tư vấn dinh dưỡng vì muốn tự bổ sung các chất chống oxy hóa liều cao để phòng ngừa lão hóa da. Cô nghe quảng cáo và định sử dụng kết hợp viên uống Beta-carotene tổng hợp (50.000 IU/ngày) và Vitamin E (2.000 IU/ngày). Người thầy thuốc cần đưa ra lời khuyên dựa trên y học chứng cứ nào sau đây?',
    options: [
      'Đồng ý và khuyến khích bổ sung vì hai chất này hiệp đồng chống oxy hóa rất tốt cho màng tế bào da.',
      'Khuyên cô chỉ nên bổ sung Beta-carotene và tránh dùng Vitamin E để hạn chế nguy cơ loãng xương.',
      'Giải thích rằng các thử nghiệm lâm sàng ngẫu nhiên chứng minh việc bổ sung carotenoid và vitamin E liều cao từ thực phẩm chức năng không mang lại lợi ích phòng bệnh mạn tính mà ngược lại có thể làm tăng tỷ lệ tử vong tổng thể.',
      'Khuyên cô chuyển sang tiêm tĩnh mạch hai vi chất này để tăng tối đa sinh khả dụng chống lão hóa da.'
    ],
    answer: 2,
    explain: 'Bài 4 (Mục tiêu thái độ & Câu hỏi lượng giá): Bổ sung Vitamin E và carotenoid tổng hợp liều cao vượt ngưỡng an toàn (UL Vitamin E 1.000 mg/ngày) không mang lại lợi ích phòng bệnh mạn mà còn làm tăng nguy cơ xuất huyết và tử vong.'
  },

  // ================= BÀI 5 =================
  {
    id: 'tb-5-1',
    lesson: 5,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Rối loạn điện giải Kali máu',
    q: 'Một bệnh nhân nam 65 tuổi, có tiền sử suy thận mạn tính giai đoạn cuối đang lọc màng bụng. Xét nghiệm ion đồ định kỳ cho thấy nồng độ Kali huyết thanh là 6.8 mEq/L (bình thường 3.5 - 5.0 mEq/L). Thay đổi nào sau đây trên điện tâm đồ (ECG) gợi ý tình trạng cấp cứu nguy hiểm tính mạng của bệnh nhân này?',
    options: [
      'Xuất hiện sóng U rõ rệt sau sóng T.',
      'Khoảng QT kéo dài kèm theo sóng T dẹt.',
      'Sóng T cao nhọn, đối xứng và phức bộ QRS giãn rộng.',
      'Nhịp tim nhanh kịch phát trên thất.'
    ],
    answer: 2,
    explain: 'Bài 5 (Mục 2.3): Tăng Kali máu (> 5,0 mEq/L) làm giảm phân cực màng tim gây nhịp chậm, block nhánh, sóng T cao nhọn đối xứng, phức bộ QRS giãn rộng và nguy cơ rung thất/ngừng tim thì tâm trương. (Sóng T dẹt và sóng U là của hạ Kali máu).'
  },
  {
    id: 'tb-5-2',
    lesson: 5,
    origNum: 2,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Tương tác Sắt và Nhiễm độc Chì',
    q: 'Cơ chế sinh lý nào giải thích hiện tượng trẻ em bị thiếu máu thiếu sắt có nguy cơ bị nhiễm độc chì (Pb) từ môi trường cao hơn rõ rệt so với trẻ bình thường?',
    options: [
      'Chì liên kết với các gốc acid tự do trong dạ dày tạo phức hợp tan dễ hấp thu.',
      'Cơ thể thiếu sắt kích thích ruột tăng tổng hợp các protein mang (như DMT-1) vô tình vận chuyển luôn cả chì do có cùng kích thước và hóa trị.',
      'Thiếu sắt làm giảm nhu động ruột, tăng thời gian dưỡng trấp lưu lại ruột để chì hấp thu thụ động.',
      'Chì kích thích giải phóng hormone hepcidin làm tăng tính thấm niêm mạc ruột.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 4.1): Trẻ thiếu sắt có tỷ lệ hấp thu chì qua ruột tăng gấp 3–4 lần vì ruột tăng biểu hiện protein vận chuyển kim loại hóa trị 2 (DMT-1), vô tình vận chuyển luôn cả ion Pb2+.'
  },
  {
    id: 'tb-5-3',
    lesson: 5,
    origNum: 3,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Cận lâm sàng tuyến giáp (I-ốt vs Hashimoto)',
    q: 'Một sản phụ mang thai ở tuần thứ 12 của thai kỳ, tiền sử hoàn toàn khỏe mạnh, được chẩn đoán mắc bướu cổ đơn thuần tại một vùng núi phía Bắc. Xét nghiệm nào sau đây của sản phụ có giá trị nhất để chẩn đoán phân biệt tình trạng bướu cổ do thiếu hụt I-ốt với bệnh lý bướu cổ do tự miễn (Hashimoto)?',
    options: [
      'Định lượng nồng độ TSH huyết thanh tăng cao cực đại.',
      'Định lượng kháng thể kháng peroxidase giáp (anti-TPO) và kháng thể kháng thyroglobulin (anti-Tg).',
      'Định lượng nồng độ hormon Thyroxine (T4) tự do giảm mạnh.',
      'Siêu âm tuyến giáp thấy nhu mô tuyến giáp tăng âm lan tỏa.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục tiêu kỹ năng & Mục 3.3): Cả thiếu I-ốt và viêm giáp Hashimoto đều có thể có TSH tăng và T4 giảm, nên kháng thể tự miễn đặc hiệu anti-TPO và anti-Tg giúp chẩn đoán phân biệt bệnh lý tự miễn.'
  },
  {
    id: 'tb-5-4',
    lesson: 5,
    origNum: 4,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Sinh lý bệnh Tăng Canxi máu',
    q: 'Hiện tượng co cứng cơ tim (calcium rigor) xảy ra khi nồng độ ion Ca2+ tự do trong dịch ngoại bào tăng cao quá mức sinh lý được giải thích bằng cơ chế phân tử nào?',
    options: [
      'Ca2+ tăng cao ức chế hoạt lực của bơm Na+-K+-ATPase trên màng cơ tim.',
      'Ca2+ gắn liên tục vào Troponin C, giữ phức hợp Troponin-Tropomyosin luôn ở trạng thái mở, cho phép actin liên kết với myosin liên tục mà không thể giãn cơ.',
      'Ca2+ kích thích giải phóng ồ ạt hormone calcitonin làm co thắt tiểu động mạch vành.',
      'Ca2+ thế chỗ của Magie trong cấu trúc phân tử ATP, làm mất năng lượng giãn cơ.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 2.1): Khi Ca2+ ngoại bào quá cao, ion Ca2+ gắn liên tục vào Troponin C làm phức hợp Troponin-Tropomyosin luôn mở, khiến sợi cơ tim co bóp liên tục không thư giãn được (calcium rigor).'
  },
  {
    id: 'tb-5-5',
    lesson: 5,
    origNum: 5,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Vai trò Kẽm trong tiêu chảy cấp',
    q: 'Trong phác đồ xử trí tiêu chảy cấp ở trẻ em dưới 5 tuổi của Tổ chức Y tế Thế giới (WHO), tại sao việc bổ sung Kẽm (Zinc) được coi là bắt buộc?',
    options: [
      'Kẽm kích thích ruột tăng bài tiết chất nhầy mucin để bao phủ các vết loét.',
      'Kẽm bù đắp lượng thất thoát lớn do tổn thương màng ruột, phục hồi cấu trúc nhung mao và enzyme bờ bàn chải, tăng cường miễn dịch tự nhiên chống virus.',
      'Kẽm có tác dụng diệt khuẩn trực tiếp đối với phẩy khuẩn tả và lỵ trực trùng.',
      'Kẽm kích thích vùng dưới đồi làm tăng cảm giác khát, giúp trẻ tự uống nhiều nước hơn.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 3.2): Do tuần hoàn ruột-máu-tụy ngoại tiết của kẽm, tiêu chảy làm mất lượng lớn kẽm; bổ sung 10–20 mg/ngày × 14 ngày giúp phục hồi nhung mao, enzyme bờ bàn chải và tăng miễn dịch.'
  },
  {
    id: 'tb-5-6',
    lesson: 5,
    origNum: 6,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Điều hòa nội môi Canxi (PTH)',
    q: 'Một bệnh nhân nữ 35 tuổi, nhập viện trong tình trạng tê bì quanh miệng, co thắt các cơ ngón tay kiểu "bàn tay đỡ đẻ" sau khi trải qua phẫu thuật cắt toàn bộ tuyến giáp do ung thư giáp cách đây 3 ngày. Cơ chế sinh lý bệnh đứng sau hiện tượng này là gì?',
    options: [
      'Cắt tuyến giáp làm giảm đột ngột nồng độ hormone calcitonin gây tăng canxi máu.',
      'Tổn thương vô tình hoặc cắt bỏ nhầm các tuyến cận giáp đi kèm làm giảm đột ngột hormone PTH, gây hạ canxi máu nặng.',
      'Phẫu thuật kích hoạt phản ứng viêm hệ thống gây giữ natri và thải canxi ở thận.',
      'Bệnh nhân bị thiếu hụt kẽm cấp tính do stress phẫu thuật.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 2.1): 4 tuyến cận giáp nằm sát mặt sau tuyến giáp; tổn thương khi cắt giáp làm sụt giảm đột ngột PTH gây hạ Ca2+ máu cấp tính, biểu hiện cơn co giật tetany ("bàn tay đỡ đẻ", dấu Chvostek).'
  },
  {
    id: 'tb-5-7',
    lesson: 5,
    origNum: 7,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Rối loạn chuyển hóa Đồng (Bệnh Wilson)',
    q: 'Bệnh lý thừa đồng bẩm sinh di truyền Wilson được đặc trưng bởi biểu hiện lâm sàng đặc hiệu nào sau đây ở mắt?',
    options: [
      'Đục thủy tinh thể hình hoa cúc.',
      'Vòng sắc tố Kayser-Fleischer màu xanh-nâu ở rìa giác mạc.',
      'Teo gai thị lực hai bên tiến triển.',
      'Khô loét giác mạc và xuất hiện vệt Bitot.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 3.4): Bệnh Wilson do không đào thải được đồng qua mật, gây ứ đồng ở gan, não và lắng đọng tạo vòng sắc tố Kayser-Fleischer đặc hiệu ở rìa giác mạc.'
  },
  {
    id: 'tb-5-8',
    lesson: 5,
    origNum: 8,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Cân bằng Sắt và Canxi ở nhũ nhi',
    q: 'Tại sao việc sử dụng sữa bò nguyên chất không được khuyến cáo cho trẻ sơ sinh dưới 1 tuổi để thay thế sữa mẹ, xét về góc độ cân bằng sắt và canxi?',
    options: [
      'Sữa bò chứa quá ít canxi làm trẻ bị còi xương cấp.',
      'Hàm lượng Canxi và Phospho trong sữa bò cực cao làm ức chế hấp thu sắt tại ruột, đồng thời gây vi xuất huyết ruột gây thiếu máu thiếu sắt.',
      'Sữa bò kích thích gan tăng tiết hormone hepcidin chặn hoàn toàn kênh hấp thu sắt.',
      'Sữa bò chứa nhiều chất phytate khóa chặt các ion sắt.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 3.1): Trẻ nhỏ uống sữa bò quá nhiều dễ thiếu máu thiếu sắt vì sữa bò nghèo sắt, chứa lượng Canxi và Phospho cao ức chế hấp thu sắt, đồng thời gây vi xuất huyết niêm mạc ruột.'
  },
  {
    id: 'tb-5-9',
    lesson: 5,
    origNum: 9,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Chẩn đoán thiếu Kẽm ở trẻ em',
    q: 'Một trẻ em 12 tháng tuổi sống ở vùng sâu vùng xa, được nuôi bằng chế độ ăn chủ yếu là bột gạo tẻ máy xay xát kỹ, không ăn thịt cá. Trẻ bị chậm phát triển chiều cao rõ rệt, rụng tóc từng mảng và hay bị tiêu chảy nhiễm trùng. Xét nghiệm định lượng vi chất nào sau đây là phù hợp nhất để hướng tới chẩn đoán cho trẻ?',
    options: [
      'Định lượng nồng độ Ferritin huyết thanh.',
      'Định lượng nồng độ Kẽm (Zinc) huyết thanh.',
      'Định lượng nồng độ Canxi ion hóa máu.',
      'Định lượng nồng độ TSH và T4 tự do.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 3.2): Trẻ ăn chế độ nghèo đạm động vật (thịt cá) với bột gạo giàu phytate dễ thiếu Kẽm, biểu hiện lùn dinh dưỡng (chậm phát triển chiều cao), rụng tóc, chán ăn và tiêu chảy nhiễm trùng.'
  },
  {
    id: 'tb-5-10',
    lesson: 5,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Enzyme chống oxy hóa Kẽm - Đồng',
    q: 'Sự phối hợp điều hòa miễn dịch bẩm sinh của chất khoáng Kẽm và Đồng được bộc lộ qua cấu trúc của enzyme chống oxy hóa nào sau đây?',
    options: [
      'Glutathione peroxidase chứa selen.',
      'Ceruloplasmin huyết thanh.',
      'Superoxide dismutase (Cu-Zn SOD) trong bào tương tế bào.',
      'Lysyl oxidase màng biểu mô.'
    ],
    answer: 2,
    explain: 'Bài 5 (Câu hỏi lượng giá & Vai trò vi lượng): Đồng và Kẽm cùng là cofactor cấu thành enzyme chống oxy hóa Superoxide dismutase (Cu-Zn SOD) trong bào tương giúp trung hòa gốc tự do bảo vệ tế bào miễn dịch.'
  },

  // ================= BÀI 6 =================
  {
    id: 'tb-6-1',
    lesson: 6,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Tác hại của rượu bia lên hệ thần kinh',
    q: 'Một bệnh nhân nam 48 tuổi, có tiền sử nghiện rượu mạn tính 15 năm, nhập viện trong tình trạng mất định hướng không gian và thời gian, giảm trí nhớ ngắn hạn nghiêm trọng, mắt có triệu chứng rung giật nhãn cầu, dáng đi loạng choạng, mất thăng bằng. Bác sĩ chẩn đoán bệnh nhân mắc hội chứng Wernicke-Korsakoff. Cơ chế sinh lý bệnh nào sau đây giải thích chính xác nhất tình trạng của bệnh nhân?',
    options: [
      'Sự thiếu hụt acid nicotinic do cồn ức chế quá trình chuyển đổi tryptophan thành niacin tại gan.',
      'Cồn làm giảm hấp thu và tăng đào thải coenzyme pyridoxal phosphate (PLP) qua thận.',
      'Acetaldehyde (sản phẩm chuyển hóa của cồn) đẩy coenzyme thiamin pyrophosphate (TPP) khỏi các men carboxylase chuyển hóa carbohydrate ở tế bào não, gây suy sụp năng lượng neuron vĩnh viễn.',
      'Sự thiếu hụt cobalamin do cồn phá hủy glycoprotein yếu tố nội tại của tế bào thành dạ dày.'
    ],
    answer: 2,
    explain: 'Bài 6 (Mục 6.3): Cồn ức chế hấp thu Thiamin (B1) và làm mất hoạt lực coenzyme TPP ở tế bào não, dẫn đến hội chứng Wernicke-Korsakoff.'
  },
  {
    id: 'tb-6-2',
    lesson: 6,
    origNum: 2,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Bệnh Pellagra do ăn ngô đơn thuần',
    q: 'Trong đợt khám sức khỏe y học dự phòng tại một vùng núi cao, bác sĩ phát hiện tỷ lệ trẻ em bị chậm phát triển chiều cao rõ rệt, dậy thì muộn, thường xuyên chán ăn và mắc các bệnh lý nhiễm trùng đường hô hấp cấp tính. Khảo sát khẩu phần ăn cho thấy gia đình các em chủ yếu sử dụng ngô (bắp) làm lương thực duy nhất trong năm, không có thức ăn động vật. Trẻ em ở đây có nguy cơ cao mắc bệnh lý thiếu hụt dinh dưỡng nào sau đây?',
    options: [
      'Bệnh còi xương do thiếu Canxi và Vitamin D.',
      'Bệnh Pellagra do thiếu Niacin và acid amin thiết yếu tryptophan.',
      'Bệnh phù Beriberi khô do thiếu thiamin trong mầm ngô.',
      'Bệnh Scorbut do thiếu vitamin C nghiêm trọng từ ngô.'
    ],
    answer: 1,
    explain: 'Bài 6 (Mục 4.1 - Ngô): Protein chủ yếu của ngô là zein thiếu hụt hoàn toàn lysine và tryptophan (tiền chất của Niacin), nên ăn ngô đơn thuần kéo dài gây bệnh Pellagra.'
  },
  {
    id: 'tb-6-3',
    lesson: 6,
    origNum: 3,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Độc tố tự nhiên trong Sắn (Linamarin)',
    q: 'Một bệnh nhân nữ 24 tuổi nhập viện cấp cứu trong tình trạng chóng mặt, đau đầu dữ dội, buồn nôn, vã mồ hôi, khó thở, nhịp tim nhanh và tím tái đầu chi sau khi ăn một bữa tối có món sắn luộc (khoai mì). Người nhà cho biết sắn được mua từ đồi về luộc ăn ngay mà không gọt vỏ ngoài vì nghĩ vỏ chứa nhiều chất bổ. Độc tố nào sau đây là tác nhân gây ra tình trạng ngộ độc cấp tính của bệnh nhân?',
    options: [
      'Solanine gây phong bế dẫn truyền thần kinh ngoại biên.',
      'Mytilotoxyn gây liệt cơ hô hấp cấp tính.',
      'Acid xyanhydric (HCN) được giải phóng từ glucosid linamarin gây ức chế men cytochrome oxidase tế bào.',
      'Aflatoxin gây tổn thương hoại tử nhu mô gan cấp tính.'
    ],
    answer: 2,
    explain: 'Bài 6 (Mục 4.2 - Sắn): Vỏ mỏng, vỏ dày và lõi sắn tập trung nhiều glucosid linamarin; khi thủy phân giải phóng acid xyanhydric (HCN) ức chế cytochrome oxidase gây ngạt tế bào cấp tính.'
  },
  {
    id: 'tb-6-4',
    lesson: 6,
    origNum: 4,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Đặc điểm Vitamin C trong Rau vs Quả chín',
    q: 'Bác sĩ dinh dưỡng hướng dẫn một sản phụ về chế độ ăn dặm cho trẻ 7 tháng tuổi. Sản phụ thắc mắc về việc bổ sung nước cam tươi cho con. Ý kiến nào sau đây của bác sĩ là khoa học và chính xác nhất?',
    options: [
      'Nước cam cung cấp vitamin C dồi dào, tuy nhiên nên đun sôi nước cam trước khi cho trẻ uống để tiệt trùng tuyệt đối.',
      'Nước cam tươi cung cấp vitamin C hoạt tính cao vì trong quả chín không chứa men ascorbinase phân hủy vitamin C, đồng thời ăn tươi trực tiếp giúp bảo toàn nguyên vẹn vitamin C nhạy cảm với nhiệt.',
      'Trẻ 7 tháng tuổi không nên dùng nước cam vì acid citric trong cam sẽ phá hủy hoàn toàn men amylase nước bọt của trẻ.',
      'Vitamin C trong nước cam tươi có hoạt tính kém hơn vitamin C tổng hợp từ các viên sủi dược phẩm.'
    ],
    answer: 1,
    explain: 'Bài 6 (Mục 5.2 - Quả chín): Khác với rau xanh có men ascorbinase, quả chín không chứa men này và ăn tươi không qua gia nhiệt giúp bảo toàn 100% hoạt tính Vitamin C.'
  },
  {
    id: 'tb-6-5',
    lesson: 6,
    origNum: 5,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Lựa chọn chất béo (Bơ vs Margarin)',
    q: 'Một bệnh nhân nam 62 tuổi, được chẩn đoán mắc bệnh mạch vành và xơ vữa động mạch mức độ trung bình. Bệnh nhân hỏi bác sĩ về việc lựa chọn bơ để ăn kèm bánh mì vào buổi sáng. Bác sĩ nên đưa ra lời khuyên nào sau đây?',
    options: [
      'Nên sử dụng bơ thực vật (margarine) dạng thỏi cứng vì nó không chứa cholesterol động vật.',
      'Nên hạn chế cả bơ động vật và tránh các loại bơ thực vật hydro hóa công nghiệp chứa nhiều chất béo chuyển hóa (trans fat) vì trans fat làm tăng LDL-C và giảm HDL-C, gây tổn thương mạch máu nghiêm trọng.',
      'Nên ăn thoải mái bơ động vật vì chất béo bão hòa trong bơ động vật đã được nhũ tương hóa mịn nên hoàn toàn vô hại.',
      'Nên sử dụng dầu thực vật chiên đi chiên lại nhiều lần để thay thế hoàn toàn cho bơ.'
    ],
    answer: 1,
    explain: 'Bài 6 (Mục 3.2): Bệnh nhân mạch vành cần hạn chế bơ động vật giàu SFA/cholesterol và tuyệt đối tránh bơ thực vật dạng cứng chứa trans fat (chỉ có thể dùng loại mềm 0g trans fat hoặc dầu ô liu).'
  },
  {
    id: 'tb-6-6',
    lesson: 6,
    origNum: 6,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Đặc điểm dinh dưỡng của Sữa bò',
    q: 'Một sản phụ đưa con trai 10 tháng tuổi đến phòng khám nhi khoa vì trẻ chậm lớn, da xanh xao, tóc thưa rụng và móng tay hình thìa lõm. Xét nghiệm máu cho thấy thiếu máu nhược sắc, hồng cầu nhỏ, định lượng ferritin huyết thanh giảm mạnh. Khai thác bệnh sử cho thấy sản phụ nuôi trẻ hoàn toàn bằng sữa tươi bò tiệt trùng từ lúc 3 tháng tuổi đến nay, không cho ăn dặm. Nguyên nhân nào sau đây giải thích chính xác nhất tình trạng thiếu máu của trẻ?',
    options: [
      'Casein trong sữa bò ức chế trực tiếp sự nhân lên của hồng cầu ở tủy xương.',
      'Sữa bò nghèo sắt, đồng thời chứa hàm lượng canxi và phospho rất cao cạnh tranh và cản trở hấp thu lượng sắt ít ỏi tại ruột non của trẻ.',
      'Lactose trong sữa bò làm tăng tốc độ đào thải sắt qua đường nước tiểu.',
      'Lactoalbumin trong sữa bò phá hủy cấu trúc của glycoprotein transferrin vận chuyển sắt.'
    ],
    answer: 1,
    explain: 'Bài 5 (Mục 3.1) & Bài 6: Sữa bò rất nghèo sắt, đồng thời hàm lượng Canxi và Phospho cao cạnh tranh cản trở hấp thu sắt tại ruột và có thể gây vi xuất huyết ruột ở trẻ < 1 tuổi.'
  },
  {
    id: 'tb-6-7',
    lesson: 6,
    origNum: 7,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Đặc điểm vệ sinh Cá biển (Histamine)',
    q: 'Một nhóm công nhân 12 người cùng ăn bữa trưa tại công trường có món cá ngừ kho. Sau khi ăn khoảng 30 phút, đồng loạt 8 người có biểu hiện đỏ bừng mặt, nóng bừng tai, ngứa ngáy toàn thân, nổi mẩn đỏ ở ngực và cánh tay, kèm theo đau đầu và chóng mặt. Nhóm công nhân này nhiều khả năng bị ngộ độc chất nào sau đây?',
    options: [
      'Độc tố Tetrodotoxin do cá ngừ kho chưa chín kỹ.',
      'Mytilotoxyn tích lũy trong thịt cá ngừ từ tảo độc.',
      'Histamine được giải phóng từ quá trình phân hủy acid amin histidine tự do trong thịt cá ngừ bị ươn hỏng.',
      'Aflatoxin do cá ngừ bị nhiễm nấm mốc trong quá trình bảo quản.'
    ],
    answer: 2,
    explain: 'Bài 6 (Mục 2.2): Cá họ thu, ngừ khi ươn giải phóng nhiều histidine tự do và bị vi khuẩn khử carboxyl thành histamine bền nhiệt, gây triệu chứng giãn mạch đỏ bừng mặt, mẩn ngứa tức thì sau ăn.'
  },
  {
    id: 'tb-6-8',
    lesson: 6,
    origNum: 8,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Ký sinh trùng truyền qua thịt (Giun xoắn)',
    q: 'Một bệnh nhân nam 35 tuổi nhập viện vì sốt cao liên tục 39.5°C, sưng phù nề mi mắt hai bên dữ dội và đau đớn dữ dội ở tất cả các bắp thịt (đặc biệt là cơ nhai và cơ liên sườn) khiến bệnh nhân không thể nhai thức ăn hay thở sâu. Khai thác bệnh sử ghi nhận bệnh nhân có ăn món lòng lợn tiết canh cách đây 8 ngày. Tác nhân ký sinh trùng nào sau đây là nguyên nhân trực tiếp gây ra bệnh cảnh lâm sàng trên?',
    options: [
      'Ấu trùng sán dây lợn Taenia solium di trú lên não.',
      'Ấu trùng giun xoắn Trichinella spiralis di trú và đóng kén tại tổ chức cơ vân của bệnh nhân.',
      'Ấu trùng sán lá phổi Paragonimus westermani gây viêm cơ liên sườn.',
      'Trứng sán dây bò Taenia saginata gây viêm dạ dày ruột cấp tính.'
    ],
    answer: 1,
    explain: 'Bài 6 (Mục 2.1): Ấu trùng giun xoắn Trichinella spiralis (từ tiết canh, thịt lợn tái) di trú đóng kén ở các cơ vân hoạt động mạnh (cơ hoành, cơ nhai, cơ liên sườn), gây sốt cao, phù mi mắt và đau cơ dữ dội.'
  },
  {
    id: 'tb-6-9',
    lesson: 6,
    origNum: 9,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Độc tố vi nấm Aflatoxin',
    q: 'Một nghiên cứu dịch tễ học theo dõi mối liên quan giữa chế độ ăn uống và tỷ lệ mắc ung thư gan nguyên phát tại một cộng đồng nông nghiệp. Kết quả cho thấy tỷ lệ ung thư gan ở vùng này cao gấp 5 lần so với vùng đối chứng. Khảo sát thực tế ghi nhận người dân thường xuyên sử dụng lạc (đậu phộng) bị mốc để ép dầu ăn thủ công tại nhà. Độc tố sinh học nào sau đây liên quan trực tiếp đến tình trạng này?',
    options: [
      'Solanine từ nấm mốc khoai tây lẫn vào lạc.',
      'Bufotoxyn do lạc hút chất độc từ đất trồng.',
      'Aflatoxin sản sinh bởi nấm mốc Aspergillus flavus trên lạc mốc.',
      'Mytilotoxyn do nguồn nước tưới lạc bị ô nhiễm tảo độc.'
    ],
    answer: 2,
    explain: 'Bài 6 (Mục 2.6): Lạc bị mốc trong điều kiện ẩm > 85%, nhiệt > 30°C nhiễm nấm Aspergillus flavus sản sinh Aflatoxin — chất gây ung thư nhóm 1 dẫn đến ung thư biểu mô tế bào gan nguyên phát.'
  },

  // ================= BÀI 7 =================
  {
    id: 'tb-7-1',
    lesson: 7,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Chẩn đoán tác nhân Listeria monocytogenes',
    q: 'Một sản phụ 28 tuổi mang thai tuần thứ 24 nhập viện vì sốt nhẹ 37.8°C, đau mỏi cơ xương khớp rải rác và tiêu chảy lỏng nhẹ sau khi ăn phô mai mềm sản xuất thủ công tại một nông trại. Sau 3 ngày, tình trạng sốt giảm nhưng sản phụ xuất hiện cơn co tử cung bất thường và siêu âm ghi nhận thai chết lưu trong tử cung. Nuôi cấy bánh nhau phân lập được trực khuẩn Gram dương, hiếu khí kỵ khí tùy nghi, không sinh nha bào, di động ở nhiệt độ phòng. Tác nhân nào sau đây là nguyên nhân trực tiếp dẫn đến biến cố sản khoa trên?',
    options: [
      'Salmonella typhimurium',
      'Staphylococcus aureus',
      'Clostridium botulinum',
      'Listeria monocytogenes'
    ],
    answer: 3,
    explain: 'Bài 7 (Mục 2.4): Listeria monocytogenes là trực khuẩn Gram dương không nha bào, sống được ở nhiệt độ tủ lạnh (1–4°C) trong phô mai mềm/thịt nguội, có ái lực cao với bánh nhau gây thai lưu, sẩy thai hoặc viêm màng não sơ sinh.'
  },
  {
    id: 'tb-7-2',
    lesson: 7,
    origNum: 2,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Chẩn đoán ngộ độc Tụ cầu vàng',
    q: 'Một nhóm 5 công nhân nhập viện cấp cứu sau khi ăn tiệc trưa khoảng 2.5 giờ. Bệnh nhân nhập viện trong tình trạng vọt nôn ói dữ dội liên tục, đau bụng co thắt quặn dữ dội từng cơn, kèm theo tiêu chảy lỏng nhiều lần. Thân nhiệt của tất cả các bệnh nhân đều bình thường (36.6 - 36.8°C), không có dấu hiệu thần kinh sọ. Thức ăn nghi ngờ là bánh bông lan kem sữa để ở nhiệt độ phòng từ sáng. Tác nhân vi sinh nào sau đây phù hợp nhất với bệnh cảnh lâm sàng trên?',
    options: [
      'Salmonella enteritidis',
      'Staphylococcus aureus',
      'Clostridium botulinum',
      'Campylobacter jejuni'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 2.2): Thời gian ủ bệnh cực ngắn (1–6 giờ, TB 3 giờ), nôn vọt dữ dội, không sốt, liên quan bánh kem sữa để nhiệt độ phòng là kinh điển của ngoại độc tố ruột Staphylococcus aureus.'
  },
  {
    id: 'tb-7-3',
    lesson: 7,
    origNum: 3,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Cấp cứu ngộ độc Clostridium botulinum',
    q: 'Một bệnh nhân nam 45 tuổi nhập viện cấp cứu trong tình trạng sụp mí mắt đối xứng hai bên, nhìn đôi song thị, khàn tiếng nói không rõ lời, mất hoàn toàn phản xạ nuốt, bí tiểu và trướng bụng căng. Khai thác tiền sử ghi nhận bệnh nhân có ăn patê chay đóng hộp thủ công không được tiệt trùng áp suất cao cách đây 18 giờ. Thân nhiệt bệnh nhân hoàn toàn bình thường nhưng nhịp tim nhanh 115 lần/phút. Xử trí nào sau đây là bắt buộc và tối khẩn cấp cần thực hiện trước khi có kết quả cấy vi khuẩn để cứu sống bệnh nhân?',
    options: [
      'Chỉ định tiêm ngay kháng sinh amoxicillin liều cao đường tĩnh mạch.',
      'Lấy máu định lượng nồng độ độc tố Botulotoxyn tự do và chỉ định tiêm ngay huyết thanh kháng độc tố Botulinum đa týp.',
      'Tiến hành nội soi dạ dày thực quản khẩn cấp để tìm vết loét niêm mạc.',
      'Bơm rửa ruột bằng nước ấm pha muối natri ưu trương.'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 2.3 & 4.1): Bệnh cảnh liệt mềm đối xứng đi xuống, liệt dây sọ, mạch-nhiệt phân ly sau ăn đồ hộp chay là ngộ độc Botulinum; cần lấy máu định lượng độc tố và tiêm ngay huyết thanh kháng độc tố Botulinum (Antitoxin).'
  },
  {
    id: 'tb-7-4',
    lesson: 7,
    origNum: 4,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Dự phòng ngộ độc Xyanua trong Sắn',
    q: 'Sinh viên Y khoa được yêu cầu hướng dẫn một gia đình về quy trình chế biến sắn đắng (khoai mì) an toàn để phòng ngừa ngộ độc xyanua. Hướng dẫn nào sau đây là chính xác nhất dựa trên cơ chế sinh hóa học của độc tố Linamarin?',
    options: [
      'Chỉ cần luộc chín sắn nguyên củ trong nồi áp suất đóng kín vung trong vòng 10 phút là an toàn tuyệt đối.',
      'Phải lột bỏ toàn bộ vỏ mỏng và vỏ dày, cắt bỏ hai đầu củ và lõi; ngâm sắn trong nước sạch nhiều giờ; luộc sắn chín kỹ trong nồi mở vung để độc tố xyanua bay hơi hoàn toàn.',
      'Ăn sắn tươi trực tiếp ngay sau khi vừa nhổ dưới đất lên để độc tố chưa kịp chuyển hóa thành HCN.',
      'Chỉ ăn phần vỏ sắn và lột bỏ phần thịt sắn bên trong vì độc tố chỉ tập trung ở lõi sắn.'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 3.3): 90% linamarin nằm ở lớp vỏ mỏng, vỏ dày, hai đầu củ và lõi; cần gọt sạch, cắt bỏ, ngâm nhiều giờ (thay nước) và luộc kỹ mở vung để HCN bay hơi hết.'
  },
  {
    id: 'tb-7-5',
    lesson: 7,
    origNum: 5,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Liệu pháp bù dịch ORT an toàn',
    q: 'Một bệnh nhi 3 tuổi được đưa vào cấp cứu vì tiêu chảy lỏng nhiều lần kèm sốt cao, co giật toàn thân. Người nhà cho biết đã tự pha 3 gói Oresol (ORS) loại thiết kế pha cho 1 lít nước vào một cốc nước nhỏ khoảng 150ml để ép trẻ uống cho nhanh gọn. Cơ chế sinh lý bệnh nào sau đây giải thích chính xác nhất tình trạng tổn thương não bộ gây co giật của trẻ?',
    options: [
      'Sự đồng vận chuyển tích cực Glucose-Natri bị chặn đứng hoàn toàn do thiếu phân tử nước dung môi.',
      'Dung dịch ORS quá đặc tạo trạng thái ưu trương cực đoan trong lòng ruột, rút nước từ tế bào biểu mô và huyết tương ra ngoài gây tiêu chảy thẩm thấu, đồng thời gây tăng Natri máu ưu trương, rút nước từ tế bào não ra ngoài gây teo tế bào não và co giật.',
      'Kali clorua nồng độ quá cao trong cốc nước gây ức chế cơ tim ngừng tim đột ngột.',
      'Citrat trong oresol kích thích tuyến thượng thận giải phóng catecholamin gây co giật cơ vân ngoại biên.'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 4.2): Pha ORS quá đặc (ưu trương) rút nước vào lòng ruột làm tiêu chảy nặng thêm và gây tăng Natri máu ưu trương kéo nước ra khỏi tế bào não dẫn tới co giật.'
  },
  {
    id: 'tb-7-6',
    lesson: 7,
    origNum: 6,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Nguy cơ Vibrio vulnificus ở bệnh nhân xơ gan',
    q: 'Một người đàn ông 52 tuổi bị xơ gan do rượu mạn tính nhập viện vì tiêu chảy phân lỏng dữ dội kèm theo nhiễm trùng huyết nặng, cấy máu dương tính với trực khuẩn uốn khúc kỵ khí tùy nghi Vibrio vulnificus. Khai thác bệnh sử ghi nhận bệnh nhân có ăn hàu sống tại một nhà hàng hải sản ven biển cách đây 2 ngày. Nhận định nào sau đây là chính xác nhất về trường hợp lâm sàng này?',
    options: [
      'Hàu sống là thực phẩm an toàn tuyệt đối và vi khuẩn Vibrio chỉ nhiễm chéo từ dụng cụ rửa bát của nhà hàng.',
      'Bệnh nhân xơ gan có tình trạng suy giảm miễn dịch và ứ sắt ở gan nặng, tạo môi trường máu giàu sắt lý tưởng cho trực khuẩn Vibrio vulnificus nhân lên cực nhanh và gây nhiễm trùng huyết tử vong.',
      'Chỉ cần rưới nhiều tương ớt và mù tạt lên hàu sống trước khi ăn là có thể tiêu diệt hoàn toàn vi khuẩn Vibrio.',
      'Vi khuẩn Vibrio vulnificus bị tiêu diệt hoàn toàn ở nhiệt độ tủ lạnh từ 1 đến 4°C nên hàu ướp đá là tuyệt đối an toàn.'
    ],
    answer: 1,
    explain: 'Bài 7 (Câu hỏi lượng giá): Bệnh nhân xơ gan vừa suy giảm miễn dịch vừa tăng tích trữ/nồng độ sắt trong huyết thanh — yếu tố thuận lợi cực mạnh giúp Vibrio vulnificus từ hàu sống phát triển gây nhiễm trùng huyết nặng.'
  },
  {
    id: 'tb-7-7',
    lesson: 7,
    origNum: 7,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Độc tố Histamine bền nhiệt trong đồ hộp',
    q: 'Trong một vụ ngộ độc thực phẩm nghi ngờ do ăn đồ hộp cá ngừ xông khói sản xuất thương mại, cơ quan vệ sinh an toàn thực phẩm tiến hành lấy mẫu kiểm nghiệm. Kết quả phân lập vi sinh trên môi trường thạch cho thấy đồ hộp hoàn toàn vô khuẩn (không mọc bất kỳ khuẩn lạc nào). Tuy nhiên, những người ăn đồ hộp này vẫn bị ngộ độc với triệu chứng đỏ bừng giãn mạch toàn thân, nhức đầu búa bổ, nổi mày đay ngứa ngáy và nôn ói dữ dội sau khi ăn khoảng 30 phút. Giải thích khoa học nào sau đây là phù hợp nhất?',
    options: [
      'Bệnh nhân bị nhiễm trực khuẩn Clostridium botulinum thể ẩn tàng không sinh hơi gas.',
      'Cá ngừ bị ươn hỏng trước khi đóng hộp, vi khuẩn đã phân hủy histidine thành độc tố Histamine chịu nhiệt. Quy trình tiệt trùng đồ hộp sau đó tiêu diệt toàn bộ vi khuẩn (vô khuẩn) nhưng không phá hủy được độc tố Histamine cực kỳ bền nhiệt.',
      'Đồ hộp bị nhiễm kim loại nặng Chì từ vỏ lon gây kích thích hệ thần kinh trung ương tối cấp.',
      'Bệnh nhân bị phản ứng tâm lý mặc cảm (nocebo effect) do nhìn thấy nhãn hộp bị rách.'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 3.2 & Câu hỏi lượng giá): Histamine hình thành từ cá ươn trước lúc tiệt trùng có tính bền nhiệt cao; quá trình hấp tiệt trùng giết sạch vi khuẩn (mẫu cấy vô khuẩn) nhưng không phá hủy được Histamine.'
  },
  {
    id: 'tb-7-8',
    lesson: 7,
    origNum: 8,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Dinh dưỡng phục hồi sau ngộ độc thực phẩm',
    q: 'Bác sĩ điều trị thiết lập kế hoạch dinh dưỡng phục hồi cho một bệnh nhân nam 35 tuổi đang hồi phục sau đợt ngộ độc Salmonella cấp tính ngày thứ 3 (đã hết nôn, còn tiêu chảy phân sệt nhẹ 2 lần/ngày). Nguyên tắc thiết lập thực đơn nào sau đây là SAI khoa học dinh dưỡng điều trị?',
    options: [
      'Cho bệnh nhân ăn cháo gạo trắng ninh nhừ loãng trộn thịt nạc lợn băm nhuyễn để cung cấp năng lượng đa lượng dễ hấp thu.',
      'Cho bệnh nhân uống sữa tươi tiệt trùng nguyên kem ấm 500ml/ngày để nhanh chóng bù đắp lượng đạm và canxi đã mất qua phân.',
      'Loại bỏ hoàn toàn các loại chất xơ thô ráp (như rau muống, ngũ cốc nguyên cám) để tránh tổn thương cơ học biểu mô ruột.',
      'Tuyệt đối không cho bệnh nhân uống nước chè xanh đặc hoặc cà phê đen.'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 4.3): Sau ngộ độc cấp, men lactase ở đỉnh nhung mao bị bào mòn đầu tiên và niêm mạc viêm dễ tiêu phân mỡ, nên PHẢI loại bỏ đường lactose (sữa tươi nguyên kem) và hạn chế béo < 10–12%.'
  },
  {
    id: 'tb-7-9',
    lesson: 7,
    origNum: 9,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Ngộ độc Botulinum trẻ sơ sinh qua mật ong',
    q: 'Một bệnh nhi 9 tháng tuổi được đưa vào viện vì táo bón kéo dài 3 ngày, bú yếu, tiếng khóc nhỏ yếu ớt rên rỉ, và giảm trương lực cơ toàn thân rõ rệt (trông như một "búp bê vải mềm rũ"). Khai thác tiền sử ghi nhận mẹ có pha 1 thìa mật ong rừng nguyên chất vào cháo ăn dặm của trẻ hàng ngày để tăng sức đề kháng. Cơ chế bệnh học nào sau đây giải thích chính xác nhất tình trạng của trẻ?',
    options: [
      'Độc tố Solanine từ khoai tây mọc mầm trong cháo ăn dặm gây co cứng cơ tim đột ngột.',
      'Nha bào Clostridium botulinum ngủ đông trong mật ong rừng vào hệ tiêu hóa chưa trưởng thành của trẻ nảy mầm thành vi khuẩn sống, sinh độc tố botulotoxyn phong tỏa giải phóng Acetylcholine tại synap gây liệt mềm cơ toàn thân.',
      'Sắt heme trong mật ong quá cao làm cản trở sự hấp thu Kẽm sinh học tại màng bờ bàn chải.',
      'Độc tố enterotoxin của tụ cầu vàng trong mật ong phá hủy myelin của tế bào thần kinh ngoại biên.'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 2.3): Hệ vi khuẩn đường ruột ở trẻ < 1 tuổi chưa đủ hoàn thiện để ức chế nha bào C. botulinum trong mật ong, khiến nha bào nảy mầm tiết Botulotoxyn chặn phóng thích Acetylcholine (Infant Botulism).'
  },
  {
    id: 'tb-7-10',
    lesson: 7,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Vùng nhiệt độ nguy hiểm (Danger Zone)',
    q: 'Bác sĩ dinh dưỡng lâm sàng hướng dẫn quy trình bảo quản lạnh thức ăn thừa cho một bếp ăn trường học. Theo khuyến nghị y văn quốc tế của Sharon Rady Rolfes (2021), hướng dẫn nào sau đây là chính xác nhất về mốc thời gian và nhiệt độ an toàn?',
    options: [
      'Thức ăn thừa nóng có thể để nguội tự nhiên trên mặt bàn bếp từ sáng đến tối (khoảng 8 giờ) rồi mới cất vào tủ lạnh.',
      'Tuyệt đối không để thức ăn thừa trong khoảng nhiệt độ nguy hiểm (Danger Zone: 40 - 140°F) vượt quá 2 giờ (hoặc quá 1 giờ nếu nhiệt độ phòng vượt quá 90°F / 32°C).',
      'Nhiệt độ tủ lạnh bảo quản thức ăn thừa nên duy trì ổn định ở mức 15°C (60°F) để tiết kiệm điện năng.',
      'Có thể hâm nóng lại thức ăn thừa bằng cách đặt trong nồi lẩu hâm nhẹ liên tục ở nhiệt độ 30°C trong nhiều giờ trước khi ăn.'
    ],
    answer: 1,
    explain: 'Bài 7 (Mục 5.2): Vùng nguy hiểm (Danger Zone) là 40–140°F (4–60°C); thực phẩm dễ ươn hỏng không được để trong vùng này quá 2 giờ (hoặc quá 1 giờ khi nhiệt độ môi trường > 90°F / 32°C).'
  },

  // ================= BÀI 8 =================
  {
    id: 'tb-8-1',
    lesson: 8,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Tiêu chuẩn chẩn đoán Đái tháo đường (ADA)',
    q: 'Một bệnh nhân nam 52 tuổi, BMI 27.5 kg/m2, đi khám sức khỏe định kỳ có kết quả đường huyết lúc đói lần 1 là 132 mg/dL. Bệnh nhân hoàn toàn không có triệu chứng lâm sàng. Bác sĩ nên xử trí bước tiếp theo như thế nào đúng chuẩn y khoa?',
    options: [
      'Chẩn đoán xác định đái tháo đường typ 2 và cho dùng Metformin ngay.',
      'Kết luận bệnh nhân bị tiền đái tháo đường và tư vấn tập thể dục.',
      'Cho bệnh nhân làm lại xét nghiệm đường huyết lúc đói hoặc HbA1c vào một ngày khác để xác nhận chẩn đoán.',
      'Cho bệnh nhân nhập viện điều trị cấp cứu ngay lập tức.'
    ],
    answer: 2,
    explain: 'Bài 8 (Mục 1.3): Khi bệnh nhân không có triệu chứng tăng đường huyết kinh điển, chẩn đoán đái tháo đường bắt buộc dựa trên hai kết quả xét nghiệm bất thường từ hai mẫu máu khác nhau hoặc hai kỹ thuật chuẩn hóa độc lập.'
  },
  {
    id: 'tb-8-2',
    lesson: 8,
    origNum: 2,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Sinh lý bệnh Nhiễm toan ceton (DKA)',
    q: 'Cơ chế sinh lý bệnh cốt lõi giải thích tại sao bệnh nhân đái tháo đường typ 1 dễ tiến triển thành Nhiễm toan ceton (DKA) hơn bệnh nhân đái tháo đường typ 2 là gì?',
    options: [
      'Bệnh nhân typ 1 ăn nhiều carbohydrate hơn bệnh nhân typ 2.',
      'Thiếu hụt insulin tuyệt đối ở typ 1 làm mất hoàn toàn sự ức chế ly giải mỡ (lipolysis), giải phóng ồ ạt acid béo tự do để gan tổng hợp thể ceton.',
      'Tế bào thận bệnh nhân typ 1 tăng tái hấp thu acetoacetate.',
      'Bệnh nhân typ 1 bị suy giảm chức năng men alpha-glucosidase tại ruột.'
    ],
    answer: 1,
    explain: 'Bài 8 (Mục 2.1): Thiếu insulin tuyệt đối ở ĐTĐ typ 1 làm mất phanh hãm ly giải mô mỡ (lipolysis), giải phóng lượng lớn acid béo tự do về gan tổng hợp acetoacetate và beta-hydroxybutyrate gây toan máu.'
  },
  {
    id: 'tb-8-3',
    lesson: 8,
    origNum: 3,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Tác dụng phụ thiếu B12 do Metformin',
    q: 'Một bệnh nhân nam 60 tuổi, mắc ĐTĐ typ 2 được 18 năm, đang điều trị Metformin 2000mg/ngày kéo dài. Bệnh nhân xuất hiện tê bì dị cảm hai bàn chân và thiếu máu hồng cầu to. Chỉ số cận lâm sàng vi chất nào cần được kiểm tra đầu tiên?',
    options: [
      'Định lượng Sắt huyết thanh và Ferritin.',
      'Định lượng Folate hồng cầu.',
      'Định lượng Vitamin B12 huyết thanh.',
      'Định lượng Canxi toàn phần và Ion hóa.'
    ],
    answer: 2,
    explain: 'Bài 8 (Mục 3.3): Metformin liều cao kéo dài (> 1–2 năm) cản trở hấp thu phụ thuộc Canxi của phức hợp B12-IF tại hồi tràng, làm nguy cơ thiếu B12 cao gấp 3–4 lần (gây thiếu máu HC to và bệnh thần kinh).'
  },
  {
    id: 'tb-8-4',
    lesson: 8,
    origNum: 4,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Xử trí cấp cứu Hạ đường huyết (Quy tắc 15-15)',
    q: 'Theo quy tắc 15-15 trong xử trí cấp cứu Hạ đường huyết nhẹ đến trung bình ở bệnh nhân tỉnh táo (đường huyết < 70 mg/dL), lựa chọn can thiệp nào sau đây là chuẩn xác nhất?',
    options: [
      'Uống 1 ly sữa toàn phần béo hoặc ăn 1 thanh chocolate lớn.',
      'Uống 15g glucose nhanh (3 - 4 viên đường hoặc 1/2 ly nước trái cây/nước ngọt), chờ 15 phút rồi đo lại đường huyết.',
      'Tiêm ngay 10 đơn vị insulin tác dụng nhanh.',
      'Cho bệnh nhân nằm nghỉ và không cho ăn uống gì trong 1 giờ.'
    ],
    answer: 1,
    explain: 'Bài 8 (Mục 2.1): Quy tắc 15-15 dùng 15g carbohydrate hấp thu nhanh (không dùng đồ nhiều chất béo như sữa nguyên kem hay chocolate vì chất béo làm chậm hấp thu đường), chờ 15 phút rồi kiểm tra lại đường huyết.'
  },
  {
    id: 'tb-8-5',
    lesson: 8,
    origNum: 5,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Chỉ số đường huyết (GI) và Tải đường huyết (GL)',
    q: 'Chỉ số Tải đường huyết (Glycemic Load - GL) của một bữa ăn cung cấp thông tin vượt trội hơn Chỉ số đường huyết (GI) ở điểm nào?',
    options: [
      'GL đo lường được tốc độ tiêu hóa của chất xơ trong dạ dày.',
      'GL kết hợp cả chất lượng đường (GI) và khối lượng carbohydrate thực tế tiêu thụ trong một khẩu phần ăn.',
      'GL không phụ thuộc vào sự hiện diện của đạm và chất béo.',
      'GL chỉ áp dụng cho các loại thực phẩm đạm động vật.'
    ],
    answer: 1,
    explain: 'Bài 8 (Mục 5.1): Công thức GL = (GI × số gam Carbohydrate trong 1 khẩu phần) / 100, phản ánh đồng thời tốc độ tăng đường huyết (chất lượng) lẫn tổng lượng carbohydrate ăn vào thực tế.'
  },
  {
    id: 'tb-8-6',
    lesson: 8,
    origNum: 6,
    source: 'textbook',
    type: 'calc',
    objectiveTag: 'Kỹ năng · Tính nhu cầu năng lượng theo IBW',
    q: 'Bệnh nhân nam 45 tuổi, ĐTĐ typ 2 béo phì (BMI 28 kg/m2), mức lao động nhẹ. Cân nặng lý tưởng là 60 kg. Nhu cầu năng lượng khuyến nghị hàng ngày để giảm cân hợp lý cho bệnh nhân này là bao nhiêu?',
    options: [
      '2100 - 2400 kcal/ngày.',
      '1800 - 2000 kcal/ngày.',
      '1200 - 1300 kcal/ngày (giảm 500 kcal so với nhu cầu duy trì 1750 kcal).',
      'Dưới 800 kcal/ngày (chế độ ăn VLCD).'
    ],
    answer: 2,
    explain: 'Bài 8 (Mục 4.2): Lao động nhẹ cần 25–30 kcal/kg IBW (~1500–1800 kcal duy trì, lấy ~1750 kcal); với người béo phì cần cắt giảm 500–750 kcal/ngày để đạt mức giảm 0,5–1 kg/tuần (~1200–1300 kcal/ngày).'
  },
  {
    id: 'tb-8-7',
    lesson: 8,
    origNum: 7,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Kỹ thuật đếm Carbohydrate',
    q: 'Trong Kỹ thuật đếm Carbohydrate (Carb Counting), 1 phần Carbohydrate chuẩn (1 Carb Choice) quy đổi tương đương với bao nhiêu gam carbohydrate?',
    options: ['5 gam.', '10 gam.', '15 gam.', '25 gam.'],
    answer: 2,
    explain: 'Bài 8 (Mục 5.2): 1 Carb Choice = 15g Carbohydrate (tương đương 1/2 chén cơm gạt, 1 lát bánh mì sandwich, 1 củ khoai lang nhỏ 80g, hoặc 1 ly sữa tươi 220ml).'
  },
  {
    id: 'tb-8-8',
    lesson: 8,
    origNum: 8,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Tương tác thuốc Sulfonylurea và bữa ăn',
    q: 'Bệnh nhân ĐTĐ typ 2 đang điều trị bằng thuốc kích tiết insulin nhóm Sulfonylurea (Gliclazide) cần được hướng dẫn nguyên tắc uống thuốc liên quan đến bữa ăn như thế nào để tránh biến chứng?',
    options: [
      'Uống thuốc lúc đói muộn vào buổi tối trước khi đi ngủ.',
      'Uống thuốc ngay trước hoặc trong bữa ăn chính có chứa carbohydrate.',
      'Uống thuốc sau khi tập thể dục cường độ cao 2 giờ.',
      'Uống thuốc cùng với ly rượu mạnh vào buổi trưa.'
    ],
    answer: 1,
    explain: 'Bài 8 (Mục 6.3): Nhóm Sulfonylurea kích thích tế bào beta tiết insulin không phụ thuộc glucose nên nguy cơ hạ đường huyết rất cao nếu bỏ bữa; bắt buộc uống ngay trước hoặc trong bữa ăn có carbohydrate.'
  },
  {
    id: 'tb-8-9',
    lesson: 8,
    origNum: 9,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · An toàn tập luyện ở bệnh nhân ĐTĐ',
    q: 'Bệnh nhân đái tháo đường tập luyện thể chất đường dài (chạy bộ 60 phút). Kết quả kiểm tra đường huyết trước tập là 85 mg/dL. Bác sĩ nên đưa ra lời khuyên nào?',
    options: [
      'Tăng liều tiêm insulin lên gấp đôi trước khi chạy.',
      'Bổ sung ngay 15 - 30g carbohydrate hấp thu nhanh trước khi bắt đầu tập.',
      'Nhịn ăn hoàn toàn để tăng đốt cháy mỡ thừa.',
      'Hoãn tập luyện vĩnh viễn không bao giờ được vận động.'
    ],
    answer: 1,
    explain: 'Bài 8 (Mục 6.1): Nếu đường huyết trước tập < 90 mg/dL (5,0 mmol/L), bệnh nhân cần ăn bổ sung 15–30g carbohydrate trước khi tập để phòng ngừa hạ đường huyết trong và sau vận động.'
  },
  {
    id: 'tb-8-10',
    lesson: 8,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Trình tự bữa ăn kiểm soát đường huyết',
    q: 'Trình tự ăn các món ăn trong bữa ăn chính được chứng minh giúp làm giảm đỉnh đường huyết sau ăn ở bệnh nhân đái tháo đường là gì?',
    options: [
      'Ăn cơm tinh bột trước -> Ăn thịt cá -> Ăn rau củ sau cùng.',
      'Ăn rau củ/chất xơ trước -> Ăn thịt cá/protein/lipid -> Ăn cơm/tinh bột sau cùng.',
      'Trộn tất cả cơm, thịt, rau ăn cùng một lúc thật nhanh.',
      'Chỉ ăn trái cây ngọt trước bữa ăn 5 phút.'
    ],
    answer: 1,
    explain: 'Bài 8 (Mục 5.3): Ăn rau củ giàu chất xơ trước -> tiếp theo ăn đạm & chất béo -> ăn tinh bột sau cùng giúp làm chậm quá trình rỗng dạ dày và giảm rõ rệt đỉnh đường huyết sau ăn.'
  },

  // ================= BÀI 9 =================
  {
    id: 'tb-9-1',
    lesson: 9,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Phân loại Tăng huyết áp JNC 7',
    q: 'Bệnh nhân nam 52 tuổi, khám sức khỏe định kỳ có Huyết áp 152/96 mmHg (đo 2 lần chuẩn xác ở tư thế ngồi). Bệnh nhân không có tiền sử bệnh lý khác, BMI 26.5 kg/m2. Theo JNC 7, chẩn đoán và hướng xử trí ban đầu nào sau đây là phù hợp nhất?',
    options: [
      'Tiền tăng huyết áp; chỉ cần theo dõi và không cần can thiệp lối sống.',
      'Tăng huyết áp Độ 1; bắt đầu ngay can thiệp lối sống kết hợp dùng thuốc hạ áp đơn trị liệu.',
      'Tăng huyết áp Độ 2; bắt đầu ngay phối hợp 2 thuốc hạ áp cùng lúc.',
      'Cơn tăng huyết áp cấp cứu; nhập viện truyền thuốc hạ áp tĩnh mạch ngay.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 1): Theo JNC 7, HATT 140–159 hoặc HATTr 90–99 mmHg là Tăng huyết áp Độ 1; chỉ định bắt buộc thay đổi lối sống kết hợp đơn trị liệu (Thiazide, ACEI, ARB hoặc CCB).'
  },
  {
    id: 'tb-9-2',
    lesson: 9,
    origNum: 2,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Cơ chế hạ áp của Kali',
    q: 'Cơ chế sinh lý bệnh nào sau đây giải thích chính xác nhất tác dụng hạ huyết áp của chế độ ăn giàu Kali (3500 - 4700 mg/ngày)?',
    options: [
      'Kali kích thích tuyến thượng thận tăng tiết Aldosterone để tái hấp thu nước.',
      'Kali tăng cường bài tiết Natri qua đường nước tiểu, làm giảm trương lực cơ trơn mạch máu và giãn mạch.',
      'Kali gắn trực tiếp với enzym ACE để ngăn chặn sự chuyển hóa Angiotensin I.',
      'Kali ức chế hoạt động của bơm Na+-K+-ATPase làm tăng Canxi nội bào.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 3): Kali (3500–4700 mg/ngày) thúc đẩy đào thải Natri qua nước tiểu, giảm trương lực cơ trơn mạch máu và giúp giãn mạch (giúp giảm khoảng 4–5 mmHg HATT).'
  },
  {
    id: 'tb-9-3',
    lesson: 9,
    origNum: 3,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Mục tiêu giảm cân trong Tăng huyết áp',
    q: 'Một bệnh nhân tăng huyết áp kèm béo phì (BMI 28 kg/m2) bắt đầu thực hiện chương trình giảm cân. Khẳng định nào sau đây về mối tương quan giữa giảm cân và huyết áp là chính xác dựa trên y học chứng cứ?',
    options: [
      'Cần giảm ít nhất 20 kg thì huyết áp mới bắt đầu có sự cải thiện trên lâm sàng.',
      'Trung bình mỗi 1 kg cân nặng giảm được sẽ giúp giảm khoảng 1 mmHg huyết áp tâm thu.',
      'Giảm cân chỉ có tác dụng hạ huyết áp ở người trẻ tuổi, không có hiệu quả ở người > 50 tuổi.',
      'Giảm cân làm tăng hoạt động hệ giao cảm nên có thể làm tăng huyết áp tạm thời.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 3): Bằng chứng y học chứng minh trung bình mỗi 1 kg cân nặng giảm được giúp hạ khoảng 1 mmHg huyết áp tâm thu (giảm 10 kg giúp hạ 5–10 mmHg).'
  },
  {
    id: 'tb-9-4',
    lesson: 9,
    origNum: 4,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Tiêu thụ muối tại Việt Nam vs WHO',
    q: 'Lượng muối (NaCl) tiêu thụ trung bình hàng ngày của người trưởng thành Việt Nam hiện nay theo các khảo sát dịch tễ là bao nhiêu, và so với khuyến nghị của WHO như thế nào?',
    options: [
      'Khoảng 5g/ngày, đạt hoàn toàn chuẩn khuyến nghị của WHO.',
      'Khoảng 8g/ngày, cao gấp 1.5 lần khuyến nghị của WHO.',
      'Khoảng 12g/ngày, cao gấp hơn 2 lần khuyến nghị của WHO (< 5g/ngày).',
      'Khoảng 20g/ngày, cao gấp 4 lần khuyến nghị của WHO.'
    ],
    answer: 2,
    explain: 'Bài 9 (Mục 3): Người trưởng thành Việt Nam tiêu thụ trung bình ~12g muối/ngày (~4800mg Natri), cao gấp hơn 2 lần khuyến nghị của WHO (< 5g muối/ngày hay < 2000mg Natri).'
  },
  {
    id: 'tb-9-5',
    lesson: 9,
    origNum: 5,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Đặc trưng chế độ ăn DASH',
    q: 'Chế độ ăn DASH (Dietary Approaches to Stop Hypertension) được đặc trưng bởi sự phối hợp khẩu phần nào sau đây?',
    options: [
      'Nhiều thịt đỏ, ăn chay tuyệt đối không uống sữa, hạn chế tinh bột.',
      'Giàu rau quả tươi, ngũ cốc nguyên cám, sữa ít béo/gầy; giàu Kali, Magie, Canxi; ít béo bão hòa và ít Natri.',
      'Nhịn ăn gián đoạn, chỉ ăn chất béo động vật và loại bỏ hoàn toàn chất xơ.',
      'Ăn nhiều đồ hộp chế biến sẵn và bổ sung viên Canxi liều cực đại.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 3 - Bảng DASH): Thực đơn DASH giàu rau xanh, trái cây tươi, ngũ cốc nguyên cám, sữa ít béo, cá/thịt nạc, hạt/đậu đỗ; cung cấp dồi dào K, Mg, Ca, chất xơ và rất ít SFA/Natri (hạ 8–14 mmHg HATT).'
  },
  {
    id: 'tb-9-6',
    lesson: 9,
    origNum: 6,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Tương tác thuốc Lợi tiểu Thiazide',
    q: 'Bệnh nhân nam 60 tuổi đang điều trị Tăng huyết áp bằng thuốc Lợi tiểu Thiazide. Xét nghiệm định kỳ nào về dinh dưỡng/điện giải cần được chú ý theo dõi nhất?',
    options: [
      'Nồng độ Vitamin C huyết thanh.',
      'Nồng độ Kali và Magie máu (nguy cơ hạ Kali và Magie máu).',
      'Nồng độ Natri máu tăng cực đoan.',
      'Nồng độ Vitamin B12 máu.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 4): Lợi tiểu thải Kali (Thiazide, Furosemide) làm tăng thải Kali và Magie qua nước tiểu dẫn tới hạ K và Mg máu, gây yếu cơ và rối loạn nhịp tim.'
  },
  {
    id: 'tb-9-7',
    lesson: 9,
    origNum: 7,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Tương tác thuốc ACEI và muối KCl',
    q: 'Bệnh nhân nữ 58 tuổi đang dùng thuốc ức chế men chuyển Lisinopril điều trị tăng huyết áp. Người nhà mua cho bệnh nhân lọ gia vị "muối ăn kiêng" thay thế muối thường. Bác sĩ cần lưu ý điều gì?',
    options: [
      'Khuyên dùng tự do vì muối ăn kiêng không có bất kỳ tác dụng phụ nào.',
      'Cảnh báo nguy cơ Tăng Kali máu cấp tính vì muối ăn kiêng thường chứa Kali Chloride (KCl), trong khi thuốc ACEI đã gây giữ Kali.',
      'Cảnh báo muối ăn kiêng gây tụt đường huyết nặng.',
      'Khuyên uống kèm nước ép bưởi chùm để tăng hấp thu.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 4): Thuốc ức chế men chuyển (ACEI) giảm tiết Aldosterone gây giữ Kali máu; dùng gia vị thay thế muối chứa KCl có thể gây tăng Kali máu nguy hiểm tính mạng.'
  },
  {
    id: 'tb-9-8',
    lesson: 9,
    origNum: 8,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Tương tác thuốc Chẹn kênh Canxi & bưởi chùm',
    q: 'Bệnh nhân đang dùng thuốc chẹn kênh Canxi Felodipine điều trị tăng huyết áp không nên uống loại nước ép trái cây nào sau đây do tương tác dược động học?',
    options: [
      'Nước ép dưa hấu.',
      'Nước ép ổi.',
      'Nước ép bưởi chùm (Grapefruit juice).',
      'Nước dừa tươi.'
    ],
    answer: 2,
    explain: 'Bài 9 (Mục 4): Nước ép bưởi chùm ức chế enzyme CYP3A4 tại ruột, làm tăng nồng độ thuốc chẹn kênh Canxi (Amlodipine, Felodipine) trong máu gây hạ huyết áp quá mức.'
  },
  {
    id: 'tb-9-9',
    lesson: 9,
    origNum: 9,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Cơ chế béo phì nội tạng gây Tăng huyết áp',
    q: 'Cơ chế nào giải thích tại sao béo phì mỡ nội tạng (béo bụng) là yếu tố nguy cơ mạnh khởi phát tăng huyết áp?',
    options: [
      'Mỡ nội tạng làm giảm hoàn toàn sự bài tiết hormone Leptin.',
      'Mỡ nội tạng tiết Cytokine gây viêm, tăng Leptin kích thích thần kinh giao cảm và chèn ép cơ học nhu mô thận làm tăng tiết Renin.',
      'Mỡ nội tạng làm tăng đào thải Natri qua đường mồ hôi.',
      'Mỡ nội tạng làm liệt dây thần kinh phế vị.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 2): Mỡ nội tạng tăng tiết Leptin và cytokine viêm (TNF-alpha, IL-6) kích thích giao cảm trung ương, chèn ép cơ học nhu mô thận hoạt hóa RAAS, kèm kháng insulin tăng giữ Na+ ở ống thận.'
  },
  {
    id: 'tb-9-10',
    lesson: 9,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Khuyến cáo rượu bia ở bệnh nhân Tăng huyết áp',
    q: 'Khuyên bảo nào sau đây về mức tiêu thụ rượu bia là phù hợp cho bệnh nhân nam bị tăng huyết áp?',
    options: [
      'Có thể uống tự do vì rượu bia làm giãn mạch nên giúp hạ huyết áp kéo dài.',
      'Giới hạn tối đa không quá 2 đơn vị cồn/ngày (lưu ý: 1 đơn vị tương đương 1 lon bia 330ml hoặc 150ml rượu vang/ngày).',
      'Phải uống ít nhất 5 đơn vị cồn/ngày mới có tác dụng bảo vệ tim mạch.',
      'Uống rượu mạnh tốt hơn uống bia vì không chứa đường.'
    ],
    answer: 1,
    explain: 'Bài 9 (Mục 3): Nam giới bị tăng huyết áp giới hạn không quá 2 đơn vị cồn/ngày, nữ không quá 1 đơn vị/ngày (1 đơn vị = 330 ml bia 5%, 150 ml rượu vang 12%, hoặc 45 ml rượu mạnh 40%).'
  },

  // ================= BÀI 10 =================
  {
    id: 'tb-10-1',
    lesson: 10,
    origNum: 1,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Sinh lý bệnh Hội chứng Dumping sớm',
    q: 'Bệnh nhân nam 45 tuổi, có tiền sử phẫu thuật cắt bán phần dạ dày điều trị loét môn vị 2 tuần trước. Sau khi ăn bữa trưa giàu tinh bột ngọt, bệnh nhân xuất hiện chóng mặt, vã mồ hôi, tim đập nhanh, đau quặn bụng và tiêu chảy phân lỏng sau 20 phút. Cơ chế sinh lý bệnh chính của hiện tượng này là gì?',
    options: [
      'Tụy tăng tiết quá mức glucagon gây tăng áp lực thẩm thấu máu.',
      'Dưỡng trấp ưu thẩm thấu tràn xuống ruột non quá nhanh kéo nước từ máu vào lòng ruột gây giảm thể tích tuần hoàn.',
      'Nhiễm trùng cấp tính trực khuẩn E. coli từ thức ăn trưa.',
      'Tăng trương lực cơ thắt thực quản dưới gây trào ngược acid tối cấp.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 2.3): Hội chứng Dumping sớm (10–30 phút sau ăn) xảy ra do mất van môn vị khiến dưỡng trấp ưu thấm đổ nhanh xuống ruột non, kéo nước từ lòng mạch vào ruột gây giảm thể tích tuần hoàn và đau quặn.'
  },
  {
    id: 'tb-10-2',
    lesson: 10,
    origNum: 2,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kiến thức · Viêm teo dạ dày tự miễn & B12',
    q: 'Một bệnh nhân bị viêm teo niêm mạc dạ dày mạn tính tự miễn. Xét nghiệm máu cho thấy thiếu máu hồng cầu to thể megaloblastic. Nguyên nhân dinh dưỡng trực tiếp gây ra tình trạng thiếu máu này là gì?',
    options: [
      'Thiếu hụt men pepsinogen nên không tiêu hóa được sắt từ thịt động vật.',
      'Tế bào thành bị tổn thương không tiết được Yếu tố nội tại (Intrinsic Factor), cản trở hấp thu Vitamin B12 tại hồi tràng.',
      'Tăng bài tiết acid HCl làm phá hủy hoàn toàn Vitamin C trong dạ dày.',
      'Giảm bài tiết gastrin làm teo nhung mao hỗng tràng.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 2.2): Viêm dạ dày teo mạn tính phá hủy tế bào thành, gây vô toan và thiếu hụt Yếu tố nội tại (IF) làm mất hấp thu Vitamin B12 tại hồi tràng -> thiếu máu ác tính hồng cầu to.'
  },
  {
    id: 'tb-10-3',
    lesson: 10,
    origNum: 3,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Tiết chế MCT trong tiêu phân mỡ',
    q: 'Chất béo chuỗi trung bình (MCT) được ưu tiên chỉ định cho bệnh nhân suy tụy ngoại tiết hoặc tắc mật mạn tính vì lý do sinh lý nào sau đây?',
    options: [
      'MCT cung cấp năng lượng cao gấp hai lần so với chất béo chuỗi dài.',
      'MCT hấp thu trực tiếp vào tĩnh mạch cửa về gan mà không cần sự nhũ tương hóa của muối mật và lipase tụy.',
      'MCT làm tăng co bóp túi mật giúp bài tiết mật nhiều hơn.',
      'MCT được vi khuẩn đại tràng chuyển hóa thành SCFA giúp nuôi dưỡng biểu mô.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 6.3): MCT (acid béo 8–12 carbon) tan tốt hơn trong nước, hấp thu trực tiếp qua biểu mô ruột thẳng vào tĩnh mạch cửa về gan mà không cần muối mật nhũ tương hóa hay lipase tụy.'
  },
  {
    id: 'tb-10-4',
    lesson: 10,
    origNum: 4,
    source: 'textbook',
    type: 'case',
    objectiveTag: 'Kỹ năng · Chế độ ăn giảm FODMAPs trong IBS',
    q: 'Bệnh nhân nữ 28 tuổi mắc Hội chứng Ruột kích thích (IBS) thể tiêu chảy và đầy hơi rầm rộ. Lời khuyên dinh dưỡng nào sau đây là phù hợp nhất?',
    options: [
      'Tăng cường uống nước ép táo, ăn nhiều mật ong và tỏi để tăng sức đề kháng.',
      'Áp dụng chế độ ăn giảm FODMAPs, hạn chế các đường mạch ngắn kém hấp thu và dễ lên men.',
      'Nhịn ăn hoàn toàn và chỉ nuôi dưỡng qua đường tĩnh mạch TPN lâu dài.',
      'Bổ sung liều cao chất xơ không tan từ cám lúa mì cứng.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 5.2): Chế độ ăn giảm FODMAPs loại bỏ các carbohydrate mạch ngắn kém hấp thu dễ lên men sinh khí H2, CO2, CH4 (táo, mật ong, tỏi, lúa mì, sữa lactose...) giúp giảm tiêu chảy và chướng hơi trong IBS.'
  },
  {
    id: 'tb-10-5',
    lesson: 10,
    origNum: 5,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Tiên lượng Hội chứng Ruột ngắn (SBS)',
    q: 'Trong Hội chứng Ruột ngắn (SBS), đoạn ruột nào khi bị cắt bỏ sẽ gây ra những hậu quả rối loạn chuyển hóa trầm trọng nhất do không thể thay thế chức năng?',
    options: [
      'Tá tràng.',
      'Hỗng tràng.',
      'Hồi tràng (đặc biệt là đoạn xa hồi tràng).',
      'Đại tràng ngang.'
    ],
    answer: 2,
    explain: 'Bài 10 (Mục 4.1): Cắt hồi tràng (đặc biệt đoạn xa) gây hậu quả nặng nề nhất vì đây là vị trí duy nhất hấp thu Vitamin B12 và tái hấp thu muối mật, đồng thời hồi tràng có khả năng thích nghi bù trừ vượt trội.'
  },
  {
    id: 'tb-10-6',
    lesson: 10,
    origNum: 6,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Động học Thích nghi ruột trong SBS',
    q: 'Yếu tố nào đóng vai trò kích thích quan trọng nhất thúc đẩy quá trình thích nghi ruột (Intestinal Adaptation) sau phẫu thuật cắt đoạn ruột?',
    options: [
      'Duy trì nuôi ăn tĩnh mạch TPN tuyệt đối trong 6 tháng.',
      'Sự tiếp xúc trực tiếp của niêm mạc ruột còn lại với thức ăn qua đường miệng.',
      'Bổ sung Vitamin C liều cao qua đường tiêm.',
      'Cho bệnh nhân uống các dung dịch ưu thấm giàu đường sucrose.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 4.2): Kích thích quan trọng nhất cho quá trình phì đại nhung mao, tăng hẻm tuyến và enzym bờ bàn chải là sự tiếp xúc trực tiếp của niêm mạc ruột với dưỡng chất đường miệng cùng hormon GLP-2, GH, IGF-1.'
  },
  {
    id: 'tb-10-7',
    lesson: 10,
    origNum: 7,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Tiết chế Trào ngược dạ dày thực quản (GERD)',
    q: 'Nguyên tắc dinh dưỡng cốt lõi đối với bệnh nhân trào ngược dạ dày - thực quản (GERD) là gì?',
    options: [
      'Ăn bữa tối thật no trước khi đi ngủ để tránh cồn cào đêm.',
      'Hạn chế chất béo mỡ động vật, sô-cô-la, cà phê vì chúng làm giảm trương lực cơ thắt thực quản dưới (LES).',
      'Uống nhiều nước quả chua như chanh, bưởi ngay sau bữa ăn để kích thích tiêu hóa.',
      'Mặc corset chật bụng để giữ cố định vị trí dạ dày.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 2.1): Cần tránh các chất làm giãn/giảm trương lực cơ thắt thực quản dưới (LES) như mỡ động vật, sô-cô-la, cà phê, trà đặc, bạc hà, rượu bia; ăn 5–6 bữa nhỏ và ăn trước khi nằm ≥ 3 giờ.'
  },
  {
    id: 'tb-10-8',
    lesson: 10,
    origNum: 8,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Phân biệt Crohn và Viêm loét đại tràng',
    q: 'Sự khác biệt cơ bản về tổn thương giải phẫu bệnh giữa Bệnh Crohn và Viêm loét đại tràng (Ulcerative Colitis) là gì?',
    options: [
      'Bệnh Crohn chỉ tổn thương ở trực tràng; Viêm loét đại tràng tổn thương toàn bộ ống tiêu hóa.',
      'Bệnh Crohn tổn thương xuyên thành (transmural) ngắt quãng; Viêm loét đại tràng tổn thương nông niêm mạc liên tục tại đại tràng.',
      'Viêm loét đại tràng gây rò ruột rầm rộ; Bệnh Crohn không bao giờ tạo rò.',
      'Bệnh Crohn luôn khỏi hoàn toàn sau phẫu thuật colectomy.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 3 - Bảng so sánh IBD): Bệnh Crohn tổn thương xuyên thành (từ niêm mạc tới thanh mạc) và ngắt quãng ("skip lesions") từ miệng tới hậu môn; Viêm loét đại tràng tổn thương nông ở niêm mạc/dưới niêm mạc và liên tục từ trực tràng lên đại tràng.'
  },
  {
    id: 'tb-10-9',
    lesson: 10,
    origNum: 9,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kỹ năng · Sai lầm khi pha Oresol quá đặc',
    q: 'Bệnh nhân tiêu chảy cấp tự pha Oresol tại nhà. Nếu pha quá đặc (cho quá ít nước so với quy định), biến chứng nguy hiểm nào có thể xảy ra?',
    options: [
      'Tiêu chảy biến mất ngay lập tức.',
      'Tăng áp lực thẩm thấu máu gây mất nước tế bào, phù não và co giật.',
      'Hạ natri máu nặng gây liệt ruột.',
      'Xuất huyết dạ dày cấp tính.'
    ],
    answer: 1,
    explain: 'Bài 10 (Mục 6.2): Pha Oresol quá đặc (ưu thẩm thấu) làm tăng áp lực thẩm thấu máu, gây mất nước tế bào và rối loạn điện giải thần kinh nặng (co giật); ngược lại pha quá loãng không đủ kích hoạt SGLT-1 hoặc gây nhược thẩm thấu.'
  },
  {
    id: 'tb-10-10',
    lesson: 10,
    origNum: 10,
    source: 'textbook',
    type: 'recall',
    objectiveTag: 'Kiến thức · Vai trò Glutamine trong SBS',
    q: 'Amino acid nào sau đây được chứng minh có vai trò đặc hiệu là cơ chất năng lượng ưu tiên của tế bào biểu mô ruột, giúp thúc đẩy quá trình liền sẹo niêm mạc trong hội chứng ruột ngắn?',
    options: ['Alanine.', 'Glutamine.', 'Leucine.', 'Lysine.'],
    answer: 1,
    explain: 'Bài 10 (Mục 4.3): Trong giai đoạn chuyển tiếp của Hội chứng ruột ngắn, bổ sung amino acid Glutamine — nguồn nhiên liệu ưu tiên của tế bào ruột non — giúp kích thích tái tạo và liền sẹo niêm mạc.'
  }
];
