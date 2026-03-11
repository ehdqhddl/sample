-- ============================================================
-- External Links
-- ============================================================
INSERT INTO external_link (link_type, url, label_ko, label_en, label_zh, label_ja, active, display_order, created_at, updated_at) VALUES
('OBSERVATORY', 'https://www.63art.co.kr/observatory', '전망대 티켓 예매', 'Observatory Tickets', '天文台门票预订', '展望台チケット予約', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('POMPIDOU',    'https://www.63art.co.kr/pompidou',    '퐁피두 전시 예매',  'Pompidou Exhibition', '蓬皮杜展览门票', 'ポンピドゥー展チケット', true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('BUFFET',      'https://www.63art.co.kr/buffet',      '뷔페 웨이팅 등록', 'Buffet Waiting List', '自助餐候位登记', 'ビュッフェ待ち登録', true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('RESTAURANT',  'https://www.63art.co.kr/restaurant',  '레스토랑 예약',    'Restaurant Reservation', '餐厅预约', 'レストラン予約', true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ============================================================
-- News & Notices
-- ============================================================
INSERT INTO news (title_ko, title_en, title_zh, title_ja, content_ko, content_en, content_zh, content_ja, news_type, published, created_at, updated_at) VALUES

('63빌딩 리뉴얼 그랜드 오픈',
 '63 Building Grand Reopening',
 '63大厦焕新盛大开业',
 '63ビルリニューアルグランドオープン',
 '63빌딩이 대대적인 리뉴얼을 마치고 새롭게 선보입니다. 40년 역사의 랜드마크가 현대적인 감각으로 재탄생하여, 더욱 다양해진 F&B, 리테일, 문화 공간으로 여러분을 맞이합니다. 퐁피두 센터와의 협업으로 수준 높은 현대미술 전시를 상시 운영하며, 57~59층 스카이 다이닝과 지하 1층 씨푸드 뷔페까지 새로운 미식 경험을 제공합니다.',
 '63 Building reopens with major renovations completed. The 40-year landmark has been reborn with a modern sensibility, welcoming you with more diverse F&B, retail, and cultural spaces. In collaboration with Centre Pompidou, we offer high-quality contemporary art exhibitions, sky dining on floors 57-59, and a seafood buffet on B1F.',
 '63大厦完成大规模翻新后重新开业。这座有着40年历史的地标以现代感焕然一新，为您带来更多样化的F&B、零售和文化空间。与蓬皮杜中心合作举办高水准当代艺术展，57-59层天空餐厅和地下一层海鲜自助餐为您带来全新美食体验。',
 '63ビルが大規模なリニューアルを経て新たに登場。40年の歴史を持つランドマークが現代的な感性で生まれ変わり、より多様なF&B、リテール、文化空間でお出迎えします。ポンピドゥーセンターとのコラボレーションで高水準の現代アート展を常時開催し、57〜59階のスカイダイニングやB1Fのシーフードビュッフェで新たな食体験を提供します。',
 'NEWS', true, CURRENT_TIMESTAMP - INTERVAL '7 days', CURRENT_TIMESTAMP - INTERVAL '7 days'),

('전망대 특별 야간 프로그램 운영',
 'Special Night Program at Observatory',
 '天文台特别夜间项目',
 '展望台特別夜間プログラム開催',
 '한강의 아름다운 야경을 감상할 수 있는 특별 야간 전망 프로그램을 운영합니다. 매주 금·토요일 저녁 9시부터 11시까지, 249m 높이의 전망대에서 서울의 화려한 야경을 즐기세요. 야간 조명 쇼와 함께 시그니처 음료도 제공됩니다. 사전 예약 필수.',
 'Enjoy the beautiful night view of Han River with our special night program. Every Friday and Saturday, 9pm-11pm, enjoy Seoul''s spectacular night view from the 249m observatory. Signature drinks are provided along with a night light show. Advance reservation required.',
 '特别夜间项目让您欣赏汉江美丽夜景。每周五六晚上9时至11时，在249米高的观景台欣赏首尔绚丽夜景。夜间灯光秀配合特色饮品。需提前预约。',
 '漢江の美しい夜景を楽しめる特別夜間プログラムを開催します。毎週金・土曜日夜9時〜11時、249mの展望台からソウルの華やかな夜景をご覧ください。夜間照明ショーとシグネチャードリンクもご提供。要事前予約。',
 'NEWS', true, CURRENT_TIMESTAMP - INTERVAL '5 days', CURRENT_TIMESTAMP - INTERVAL '5 days'),

('퐁피두 센터 컬렉션 특별전 개막',
 'Centre Pompidou Collection Special Exhibition Opening',
 '蓬皮杜中心馆藏特别展览开幕',
 'ポンピドゥーセンターコレクション特別展開幕',
 '파리 퐁피두 센터와의 협업으로 세계적인 현대미술 컬렉션이 서울에 상륙합니다. 피카소, 마티스, 칸딘스키 등 거장들의 작품 80여 점이 63빌딩 2~3층에 전시됩니다. 전시 기간: 2025년 3월 ~ 2025년 12월. 일반 관람: 화~일요일 10:00~19:00. 매주 월요일 휴관.',
 'In collaboration with Centre Pompidou Paris, world-class contemporary art collections arrive in Seoul. Over 80 works by masters including Picasso, Matisse, and Kandinsky are exhibited on floors 2-3 of 63 Building. Exhibition period: March ~ December 2025. Open Tue-Sun 10:00-19:00. Closed Mondays.',
 '与巴黎蓬皮杜中心合作，世界级现代艺术馆藏登陆首尔。毕加索、马蒂斯、康定斯基等大师80余件作品在63大厦2-3层展出。展览期间：2025年3月至12月。开放时间：周二至周日10:00-19:00。周一闭馆。',
 'パリのポンピドゥーセンターとのコラボレーションで、世界的な現代アートコレクションがソウルに上陸。ピカソ、マティス、カンディンスキーなど巨匠の作品80点以上が63ビル2〜3階に展示されます。展示期間：2025年3月〜12月。開館時間：火〜日10:00〜19:00。月曜休館。',
 'NEWS', true, CURRENT_TIMESTAMP - INTERVAL '3 days', CURRENT_TIMESTAMP - INTERVAL '3 days'),

('[공지] 2025 운영시간 안내',
 '[Notice] 2025 Operating Hours',
 '[通知] 2025年营业时间',
 '[お知らせ] 2025年営業時間案内',
 '63빌딩 2025년 운영시간 안내입니다. ▶ 전체 운영: 오전 10시 ~ 오후 10시 (연중무휴) ▶ 전망대: 오전 10시 ~ 오후 10시 (입장 마감 21:30) ▶ 씨푸드 뷔페: 11:30 ~ 21:00 (브레이크타임 15:00-17:00) ▶ 스카이 레스토랑: 11:30 ~ 22:00 ▶ 퐁피두 전시: 10:00 ~ 19:00 (월요일 휴관) ▶ 카페 63: 08:00 ~ 22:00. 공휴일 운영시간은 별도 공지됩니다.',
 '2025 Operating Hours for 63 Building. ▶ General: 10:00 AM - 10:00 PM (Open year-round) ▶ Observatory: 10:00 AM - 10:00 PM (Last entry 21:30) ▶ Seafood Buffet: 11:30 - 21:00 (Break 15:00-17:00) ▶ Sky Restaurant: 11:30 - 22:00 ▶ Pompidou Exhibition: 10:00 - 19:00 (Closed Mon) ▶ Cafe 63: 08:00 - 22:00. Holiday hours will be announced separately.',
 '2025年63大厦营业时间。▶ 整体：上午10时至晚上10时（全年无休）▶ 观景台：10:00-22:00（最晚入场21:30）▶ 海鲜自助餐：11:30-21:00（休息15:00-17:00）▶ 天空餐厅：11:30-22:00 ▶ 蓬皮杜展览：10:00-19:00（周一闭馆）▶ 63咖啡：08:00-22:00。节假日营业时间另行通知。',
 '2025年63ビル営業時間のご案内。▶ 全体：午前10時〜午後10時（年中無休）▶ 展望台：10:00〜22:00（最終入場21:30）▶ シーフードビュッフェ：11:30〜21:00（ブレイク15:00-17:00）▶ スカイレストラン：11:30〜22:00 ▶ ポンピドゥー展：10:00〜19:00（月曜休館）▶ カフェ63：08:00〜22:00。祝日営業時間は別途お知らせします。',
 'NOTICE', true, CURRENT_TIMESTAMP - INTERVAL '1 days', CURRENT_TIMESTAMP - INTERVAL '1 days'),

('[공지] 주차 안내',
 '[Notice] Parking Information',
 '[通知] 停车信息',
 '[お知らせ] 駐車案内',
 '63빌딩 지하주차장 이용 안내입니다. ▶ 위치: 지하 1~3층 (총 300대 수용) ▶ 입차: 정문 및 후문 진입 가능 ▶ 요금: 첫 30분 무료, 이후 10분당 1,000원 ▶ 시설 이용 시 최대 3시간 무료 ▶ 전기차 충전소 20기 운영 중 ▶ 장애인 주차구역: 1층 입구 근처 10대. 주차 관련 문의: 02-789-5000',
 'Parking information for 63 Building underground parking. ▶ Location: B1-B3 (300 spaces total) ▶ Entrance: Main gate and rear gate ▶ Fees: First 30 min free, then 1,000 KRW per 10 min ▶ Up to 3 hours free with facility use ▶ 20 EV charging stations available ▶ Disabled parking: 10 spaces near 1F entrance. Parking inquiries: 02-789-5000',
 '63大厦地下停车场使用说明。▶ 位置：地下1-3层（共300个车位）▶ 入场：正门和后门均可进入 ▶ 收费：前30分钟免费，之后每10分钟1,000韩元 ▶ 使用设施可享最多3小时免费停车 ▶ 20台电动车充电站运营中 ▶ 残疾人停车位：1楼入口附近10个。停车咨询：02-789-5000',
 '63ビル地下駐車場のご案内。▶ 場所：地下1〜3階（計300台）▶ 入場：正門・裏門から可能 ▶ 料金：最初の30分無料、以降10分1,000ウォン ▶ 施設利用時最大3時間無料 ▶ EVチャージャー20台稼働中 ▶ 障害者駐車場：1階入口付近10台。駐車に関するお問い合わせ：02-789-5000',
 'NOTICE', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('봄맞이 특별 패키지 출시',
 'Spring Special Package Launch',
 '春季特别套餐推出',
 '春の特別パッケージ発売',
 '따뜻한 봄을 맞아 63빌딩 특별 패키지를 출시합니다. [스프링 올인원 패키지] 전망대 + 퐁피두 전시 + 씨푸드 뷔페를 할인된 가격으로 즐기세요. ▶ 성인 1인: 정가 150,000원 → 패키지 99,000원 (34% 할인) ▶ 아동 1인: 정가 90,000원 → 패키지 65,000원 ▶ 가족 패키지(2+2): 320,000원. 예약 기간: 2025년 3월 1일 ~ 5월 31일. 온라인 사전 예약 시 추가 5% 할인.',
 'Celebrate spring with our special 63 Building package. [Spring All-in-One Package] Enjoy the Observatory + Pompidou Exhibition + Seafood Buffet at a discounted price. ▶ Adult: Regular 150,000 KRW → Package 99,000 KRW (34% off) ▶ Child: Regular 90,000 KRW → Package 65,000 KRW ▶ Family (2+2): 320,000 KRW. Booking period: March 1 - May 31, 2025. Additional 5% off with online advance reservation.',
 '迎接温暖春天，推出63大厦特别套餐。【春季全包套餐】以优惠价格享受观景台+蓬皮杜展览+海鲜自助餐。▶ 成人：原价150,000韩元→套餐99,000韩元（优惠34%）▶ 儿童：原价90,000韩元→套餐65,000韩元 ▶ 家庭套餐(2大+2小)：320,000韩元。预订期间：2025年3月1日至5月31日。线上提前预订额外优惠5%。',
 '温かい春を迎え、63ビル特別パッケージを発売。【スプリングオールインワンパッケージ】展望台＋ポンピドゥー展＋シーフードビュッフェをお得な価格でお楽しみください。▶ 大人：定価150,000ウォン→パッケージ99,000ウォン（34%割引）▶ 子ども：定価90,000ウォン→パッケージ65,000ウォン ▶ ファミリー(2+2)：320,000ウォン。予約期間：2025年3月1日〜5月31日。オンライン事前予約でさらに5%割引。',
 'NEWS', true, CURRENT_TIMESTAMP - INTERVAL '2 days', CURRENT_TIMESTAMP - INTERVAL '2 days');

-- ============================================================
-- Floor Maps
-- ============================================================
INSERT INTO floor_map (floor_number, floor_name_ko, floor_name_en, floor_name_zh, floor_name_ja, description_ko, description_en, description_zh, description_ja, display_order, active, created_at, updated_at) VALUES

('B1',     '지하 1층',    'Basement 1',  '地下1层',    '地下1階',
 'F&B 특화존, 씨푸드 뷔페, 푸드코트, 편의점, 지하주차장 연결',
 'F&B zone, Seafood buffet, Food court, Convenience store, Underground parking access',
 'F&B特区、海鲜自助餐、美食广场、便利店、地下停车场连接',
 'F&Bゾーン、シーフードビュッフェ、フードコート、コンビニ、地下駐車場接続',
 1, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('GF',     '지상층',      'Ground Floor','地面层',     'グラウンドフロア',
 '메인 입구, 안내 데스크, 카페 63, 리테일 A·B, 엘리베이터 코어',
 'Main entrance, Information desk, Cafe 63, Retail A·B, Elevator core',
 '主入口、咨询台、63咖啡、A·B零售区、电梯核心',
 'メインエントランス、案内デスク、カフェ63、リテールA·B、エレベーターコア',
 2, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('1F-10F', '1층~10층',    '1F–10F',      '1楼~10楼',   '1F~10F',
 '리테일존, 국내외 브랜드 매장, 갤러리, 편의시설',
 'Retail zone, Domestic & international brands, Gallery, Amenities',
 '零售区、国内外品牌店、画廊、便利设施',
 'リテールゾーン、国内外ブランド店、ギャラリー、アメニティ',
 3, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('2F-3F',  '2층~3층',     '2F–3F',       '2楼~3楼',    '2F~3F',
 '퐁피두 센터 협업 현대미술 전시관 (2025년 상설 운영)',
 'Centre Pompidou collaboration exhibition hall (2025 permanent)',
 '蓬皮杜中心合作当代艺术展馆（2025年常设展）',
 'ポンピドゥーセンター協力現代アート展示館（2025年常設）',
 4, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('11F-56F','11층~56층',   '11F–56F',     '11楼~56楼',  '11F~56F',
 '오피스 & 법인 전용 시설 (일반 방문 불가)',
 'Office & Corporate facilities (Not open to public)',
 '办公室及企业专用设施（不对公众开放）',
 'オフィス＆法人専用施設（一般来場不可）',
 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('57F-59F','57층~59층',   '57F–59F',     '57楼~59楼',  '57F~59F',
 '더 스카이 레스토랑, 바 & 라운지, 프라이빗 다이닝 (한강 파노라마 뷰)',
 'The Sky Restaurant, Bar & Lounge, Private Dining (Han River panorama view)',
 '天空餐厅、酒吧&休息室、私人包厢（汉江全景）',
 'ザ・スカイレストラン、バー＆ラウンジ、プライベートダイニング（漢江パノラマ）',
 6, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('60F',    '60층',        '60F',         '60楼',       '60F',
 '전망대 – 서울 360° 파노라마 뷰, 높이 249m, 야외 전망 데크',
 'Observatory – Seoul 360° Panorama View, 249m altitude, outdoor viewing deck',
 '观景台 – 首尔360度全景，高度249米，室外观景台',
 '展望台 – ソウル360度パノラマビュー、高さ249m、屋外展望デッキ',
 7, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ============================================================
-- Stores
-- ============================================================
INSERT INTO store (name_ko, name_en, name_zh, name_ja, floor, zone, description_ko, description_en, description_zh, description_ja, phone, hours, display_order, active, created_at, updated_at) VALUES

-- B1 F&B
('63 씨푸드뷔페', '63 Seafood Buffet', '63海鲜自助餐', '63シーフードビュッフェ',
 'B1', 'FNB',
 '신선한 해산물과 제철 식재료로 만든 100여 가지 요리를 즐길 수 있는 프리미엄 뷔페. 킹크랩, 랍스터, 광어 회 등 최고급 해산물 제공.',
 'Premium buffet with 100+ dishes using fresh seafood and seasonal ingredients. Features king crab, lobster, and fresh sashimi.',
 '100多道以新鲜海鲜和时令食材制作的菜肴。提供帝王蟹、龙虾、比目鱼刺身等顶级海鲜。',
 '新鮮な海鮮と旬の食材を使った100品以上の料理が楽しめるプレミアムビュッフェ。キングクラブ、ロブスター、ヒラメの刺身など最高級の海鮮を提供。',
 '02-789-5600', '11:30–21:00 (브레이크 15:00–17:00)', 1, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('63 푸드코트', '63 Food Court', '63美食广场', '63フードコート',
 'B1', 'FNB',
 '한식, 중식, 일식, 양식 등 다양한 장르의 음식을 합리적인 가격에 즐길 수 있는 푸드코트.',
 'Food court offering Korean, Chinese, Japanese and Western cuisine at affordable prices.',
 '以实惠价格享用韩式、中式、日式、西式等多种料理的美食广场。',
 '韓食、中華、和食、洋食など多様なジャンルの料理をリーズナブルな価格で楽しめるフードコート。',
 '02-789-5650', '10:00–21:00', 2, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('세븐일레븐 63점', '7-Eleven 63 Branch', '7-Eleven 63店', '7-Eleven 63店',
 'B1', 'AMENITY',
 '24시간 운영 편의점. 간편식, 음료, 생필품 구비.',
 '24-hour convenience store with ready-made food, beverages, and daily essentials.',
 '24小时便利店，提供简餐、饮料和日常用品。',
 '24時間営業のコンビニ。簡単な食事、飲み物、日用品を取り揃え。',
 '02-789-5100', '24시간', 3, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('GF 카페 63', 'Cafe 63', '63咖啡馆', 'カフェ63',
 'GF', 'FNB',
 '63빌딩 대표 카페. 시그니처 에스프레소, 계절 음료, 수제 디저트 제공. 한강 뷰 테라스 좌석 운영.',
 '63 Building signature cafe. Specialty espresso, seasonal drinks, and handcrafted desserts. Han River view terrace seating available.',
 '63大厦特色咖啡馆。提供特制浓缩咖啡、季节饮品和手工甜点。设有汉江景观露台座位。',
 '63ビルのシグネチャーカフェ。スペシャルティエスプレッソ、季節のドリンク、手作りデザートを提供。漢江ビューテラス席あり。',
 '02-789-5900', '08:00–22:00', 4, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 1F-10F Retail
('63 갤러리샵', '63 Gallery Shop', '63画廊商店', '63ギャラリーショップ',
 '1F-10F', 'RETAIL',
 '퐁피두 센터 협업 아트 굿즈 및 국내외 아트 브랜드 상품 판매.',
 'Art goods from Centre Pompidou collaboration and domestic/international art brands.',
 '蓬皮杜中心合作艺术周边及国内外艺术品牌商品销售。',
 'ポンピドゥーセンターコラボグッズと国内外アートブランド商品を販売。',
 '02-789-5800', '10:00–21:00', 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('63 기념품샵', '63 Souvenir Shop', '63纪念品商店', '63お土産ショップ',
 '1F-10F', 'RETAIL',
 '63빌딩 공식 기념품, 서울 특산품, 여행 기념품 판매.',
 'Official 63 Building souvenirs, Seoul specialty products, and travel mementos.',
 '63大厦官方纪念品、首尔特产及旅游纪念品销售。',
 '63ビル公式お土産、ソウル特産品、旅行記念品を販売。',
 '02-789-5810', '10:00–21:00', 6, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('약국', 'Pharmacy', '药店', '薬局',
 'B1', 'AMENITY',
 '의약품, 건강식품, 화장품 판매 약국.',
 'Pharmacy selling medicines, health foods, and cosmetics.',
 '销售药品、保健食品和化妆品的药店。',
 '医薬品、健康食品、化粧品を販売する薬局。',
 '02-789-5200', '10:00–20:00', 7, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 57-59F Restaurants
('더 스카이 레스토랑', 'The Sky Restaurant', '天空餐厅', 'ザ・スカイレストラン',
 '57F-59F', 'FNB',
 '한강과 서울 도심을 바라보며 즐기는 프리미엄 파인다이닝. 제철 한국 재료를 활용한 컨템퍼러리 코스 메뉴 제공. 드레스코드 있음 (캐주얼 복장 입장 불가).',
 'Premium fine dining with panoramic Han River and Seoul city views. Contemporary course menu using seasonal Korean ingredients. Dress code enforced (no casual wear).',
 '俯瞰汉江和首尔市中心的高级精致餐厅。提供融合时令韩国食材的现代套餐。有着装要求（不允许便装入场）。',
 '漢江とソウル市街を望むプレミアムファインダイニング。旬の韓国食材を活用したコンテンポラリーコースメニューを提供。ドレスコードあり（カジュアル不可）。',
 '02-789-5700', '11:30–22:00 (점심 11:30–14:30 / 저녁 18:00–22:00)', 8, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('스카이 바 & 라운지', 'Sky Bar & Lounge', '天空酒吧&休息室', 'スカイバー＆ラウンジ',
 '57F-59F', 'FNB',
 '58층에 위치한 시그니처 칵테일 바. 와인, 위스키, 수제 칵테일과 함께 서울 야경을 즐기세요.',
 'Signature cocktail bar on 58F. Enjoy wine, whisky, and handcrafted cocktails with Seoul night views.',
 '位于58层的特色鸡尾酒吧。品味美酒佳酿，欣赏首尔夜景。',
 '58Fにあるシグネチャーカクテルバー。ワイン、ウイスキー、クラフトカクテルとともにソウルの夜景をお楽しみください。',
 '02-789-5720', '17:00–24:00', 9, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('와인 셀러 57', 'Wine Cellar 57', '葡萄酒窖57', 'ワインセラー57',
 '57F-59F', 'FNB',
 '세계 각국의 프리미엄 와인 500여 종을 보유한 프라이빗 와인 다이닝룸. 소믈리에 상주.',
 'Private wine dining room with 500+ premium wines from around the world. Sommelier on-site.',
 '收藏全球500余种高级葡萄酒的私人酒窖餐厅。常驻侍酒师。',
 '世界各国のプレミアムワイン500種以上を取り揃えたプライベートワインダイニングルーム。ソムリエ常駐。',
 '02-789-5730', '18:00–23:00 (예약 필수)', 10, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 60F Observatory
('63 아트&기프트', '63 Art & Gift', '63艺术礼品店', '63アート&ギフト',
 '60F', 'RETAIL',
 '전망대 60층 내 기념품 및 아트 굿즈 판매점. 서울 야경 사진, 63빌딩 아트 포스터 등 판매.',
 'Souvenir and art goods shop on Observatory 60F. Seoul night view photos, 63 Building art posters, etc.',
 '位于60楼观景台内的纪念品和艺术周边商店。销售首尔夜景照片、63大厦艺术海报等。',
 '展望台60F内のお土産・アートグッズショップ。ソウル夜景写真、63ビルアートポスターなどを販売。',
 '02-789-5850', '10:00–21:30', 11, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 2F-3F Pompidou
('퐁피두 뮤지엄샵', 'Pompidou Museum Shop', '蓬皮杜博物馆商店', 'ポンピドゥーミュージアムショップ',
 '2F-3F', 'CULTURE',
 '퐁피두 센터 공식 뮤지엄샵. 전시 도록, 아트 포스터, 아트 굿즈, 한정판 기념품 판매.',
 'Official Pompidou Centre museum shop. Exhibition catalogues, art posters, art goods, limited edition souvenirs.',
 '蓬皮杜中心官方博物馆商店。销售展览图录、艺术海报、艺术周边及限量版纪念品。',
 'ポンピドゥーセンター公式ミュージアムショップ。展覧会カタログ、アートポスター、アートグッズ、限定記念品を販売。',
 '02-789-5820', '10:00–19:00 (월요일 휴무)', 12, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

