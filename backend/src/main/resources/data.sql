-- External Links
INSERT INTO external_link (link_type, url, label_ko, label_en, label_zh, label_ja, active, display_order, created_at, updated_at) VALUES
('OBSERVATORY', 'https://www.63art.co.kr/observatory', '전망대 티켓 예매', 'Observatory Tickets', '天文台门票', '展望台チケット', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('POMPIDOU', 'https://www.63art.co.kr/pompidou', '퐁피두 티켓 예매', 'Pompidou Tickets', '蓬皮杜门票', 'ポンピドゥーチケット', true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('BUFFET', 'https://www.63art.co.kr/buffet', '뷔페 웨이팅 등록', 'Buffet Waiting', '自助餐等候', 'ビュッフェ待ち登録', true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('RESTAURANT', 'https://www.63art.co.kr/restaurant', '레스토랑 예약', 'Restaurant Reservation', '餐厅预约', 'レストラン予約', true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- News
INSERT INTO news (title_ko, title_en, title_zh, title_ja, content_ko, content_en, content_zh, content_ja, news_type, published, created_at, updated_at) VALUES
('63빌딩 리뉴얼 그랜드 오픈', '63 Building Grand Reopening', '63大厦焕新盛大开业', '63ビルリニューアルグランドオープン',
 '63빌딩이 대대적인 리뉴얼을 마치고 새롭게 선보입니다. 더욱 다양해진 F&B와 리테일 공간으로 방문해 주세요.',
 '63 Building reopens with major renovations completed. Visit us with more diverse F&B and retail spaces.',
 '63大厦完成大规模翻新后重新开业。更多样化的餐饮和零售空间等您光临。',
 '63ビルが大規模なリニューアルを経て新たに登場。より多様なF&Bとリテール空間をご体験ください。',
 'NEWS', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('전망대 특별 야간 프로그램 운영', 'Special Night Program at Observatory', '天文台特别夜间项目', '展望台特別夜間プログラム開催',
 '한강의 야경을 감상할 수 있는 특별 야간 프로그램을 운영합니다. 매주 금·토요일 저녁 9시~11시',
 'Enjoy the night view of Han River with our special night program. Every Fri & Sat, 9pm-11pm.',
 '特别夜间项目让您欣赏汉江夜景。每周五六晚上9时至11时。',
 '漢江の夜景を楽しめる特別夜間プログラムを開催します。毎週金・土曜日夜9時〜11時。',
 'NEWS', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('[공지] 운영시간 안내', '[Notice] Operating Hours', '[通知] 营业时间', '[お知らせ] 営業時間案内',
 '63빌딩 전체 운영시간은 오전 10시부터 오후 10시까지입니다. 각 시설별 운영시간은 상이할 수 있습니다.',
 '63 Building operating hours are 10:00 AM - 10:00 PM. Individual facility hours may vary.',
 '63大厦整体营业时间为上午10时至晚上10时。各设施营业时间可能有所不同。',
 '63ビル全体の営業時間は午前10時から午後10時までです。各施設の営業時間は異なる場合があります。',
 'NOTICE', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Floor Maps
INSERT INTO floor_map (floor_number, floor_name_ko, floor_name_en, floor_name_zh, floor_name_ja, description_ko, description_en, description_zh, description_ja, display_order, active, created_at, updated_at) VALUES
('GF', '지상층', 'Ground Floor', '地面层', 'グラウンドフロア', '메인 입구 및 안내데스크, 편의시설', 'Main entrance, information desk, amenities', '主入口、咨询台、便利设施', 'メインエントランス、案内デスク、アメニティ', 1, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('B1', '지하 1층', 'Basement 1', '地下1层', '地下1階', 'F&B존, 편의점, 주차장 연결', 'F&B Zone, Convenience store, Parking connection', 'F&B区域、便利店、停车场连接', 'F&Bゾーン、コンビニ、駐車場連絡', 2, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('1F-10F', '1층~10층', '1F-10F', '1楼~10楼', '1F~10F', '리테일존, 쇼핑 및 브랜드 매장', 'Retail Zone, Shopping & Brand stores', '零售区、购物及品牌店', 'リテールゾーン、ショッピング＆ブランド店', 3, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('11F-56F', '11층~56층', '11F-56F', '11楼~56楼', '11F~56F', '오피스 및 전문 시설', 'Office & Professional facilities', '办公室及专业设施', 'オフィス＆専門施設', 4, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('57F-59F', '57층~59층', '57F-59F', '57楼~59楼', '57F~59F', '프리미엄 레스토랑 & 다이닝', 'Premium Restaurant & Dining', '高级餐厅及餐饮', 'プレミアムレストラン＆ダイニング', 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('60F', '60층', '60F', '60楼', '60F', '전망대 - 서울 360도 파노라마', 'Observatory - Seoul 360° Panorama', '观景台 - 首尔360度全景', '展望台 - ソウル360度パノラマ', 6, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Stores
INSERT INTO store (name_ko, name_en, name_zh, name_ja, floor, zone, description_ko, description_en, description_zh, description_ja, phone, hours, display_order, active, created_at, updated_at) VALUES
('63 씨푸드뷔페', '63 Seafood Buffet', '63海鲜自助餐', '63シーフードビュッフェ', 'B1', 'FNB', '신선한 해산물과 다양한 요리를 즐길 수 있는 프리미엄 뷔페', 'Premium buffet with fresh seafood and various dishes', '新鲜海鲜自助餐', 'シーフードビュッフェ', '02-789-5600', '11:30-21:00', 1, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('더 스카이 레스토랑', 'The Sky Restaurant', '天空餐厅', 'ザ・スカイレストラン', '57F', 'FNB', '한강을 바라보며 즐기는 파인다이닝', 'Fine dining with Han River view', '汉江景观精致餐厅', '漢江を望むファインダイニング', '02-789-5700', '11:30-22:00', 2, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('63 갤러리', '63 Gallery', '63画廊', '63ギャラリー', '2F', 'RETAIL', '국내외 유명 브랜드 및 예술 작품 전시', 'Domestic and international brand exhibition', '国内外知名品牌及艺术品展示', '国内外有名ブランド・アート展示', '02-789-5800', '10:00-21:00', 3, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('카페 63', 'Cafe 63', '63咖啡', 'カフェ63', 'GF', 'FNB', '63빌딩 대표 카페, 시그니처 음료 제공', '63 Building signature cafe', '63大厦特色咖啡馆', '63ビルのシグネチャーカフェ', '02-789-5900', '08:00-22:00', 4, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('세븐일레븐', '7-Eleven', '7-Eleven', '7-Eleven', 'B1', 'AMENITY', '24시간 편의점', '24-hour convenience store', '24小时便利店', '24時間コンビニ', '02-789-5100', '24시간', 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
