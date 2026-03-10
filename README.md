# 63빌딩 공식 웹사이트

서울 63빌딩 리뉴얼 홍보 웹사이트 - 오프라인 고객 접점 안내 및 브랜드 이미지 전달

## 기술 스택

| 구분 | 기술 |
|------|------|
| Backend | Spring Boot 3.2 + Kotlin + JPA |
| Frontend | React 18 + TypeScript + Vite |
| DB (개발) | H2 (In-Memory) |
| DB (운영) | PostgreSQL |
| 컨테이너 | Docker / Docker Compose |
| 스타일 | Tailwind CSS |
| 다국어 | i18next (한/영/중/일) |

## 프로젝트 구조

```
sample/
├── backend/          # Spring Boot + Kotlin API 서버
│   └── src/main/kotlin/com/building63/
│       ├── config/   # Security, JWT, CORS
│       ├── entity/   # JPA 엔티티
│       ├── repository/
│       ├── service/
│       ├── controller/
│       └── dto/
└── frontend/         # React 프론트엔드
    └── src/
        ├── pages/    # 공개 페이지 + 어드민 페이지
        ├── components/
        ├── api/
        ├── locales/  # 다국어 번역 파일
        └── types/
```

## 페이지 구성

### 사용자 페이지
| 경로 | 내용 |
|------|------|
| `/` | 메인 홈 |
| `/story` | 63빌딩 스토리 (역사/브랜드 철학) |
| `/gf-concept` | GF 디자인 컨셉 소개 |
| `/floor-map` | 전체 층별 맵 안내 |
| `/zone-guide` | 조닝별 가이드 (F&B, 리테일 등) |
| `/observatory` | 전망대 소개 + 티켓 외부링크 |
| `/pompidou` | 퐁피두 소개 + 티켓 외부링크 |
| `/buffet` | 뷔페 소개 + 웨이팅 외부링크 |
| `/restaurant` | 57~59층 레스토랑 + 예약 외부링크 |
| `/news` | 공지사항 및 뉴스 |

### 어드민 페이지
| 경로 | 내용 |
|------|------|
| `/admin/login` | 관리자 로그인 |
| `/admin` | 대시보드 |
| `/admin/news` | 소식(공지/뉴스) 관리 |
| `/admin/floor-map` | 층별 약도 관리 |
| `/admin/stores` | 매장 정보 관리 |
| `/admin/links` | 외부링크 관리 |

## 빠른 시작

### 개발 환경 (로컬)

**백엔드:**
```bash
cd backend
./gradlew bootRun
# → http://localhost:8080
# H2 Console: http://localhost:8080/h2-console
```

**프론트엔드:**
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Docker Compose
```bash
docker-compose up -d
# Frontend: http://localhost:3000
# Backend:  http://localhost:8080
```

## 관리자 계정

| 항목 | 값 |
|------|-----|
| ID | admin |
| PW | admin1234 |

## API 엔드포인트

### Public API (인증 불필요)
```
GET /api/public/news          공개 소식 목록
GET /api/public/news/{id}     소식 상세
GET /api/public/floor-maps    층별 맵 목록
GET /api/public/stores        매장 목록 (?zone=FNB)
GET /api/public/links         외부링크 목록
GET /api/public/links/{type}  특정 외부링크 (OBSERVATORY/POMPIDOU/BUFFET/RESTAURANT)
```

### Auth
```
POST /api/auth/login          로그인 (JWT 발급)
```

### Admin API (JWT 필요)
```
CRUD /api/admin/news
CRUD /api/admin/floor-maps
CRUD /api/admin/stores
CRUD /api/admin/links
```

## 다국어 지원

`frontend/src/locales/` 폴더에서 번역 관리:
- `ko/translation.json` - 한국어
- `en/translation.json` - 영어
- `zh/translation.json` - 중국어
- `ja/translation.json` - 일본어
