/**
 * 리푸드 (ReFood) - Application Logic
 * 대체 식량 활성화, 기아 종식(Zero Hunger) 캠페인 및 마켓 연동 포털
 */

/* ======================================================== */
/* 1. PRODUCT DATA (대체 식량 상품 데이터베이스)             */
/* ======================================================== */
const productsData = [
  {
    id: 1,
    name: "지구식탁 프리미엄 플랜트 큐브 스테이크 200g",
    category: "식물성 대체육",
    price: 8900,
    originalPrice: 10500,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80",
    badge: "물 절약 92%",
    badgeType: "emerald",
    feature: "비건 인증 · 숯불 풍미",
    meatReplaced: 250, // g (소고기 250g 대체)
    waterSaved: 2800,  // L
    co2Saved: 11.2,    // kg CO2
    grainSaved: 1.8,   // kg 사료 곡물 전환
    mealsSaved: 3.5,   // 끼니
    donationAmount: 450, // 원 (결제 금액에 포함되어 자동 기부)
    desc: "미세 대두 단백질로 구현한 리얼한 마블링과 촉촉한 큐브 스테이크 육즙"
  },
  {
    id: 2,
    name: "자연담은 콩단백 숯불향 갈비살 300g",
    category: "식물성 대체육",
    price: 6500,
    originalPrice: 7800,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    badge: "인기 베스트",
    badgeType: "amber",
    feature: "콜레스테롤 0% · 단백질 28g",
    meatReplaced: 300,
    waterSaved: 2200,
    co2Saved: 13.5,
    grainSaved: 2.1,
    mealsSaved: 4.2,
    donationAmount: 350,
    desc: "숯불에 직접 구워낸 듯 양념 갈비의 달콤짭짤한 맛을 그대로 살린 간편 밥도둑"
  },
  {
    id: 3,
    name: "트러플 표고버섯 비건 만두 350g",
    category: "식물성 대체육",
    price: 5900,
    originalPrice: 6500,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
    badge: "맛 보장 99%",
    badgeType: "emerald",
    feature: "트랜스지방 0g · 국산 표고",
    meatReplaced: 200,
    waterSaved: 1500,
    co2Saved: 8.8,
    grainSaved: 1.4,
    mealsSaved: 2.8,
    donationAmount: 300,
    desc: "향긋한 트러플과 쫄깃한 버섯 다짐육이 꽉 찬 프리미엄 교자 만두"
  },
  {
    id: 4,
    name: "베지팜 100% 식물성 크리스피 너겟 400g",
    category: "식물성 대체육",
    price: 7200,
    originalPrice: 8500,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    badge: "바삭치킨맛",
    badgeType: "emerald",
    feature: "트랜스지방 0g · 병아리콩",
    meatReplaced: 350,
    waterSaved: 1600,
    co2Saved: 3.5,
    grainSaved: 1.0,
    mealsSaved: 2.0,
    donationAmount: 350,
    desc: "병아리콩과 대두로 만든 바삭한 튀김옷과 결이 살아있는 골든 치킨 너겟 식감"
  },
  {
    id: 5,
    name: "어반그린 비건 비프 버거 패티 (4장입, 450g)",
    category: "식물성 대체육",
    price: 9900,
    originalPrice: 12000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    badge: "육즙 폭발",
    badgeType: "amber",
    feature: "단백질 22g · 비트 착즙색소",
    meatReplaced: 450,
    waterSaved: 4800,
    co2Saved: 21.0,
    grainSaved: 3.2,
    mealsSaved: 6.4,
    donationAmount: 500,
    desc: "천연 비트와 코코넛 오일로 그릴 위에서 지글지글 흐르는 풍부한 수제 버거 패티"
  },
  {
    id: 6,
    name: "포레스트 버섯 함박스테이크 & 데미글라스 320g",
    category: "식물성 대체육",
    price: 6800,
    originalPrice: 7900,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    badge: "저칼로리",
    badgeType: "emerald",
    feature: "새송이·양송이 45% 함유",
    meatReplaced: 280,
    waterSaved: 2600,
    co2Saved: 12.0,
    grainSaved: 2.0,
    mealsSaved: 4.0,
    donationAmount: 350,
    desc: "풍부한 생버섯의 수분과 특제 비건 와인 데미글라스 소스의 깊은 함박스테이크"
  },
  {
    id: 7,
    name: "캐슈넛 비건 크림 파스타 소스 300g",
    category: "식물성 대체육",
    price: 5500,
    originalPrice: 6200,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80",
    badge: "유당불내증 안심",
    badgeType: "emerald",
    feature: "100% 식물성 생크림",
    meatReplaced: 200,
    waterSaved: 1600,
    co2Saved: 6.0,
    grainSaved: 1.4,
    mealsSaved: 2.8,
    donationAmount: 300,
    desc: "우유나 버터 없이도 진하고 고소한 풍미의 수제 캐슈넛 화이트 크림 파스타 소스"
  },
  {
    id: 8,
    name: "퓨처오가닉 고소애 밀웜 프로틴 파우더 150g",
    category: "미래 단백질(곤충류)",
    price: 12800,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80",
    badge: "단백질 70%",
    badgeType: "purple",
    feature: "BCAA 풍부 · 미숫가루맛",
    meatReplaced: 400,
    waterSaved: 3400,
    co2Saved: 18.0,
    grainSaved: 2.8,
    mealsSaved: 5.6,
    donationAmount: 650,
    desc: "비린맛 제로! 고소한 견과류 풍미로 스무디나 베이킹에 간편 블렌딩하는 프로틴 파우더"
  },
  {
    id: 9,
    name: "크리켓(귀뚜라미) 에어로 그래놀라 바 (5개입)",
    category: "미래 단백질(곤충류)",
    price: 7500,
    originalPrice: 8500,
    image: "https://images.unsplash.com/photo-1622484214539-755734d7d1e8?auto=format&fit=crop&w=600&q=80",
    badge: "미래 슈퍼푸드",
    badgeType: "purple",
    feature: "바삭한 식감 · 오메가3",
    meatReplaced: 200,
    waterSaved: 2100,
    co2Saved: 9.0,
    grainSaved: 1.4,
    mealsSaved: 2.8,
    donationAmount: 400,
    desc: "운동 전후 최고의 고단백 크런치바! 귀뚜라미 분말 15%가 함유된 바삭한 그래놀라 바"
  },
  {
    id: 10,
    name: "엔토모 퓨처 허니버터 고소애 볶음스낵 80g",
    category: "미래 단백질(곤충류)",
    price: 4900,
    originalPrice: 5500,
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=600&q=80",
    badge: "단짠단짠 베스트",
    badgeType: "purple",
    feature: "천연 아카시아꿀 · 고칼슘",
    meatReplaced: 150,
    waterSaved: 1500,
    co2Saved: 6.5,
    grainSaved: 1.1,
    mealsSaved: 2.2,
    donationAmount: 250,
    desc: "바삭바삭한 식감에 달콤 짭조름한 허니버터 시즈닝을 입힌 중독성 영양 고소애 스낵"
  },
  {
    id: 11,
    name: "바이오프로틴 고소애 고단백 쉐이크 보틀 (곡물맛, 6개입)",
    category: "미래 단백질(곤충류)",
    price: 15900,
    originalPrice: 18500,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    badge: "순수단백 30g",
    badgeType: "purple",
    feature: "무설탕 · 12곡 미숫가루",
    meatReplaced: 500,
    waterSaved: 4200,
    co2Saved: 22.5,
    grainSaved: 3.5,
    mealsSaved: 7.0,
    donationAmount: 800,
    desc: "물만 부어 흔들어 마시는 간편 식사대용 고단백 쉐이크 보틀, 필수 아미노산 완벽 보충"
  },
  {
    id: 12,
    name: "블루오션 해조류 기반 플랜트 참치 180g",
    category: "친환경 해조류",
    price: 4200,
    originalPrice: 4800,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    badge: "해양보호 100%",
    badgeType: "sky",
    feature: "미세플라스틱 0% · DHA",
    meatReplaced: 180,
    waterSaved: 1800,
    co2Saved: 5.4,
    grainSaved: 1.2,
    mealsSaved: 2.5,
    donationAmount: 250,
    desc: "미세 조류 오일로 구현한 감칠맛과 담백함, 수은 걱정 없는 식물성 플랜트 참치"
  },
  {
    id: 13,
    name: "제주 청정 스피룰리나 그린 파스타면 250g",
    category: "친환경 해조류",
    price: 4800,
    originalPrice: 5500,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
    badge: "항산화 클린라벨",
    badgeType: "sky",
    feature: "유기농 스피룰리나 10%",
    meatReplaced: 150,
    waterSaved: 1200,
    co2Saved: 4.5,
    grainSaved: 1.0,
    mealsSaved: 2.0,
    donationAmount: 250,
    desc: "초록빛 싱그러운 컬러와 영양이 가득한 이탈리아 전통 압착 스피룰리나 그린 파스타면"
  },
  {
    id: 14,
    name: "씨위드랩 완도산 다시마 칩스 어니언맛 60g",
    category: "친환경 해조류",
    price: 3500,
    originalPrice: 4000,
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f27eb?auto=format&fit=crop&w=600&q=80",
    badge: "식이섬유 듬뿍",
    badgeType: "sky",
    feature: "저온 유탕가공 · 글루텐프리",
    meatReplaced: 100,
    waterSaved: 900,
    co2Saved: 2.8,
    grainSaved: 0.7,
    mealsSaved: 1.4,
    donationAmount: 200,
    desc: "청정 완도 다시마를 얇게 튀겨 바삭한 칩 형태로 만든 해양 탄소 흡수 다시마 칩스"
  },
  {
    id: 15,
    name: "오션바이오 식물성 비건 연어 슬라이스 150g",
    category: "친환경 해조류",
    price: 8900,
    originalPrice: 10500,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    badge: "해양생태계 보호",
    badgeType: "sky",
    feature: "천연 파프리카색소 · 식물성EPA",
    meatReplaced: 200,
    waterSaved: 2000,
    co2Saved: 7.2,
    grainSaved: 1.5,
    mealsSaved: 3.0,
    donationAmount: 450,
    desc: "해조류 추출물과 곤약으로 쫀득한 생연어의 질감과 은은한 훈연향을 완벽 구현한 연어 슬라이스"
  },
  {
    id: 16,
    name: "알게테크 미세조류 클로렐라 고단백 소면 400g",
    category: "친환경 해조류",
    price: 4500,
    originalPrice: 5200,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    badge: "엽록소 충전",
    badgeType: "sky",
    feature: "국내산 클로렐라 5% · 쫄깃면발",
    meatReplaced: 160,
    waterSaved: 1300,
    co2Saved: 4.8,
    grainSaved: 1.1,
    mealsSaved: 2.2,
    donationAmount: 250,
    desc: "맑은 초록빛과 탱글탱글한 면발로 시원한 콩국수나 비빔국수에 제격인 기능성 클로렐라 소면"
  }
];


/* ======================================================== */
/* 1-2. RECIPES DATA (홈쿡 레시피 데이터베이스 & 상세 조리법) */
/* ======================================================== */
const recipesData = [
  {
    id: 1,
    name: "트러플 버섯 대체육 볼로네제 파스타",
    category: "식물성 대체육",
    time: "15분",
    difficulty: "초급 홈쿡 · 원팬",
    servings: "1~2인분",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80",
    desc: "표고버섯과 식물성 소이 다짐육을 황금 비율로 볶아 진한 미트소스의 감칠맛을 살린 고급 파스타",
    ingredients: {
      main: ["플랜트 다짐육(소이민스) 150g", "스파게티 파스타면 120g"],
      sub: ["표고버섯 2개 (슬라이스)", "양파 1/2개 (다짐)", "다진 마늘 1스푼", "방울토마토 4알"],
      sauce: ["토마토 홀 퓨레 200g", "트러플 엑스트라버진 오일 1스푼", "올리브유 2스푼", "소금·후추 약간"]
    },
    steps: [
      { step: 1, title: "파스타면 알덴테 삶기", desc: "냄비에 물 1L와 소금 1티스푼을 넣고 끓으면 스파게티면을 넣어 7분간 삶은 뒤 체에 밭쳐 건집니다 (면수 1국자 남기기)." },
      { step: 2, title: "향미 채소와 버섯 볶기", desc: "달군 팬에 올리브유 2스푼을 두르고 다진 마늘과 양파, 슬라이스한 표고버섯을 중불에서 2분간 향이 올라올 때까지 볶습니다." },
      { step: 3, title: "플랜트 다짐육 볶기", desc: "팬에 해동된 플랜트 다짐육을 넣고 뭉치지 않게 주걱으로 고슬고슬 풀어가며 3분간 노릇하게 볶아 고기 풍미를 냅니다." },
      { step: 4, title: "토마토 소스 졸이기 및 면 버무리기", desc: "토마토 퓨레와 남겨둔 면수 1국자를 붓고 중약불에서 2분간 끓인 뒤, 삶은 면을 넣어 소스가 골고루 배도록 1분간 센 불에 볶아냅니다." },
      { step: 5, title: "트러플 오일로 피니시", desc: "불을 완전히 끄고 접시에 담은 후, 트러플 오일 1스푼과 통후추를 톡톡 갈아 올려 완성합니다." }
    ],
    tip: "트러플 오일은 열에 약하므로 절대 불 위에서 끓이지 말고, 불을 끈 뒤 마지막에 둘러야 진한 트러플 향이 온전히 살아납니다!",
    meatReplaced: 250,
    waterSaved: 2800,
    grainSaved: 1.8,
    co2Saved: 11.2,
    mealsSaved: 3.5,
    donationAmount: 450,
    linkedProductId: 1,
    linkedProductName: "지구식탁 프리미엄 플랜트 큐브 스테이크 200g"
  },
  {
    id: 2,
    name: "겉바속촉 숯불향 콩고기 떡갈비 구이",
    category: "식물성 대체육",
    time: "10분",
    difficulty: "초급 홈쿡 · 프라이팬",
    servings: "2인분",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
    desc: "국내산 대두 단백에 천연 배즙과 특제 간장소스로 숯불에 구워낸 듯 깊고 찰진 식감의 간편 밥도둑",
    ingredients: {
      main: ["콩단백 숯불향 떡갈비 패티 300g (2장)"],
      sub: ["새송이버섯 1개 (편썰기)", "통마늘 5알", "쪽파 2줄기 (송송 썰기)", "참깨 약간"],
      sauce: ["동봉된 특제 비건 데리야키 간장 소스 3스푼", "들기름 1스푼", "식용유 1스푼"]
    },
    steps: [
      { step: 1, title: "팬 예열 및 오일 두르기", desc: "프라이팬을 중불로 예열한 뒤 식용유 1스푼을 고르게 두릅니다." },
      { step: 2, title: "앞뒤로 노릇하게 굽기", desc: "해동된 콩고기 떡갈비 패티와 통마늘, 편 썬 새송이버섯을 올리고, 중약불에서 앞뒤로 각 4분씩 뒤집어가며 노릇하게 굽습니다." },
      { step: 3, title: "특제 소스 입히기", desc: "겉면이 바삭해지면 약불로 줄이고 데리야키 간장 소스를 붓고 숟가락으로 끼얹어가며 1분간 윤기 나게 졸입니다." },
      { step: 4, title: "들기름과 쪽파 플레이팅", desc: "불을 끄고 들기름 1스푼을 두른 뒤 그릇에 담고 송송 썬 쪽파와 통깨를 듬뿍 뿌려 따뜻한 밥과 함께 즐깁니다." }
    ],
    tip: "센 불에 구우면 양념이 탈 수 있으니 중약불에서 은근하게 속까지 익힌 뒤, 마지막 1분에 소스를 둘러 코팅하듯 졸여주는 것이 핵심입니다!",
    meatReplaced: 300,
    waterSaved: 2200,
    grainSaved: 2.1,
    co2Saved: 13.5,
    mealsSaved: 4.2,
    donationAmount: 350,
    linkedProductId: 2,
    linkedProductName: "자연담은 콩단백 숯불향 갈비살 300g"
  },
  {
    id: 3,
    name: "10분 에어프라이어 비건 큐브 찹스테이크",
    category: "식물성 대체육",
    time: "10분",
    difficulty: "초간단 · 에어프라이어",
    servings: "1~2인분",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80",
    desc: "냉장고 속 자투리 채소와 플랜트 큐브를 소스에 버무려 에어프라이어에 8분 돌려 완성하는 육즙 만점 찹스테이크",
    ingredients: {
      main: ["플랜트 큐브 스테이크 200g"],
      sub: ["파프리카 1/2개", "양파 1/2개", "브로콜리 또는 양송이버섯 4알", "통마늘 4개"],
      sauce: ["시판 스테이크 소스 3스푼", "비건 굴소스 1스푼", "올리고당 1스푼", "올리브유 1.5스푼", "후추 톡톡"]
    },
    steps: [
      { step: 1, title: "재료 깍둑썰기", desc: "해동한 플랜트 큐브 스테이크와 양파, 파프리카, 버섯을 비슷한 크기(한 입 크기)로 깍둑썰기합니다." },
      { step: 2, title: "볼에 소스와 버무리기", desc: "볼에 썬 재료를 모두 담고 올리브유 1.5스푼, 스테이크 소스 3스푼, 굴소스 1스푼, 올리고당 1스푼, 후추를 넣고 골고루 버무립니다." },
      { step: 3, title: "에어프라이어 조리", desc: "에어프라이어 바스켓에 종이호일을 깔고 재료가 겹치지 않게 펼쳐 넣은 뒤, 190도에서 8분간 조리합니다 (중간 4분에 한 번 흔들어주기)." },
      { step: 4, title: "완성 및 플레이팅", desc: "조리 완료 후 접시에 담고 파슬리 가루나 통깨를 살짝 뿌려 완성합니다." }
    ],
    tip: "프라이팬을 쓰실 때는 센 불에 올리브유를 두르고 큐브를 3분간 먼저 겉면을 바삭하게 시어링한 뒤 채소와 소스를 넣고 2분간 빠르게 볶아내세요!",
    meatReplaced: 250,
    waterSaved: 2800,
    grainSaved: 1.8,
    co2Saved: 11.2,
    mealsSaved: 3.5,
    donationAmount: 450,
    linkedProductId: 1,
    linkedProductName: "지구식탁 프리미엄 플랜트 큐브 스테이크 200g"
  },
  {
    id: 4,
    name: "12분 달콤양념 비건 크리스피 치킨강정",
    category: "식물성 대체육",
    time: "12분",
    difficulty: "초간단 야식 · 에어프라이어",
    servings: "2인분",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
    desc: "겉바속촉 식물성 치킨 너겟을 바삭하게 구워 매콤달콤 전통 양념치킨 소스에 가볍게 굴려 완성하는 홈 야식",
    ingredients: {
      main: ["식물성 크리스피 너겟 350g (약 12~14개)"],
      sub: ["땅콩 분태 또는 아몬드 슬라이스 1스푼", "통깨 약간"],
      sauce: ["케첩 2.5스푼", "고추장 0.5스푼", "올리고당 또는 물엿 2스푼", "진간장 0.5스푼", "다진 마늘 0.5스푼", "물 2스푼"]
    },
    steps: [
      { step: 1, title: "너겟 바삭 굽기", desc: "냉동 상태의 식물성 너겟을 에어프라이어에 넣고 180도에서 10분간 바삭하게 구워냅니다." },
      { step: 2, title: "특제 양념소스 끓이기", desc: "팬에 케첩 2.5스푼, 고추장 0.5스푼, 올리고당 2스푼, 진간장 0.5스푼, 다진 마늘 0.5스푼, 물 2스푼을 넣고 약불에서 보글보글 거품이 일 때까지 30초간 끓입니다." },
      { step: 3, title: "버무리기", desc: "불을 끄고 바삭하게 갓 구워진 너겟을 팬에 넣고 주걱으로 재빠르게 굴려 소스를 얇고 고르게 코팅합니다." },
      { step: 4, title: "견과류 토핑", desc: "그릇에 소복이 담고 고소한 땅콩 분태와 통깨를 듬뿍 뿌려 따뜻할 때 바로 바삭하게 먹습니다." }
    ],
    tip: "소스를 오래 졸이면 끈적해지므로 거품이 한 번 파르르 일었을 때 불을 끄고 너겟을 버무려야 튀김옷의 바삭함이 오래 유지됩니다!",
    meatReplaced: 350,
    waterSaved: 1600,
    grainSaved: 1.0,
    co2Saved: 3.5,
    mealsSaved: 2.0,
    donationAmount: 350,
    linkedProductId: 4,
    linkedProductName: "베지팜 100% 식물성 크리스피 너겟 400g"
  },
  {
    id: 5,
    name: "불 없이 5분 컷! 고소애 프로틴 에너지볼",
    category: "미래 단백질(곤충류)",
    time: "5분",
    difficulty: "노오븐 노가열 · 다이어트",
    servings: "6~8알 (2인분)",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=700&q=80",
    desc: "불을 전혀 쓰지 않고 으깬 바나나와 오트밀, 고소애 단백 분말을 뭉쳐 완성하는 운동 전후 최고급 영양 간식",
    ingredients: {
      main: ["고소애 밀웜 프로틴 파우더 35g (약 2스쿱)"],
      sub: ["잘 익은 바나나 1개", "롤드 오트밀 60g", "다크 초코칩 또는 건크랜베리 15g"],
      sauce: ["천연 꿀 또는 알룰로스 1스푼", "땅콩버터 또는 아몬드버터 1스푼 (선택)", "시나몬 가루 한 꼬집"]
    },
    steps: [
      { step: 1, title: "바나나 곱게 으깨기", desc: "볼에 껍질을 벗긴 바나나 1개를 넣고 포크 뒷면으로 덩어리가 없도록 부드럽게 으깹니다." },
      { step: 2, title: "영양 가루와 재료 혼합", desc: "으깬 바나나에 고소애 프로틴 파우더 35g, 오트밀 60g, 꿀 1스푼, 땅콩버터 1스푼, 시나몬 가루를 넣고 주걱으로 치대어 단단한 반죽을 만듭니다." },
      { step: 3, title: "초코칩 섞고 빚기", desc: "다크 초코칩을 넣고 가볍게 섞은 뒤, 숟가락으로 한 입 크기씩 떼어내어 손바닥으로 동글동글 경단 모양으로 빚습니다." },
      { step: 4, title: "냉장 굳히기 및 섭취", desc: "밀폐용기에 담아 냉장실에 10분간 두면 오트밀이 수분을 흡수해 쫀득한 식감의 초단백 에너지볼이 완성됩니다." }
    ],
    tip: "단백질이 무려 28g(계란 4개 분량) 함유되어 있어 운동 전후나 바쁜 아침 식사 대용으로 2~3알씩 꺼내 드시면 최고의 에너지를 공급합니다!",
    meatReplaced: 200,
    waterSaved: 1700,
    grainSaved: 1.4,
    co2Saved: 9.0,
    mealsSaved: 2.8,
    donationAmount: 650,
    linkedProductId: 8,
    linkedProductName: "퓨처오가닉 고소애 밀웜 프로틴 파우더 150g"
  },
  {
    id: 6,
    name: "초코칩 듬뿍 고소애 프로틴 쿠키",
    category: "미래 단백질(곤충류)",
    time: "15분",
    difficulty: "에어프라이어 베이킹",
    servings: "6개입",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80",
    desc: "밀가루 없이 볶은 고소애 가루와 오트밀, 두유로 반죽해 에어프라이어에 구워낸 고소하고 달콤한 프로틴 쿠키",
    ingredients: {
      main: ["고소애 밀웜 프로틴 파우더 40g", "오트밀 분말 60g"],
      sub: ["다크 초콜릿칩 20g", "무가당 두유 또는 아몬드밀크 4스푼"],
      sauce: ["알룰로스 또는 메이플시럽 2스푼", "코코넛 오일 또는 식용유 1스푼", "베이킹파우더 0.5티스푼", "바닐라 익스트랙 2방울"]
    },
    steps: [
      { step: 1, title: "가루류 체치기 및 혼합", desc: "볼에 고소애 파우더 40g, 오트밀 가루 60g, 베이킹파우더 0.5티스푼을 넣고 거품기로 골고루 섞어줍니다." },
      { step: 2, title: "액체류 넣고 반죽하기", desc: "두유 4스푼, 메이플시럽 2스푼, 코코넛 오일 1스푼을 붓고 날가루가 보이지 않을 때까지 주걱으로 섞어 되직한 쿠키 반죽을 만듭니다." },
      { step: 3, title: "성형 및 초코칩 토핑", desc: "반죽을 6등분하여 동글납작한 쿠키 모양으로 빚은 뒤, 위에 다크 초코칩을 콕콕 박아줍니다." },
      { step: 4, title: "에어프라이어 굽기", desc: "에어프라이어 170도에서 12분간 구워낸 뒤 꺼내어 식힘망에서 5분간 식히면 겉은 바삭하고 속은 촉촉한 쿠키가 완성됩니다." }
    ],
    tip: "갓 구웠을 때는 부드럽지만 한 김 식히면 수분이 날아가 겉이 바삭해집니다. 고소애 특유의 미숫가루 같은 고소함과 초콜릿의 조화가 일품입니다!",
    meatReplaced: 200,
    waterSaved: 2100,
    grainSaved: 1.4,
    co2Saved: 9.0,
    mealsSaved: 2.8,
    donationAmount: 400,
    linkedProductId: 8,
    linkedProductName: "퓨처오가닉 고소애 밀웜 프로틴 파우더 150g"
  },
  {
    id: 7,
    name: "바다향 가득 해조류 비건 참치 아보카도 포케",
    category: "친환경 해조류",
    time: "5분",
    difficulty: "불 없는 요리 · 초간단",
    servings: "1인분",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    desc: "미세 조류 오일과 콩단백으로 만든 식물성 참치에 신선한 아보카도와 샐러드, 참깨 오리엔탈 드레싱을 버무린 힐링 보울",
    ingredients: {
      main: ["해조류 기반 플랜트 참치 1캔 (180g)"],
      sub: ["현미밥 또는 귀리밥 1공기", "아보카도 1/2개 (깍둑썰기)", "어린잎 샐러드 채소 1줌", "오이 1/3개", "적양파 약간", "조미김가루"],
      sauce: ["양조간장 1.5스푼", "참기름 1스푼", "식초 0.5스푼", "알룰로스 또는 올리고당 0.5스푼", "와사비 약간", "통깨 1티스푼"]
    },
    steps: [
      { step: 1, title: "밥과 야채 세팅", desc: "넓은 볼에 따뜻한 현미밥 1공기를 담고, 씻어 물기를 뺀 어린잎 채소와 깍둑 썬 오이, 얇게 채 썬 적양파를 둘러 담습니다." },
      { step: 2, title: "참치와 아보카도 올리기", desc: "플랜트 참치는 캔 안의 식물성 오일을 가볍게 따라내고 밥 중앙에 소복이 얹은 뒤, 깍둑 썬 아보카도를 곁들입니다." },
      { step: 3, title: "오리엔탈 드레싱 만들기", desc: "간장 1.5스푼, 참기름 1스푼, 식초 0.5스푼, 올리고당 0.5스푼, 와사비 약간을 섞어 드레싱을 만듭니다." },
      { step: 4, title: "소스 붓고 비비기", desc: "볼 위에 드레싱을 골고루 둘러 뿌리고 바삭한 조미김가루와 통깨를 얹어 슥슥 비벼 맛있게 먹습니다." }
    ],
    tip: "미세플라스틱과 중금속(수은) 걱정이 전혀 없는 청정 해조류 플랜트 참치로, 비건 오메가3(DHA)를 든든하게 섭취할 수 있습니다!",
    meatReplaced: 180,
    waterSaved: 1800,
    grainSaved: 1.2,
    co2Saved: 5.4,
    mealsSaved: 2.5,
    donationAmount: 250,
    linkedProductId: 12,
    linkedProductName: "블루오션 해조류 기반 플랜트 참치 180g"
  },
  {
    id: 8,
    name: "5분 완성 고소한 클로렐라 들기름 비빔소면",
    category: "친환경 해조류",
    time: "5분",
    difficulty: "초간단 별미 · 면요리",
    servings: "1~2인분",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
    desc: "끓는 물에 3분간 삶아 찬물에 헹군 뒤 고소한 들기름과 쯔유, 김가루만 둘러 먹는 청량하고 속 편안한 초록 소면",
    ingredients: {
      main: ["클로렐라 고단백 소면 120g (1인분)"],
      sub: ["조미 김가루 듬뿍 (2스푼)", "깻잎 3장 (얇게 채 썰기)", "통깨 1스푼 (손으로 살짝 으깨기)"],
      sauce: ["고소한 시골 들기름 2스푼", "쯔유 또는 맛간장 1.5스푼", "매실청 또는 올리고당 0.5스푼"]
    },
    steps: [
      { step: 1, title: "소면 3분 삶기", desc: "냄비에 물이 팔팔 끓으면 초록빛 클로렐라 소면을 펼쳐 넣고 3분간 삶아줍니다." },
      { step: 2, title: "찬물에 바락바락 헹구기", desc: "삶은 면을 즉시 찬물(얼음물 추천)에 헹구며 전분기를 바락바락 씻어낸 뒤 체에 밭쳐 물기를 꽉 짭니다." },
      { step: 3, title: "들기름 쯔유 양념 버무리기", desc: "볼에 물기 뺀 면을 담고 들기름 2스푼, 쯔유 1.5스푼, 매실청 0.5스푼을 넣고 젓가락으로 살살 비벼 간을 맞춥니다." },
      { step: 4, title: "고명 올려 완성", desc: "그릇에 면을 단정하게 담고 채 썬 깻잎과 김가루, 손으로 으깬 깻가루를 듬뿍 올려 비벼 먹습니다." }
    ],
    tip: "찬물에 면을 비벼 헹굴수록 면발의 탱글탱글한 탄력이 극대화됩니다. 기호에 따라 연겨자나 청양고추 반 개를 송송 썰어 넣으면 매콤한 감칠맛이 폭발합니다!",
    meatReplaced: 160,
    waterSaved: 1300,
    grainSaved: 1.1,
    co2Saved: 4.8,
    mealsSaved: 2.2,
    donationAmount: 250,
    linkedProductId: 16,
    linkedProductName: "알게테크 미세조류 클로렐라 고단백 소면 400g"
  }
];


/* ======================================================== */
/* 2. STATE VARIABLES                                       */
/* ======================================================== */
let currentTab = 'home';
let selectedMeat = 'beef'; // 'beef', 'pork', 'chicken'
let currentMeatAmount = 300; // in grams
let currentCategory = '전체';
let cart = []; // Array of { id, quantity }

/* ======================================================== */
/* 3. TAB NAVIGATION (탭 전환 및 마켓 바로가기)               */
/* ======================================================== */
function switchTab(tabId) {
  currentTab = tabId;

  // Tab views toggle
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.remove('active');
  });
  const activeEl = document.getElementById(`tab-${tabId}`);
  if (activeEl) {
    activeEl.classList.add('active');
  }

  // Navigation button styles update
  const buttons = {
    'home': document.getElementById('nav-btn-home'),
    'recipes': document.getElementById('nav-btn-recipes'),
    'calculator': document.getElementById('nav-btn-calculator'),
    'market': document.getElementById('nav-btn-market'),
  };

  for (const [key, btn] of Object.entries(buttons)) {
    if (!btn) continue;
    if (key === tabId) {
      btn.className = "nav-tab-btn flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold transition-all text-emerald-700 bg-white shadow-sm";
    } else {
      btn.className = "nav-tab-btn flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all text-slate-600 hover:text-emerald-600 hover:bg-white/60";
    }
  }

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Tab specific trigger
  if (tabId === 'recipes') {
    renderRecipes();
  } else if (tabId === 'calculator') {
    updateSliderFill(currentMeatAmount);
    calculateImpact();
  } else if (tabId === 'market') {
    renderProducts();
  }
}

// 레시피 카드에서 마켓의 특정 상품 검색 연동
function goToMarketWithItem(productName) {
  switchTab('market');
  const searchInput = document.getElementById('market-search');
  if (searchInput) {
    searchInput.value = productName.split(' ')[0] || productName;
    filterProducts();
  }
  showToast(`🛒 "${productName}" 재료를 리푸드 마켓에서 찾았습니다!`);
}

// 특정 카테고리로 마켓 이동
function goToMarketWithCategory(categoryName) {
  switchTab('market');
  setCategory(categoryName);
  showToast(`🌿 "${categoryName}" 카테고리로 이동했습니다.`);
}


/* ======================================================== */
/* 3-2. RECIPES RENDERING & DETAIL MODAL (레시피 상세 조회 로직) */
/* ======================================================== */
let currentRecipeCategory = '전체';

function filterRecipes(cat) {
  currentRecipeCategory = cat;
  document.querySelectorAll('.recipe-cat-btn').forEach(btn => {
    const isTarget = (cat === '전체' && btn.innerText.includes('전체')) || (cat !== '전체' && btn.innerText.includes(cat));
    if (isTarget) {
      btn.className = "recipe-cat-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white shadow-sm whitespace-nowrap transition";
    } else {
      btn.className = "recipe-cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 whitespace-nowrap transition";
    }
  });
  renderRecipes();
}

function renderRecipes() {
  const grid = document.getElementById('recipes-grid');
  const countEl = document.getElementById('recipes-count');
  if (!grid) return;

  const filtered = recipesData.filter(item => {
    if (currentRecipeCategory === '전체') return true;
    if (currentRecipeCategory === '10분 컷') return parseInt(item.time, 10) <= 10;
    return item.category.includes(currentRecipeCategory);
  });

  if (countEl) {
    countEl.innerText = `${filtered.length}개`;
  }

  grid.innerHTML = filtered.map(item => `
    <div onclick="openRecipeModal(${item.id})" class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
      <div>
        <!-- Image Frame -->
        <div class="relative h-48 overflow-hidden bg-slate-100">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          
          <span class="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            ${item.category}
          </span>
          <span class="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-red-700 text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 border border-red-200 shadow-xs">
            🥩 육류 ${item.meatReplaced}g 대체
          </span>

          <div class="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
            <span>⏱️ ${item.time} 완성</span>
            <span>·</span>
            <span>${item.difficulty.split(' · ')[0]}</span>
          </div>

          <!-- Click Hint Overlay -->
          <div class="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span class="bg-white/95 text-emerald-800 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>레시피 상세 조회</span>
            </span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              ${item.servings}
            </span>
            <span class="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              ❤️ ${item.donationAmount}원 자동 기부
            </span>
          </div>

          <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition leading-snug">
            ${item.name}
          </h3>
          <p class="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            ${item.desc}
          </p>

          <!-- Resource Saving Report Box -->
          <div class="mt-3.5 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 space-y-1.5 text-[11px]">
            <div class="text-[10px] font-extrabold text-emerald-800 flex items-center justify-between">
              <span>🌱 한 끼 자원 절약 리포트</span>
              <span class="text-amber-800">🌾 결식아동 ${item.mealsSaved}끼 영양식</span>
            </div>
            <div class="grid grid-cols-2 gap-1 text-slate-700 font-medium text-[10px]">
              <div class="flex items-center gap-1">💧 <strong class="text-emerald-800 font-bold">${item.waterSaved.toLocaleString()}L</strong> 물 절약</div>
              <div class="flex items-center gap-1">🌾 <strong class="text-amber-800 font-bold">${item.grainSaved}kg</strong> 사료곡물 전환</div>
              <div class="flex items-center gap-1">☁️ <strong class="text-slate-800 font-bold">${item.co2Saved}kg</strong> CO₂ 저감</div>
              <div class="flex items-center gap-1">🥩 육류 <strong class="text-red-700 font-bold">${item.meatReplaced}g</strong> 대체</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Action Buttons -->
      <div class="p-5 pt-0 grid grid-cols-2 gap-2" onclick="event.stopPropagation()">
        <button onclick="openRecipeModal(${item.id})" class="py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-xs flex items-center justify-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          <span>레시피 상세 보기</span>
        </button>
        <button onclick="goToMarketWithItem('${item.linkedProductName}')" class="py-2.5 px-2 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold rounded-xl text-xs transition border border-slate-200 flex items-center justify-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <span>재료 마켓 연동</span>
        </button>
      </div>
    </div>
  `).join('');
}

function openRecipeModal(recipeId) {
  const recipe = recipesData.find(r => r.id === recipeId);
  if (!recipe) return;

  // Header Elements
  const imgEl = document.getElementById('modal-recipe-img');
  const catEl = document.getElementById('modal-recipe-cat');
  const timeEl = document.getElementById('modal-recipe-time');
  const diffEl = document.getElementById('modal-recipe-difficulty');
  const servingsEl = document.getElementById('modal-recipe-servings');
  const titleEl = document.getElementById('modal-recipe-title');
  const descEl = document.getElementById('modal-recipe-desc');

  if (imgEl) {
    imgEl.src = recipe.image;
    imgEl.alt = recipe.name;
  }
  if (catEl) {
    catEl.innerText = recipe.category;
    catEl.className = recipe.category === '식물성 대체육' ? 'px-2.5 py-1 rounded-full text-xs font-bold text-white bg-emerald-600 shadow-sm'
      : recipe.category.includes('곤충') ? 'px-2.5 py-1 rounded-full text-xs font-bold text-white bg-purple-600 shadow-sm'
      : 'px-2.5 py-1 rounded-full text-xs font-bold text-white bg-sky-600 shadow-sm';
  }
  if (timeEl) timeEl.innerHTML = `⏱️ ${recipe.time} 완성`;
  if (diffEl) diffEl.innerText = `난이도: ${recipe.difficulty}`;
  if (servingsEl) servingsEl.innerText = `분량: ${recipe.servings}`;
  if (titleEl) titleEl.innerText = recipe.name;
  if (descEl) descEl.innerText = recipe.desc;

  // 1. Ingredients Checklist
  const ingContainer = document.getElementById('modal-recipe-ingredients');
  if (ingContainer) {
    ingContainer.innerHTML = `
      <div class="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-200/80">
        <div class="text-xs font-black text-emerald-900 mb-2 flex items-center justify-between">
          <span class="flex items-center gap-1">🥩 핵심 대체 식량 (주재료)</span>
          <span class="text-[10px] bg-emerald-200/70 text-emerald-800 px-1.5 py-0.5 rounded font-extrabold">마켓 구매 가능</span>
        </div>
        <ul class="text-xs text-slate-700 space-y-1 font-medium">
          ${recipe.ingredients.main.map(m => `<li class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span><strong class="text-slate-900">${m}</strong></li>`).join('')}
        </ul>
      </div>

      <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
        <div class="text-xs font-black text-slate-900 mb-2 flex items-center gap-1">
          <span>🥕 부재료 및 채소</span>
        </div>
        <ul class="text-xs text-slate-600 space-y-1 font-medium">
          ${recipe.ingredients.sub.map(s => `<li class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span><span>${s}</span></li>`).join('')}
        </ul>
      </div>

      <div class="sm:col-span-2 bg-amber-50/50 p-3.5 rounded-2xl border border-amber-200/70">
        <div class="text-xs font-black text-amber-950 mb-1.5 flex items-center gap-1">
          <span>🧂 특제 양념 및 소스 계량 (스푼 단위)</span>
        </div>
        <div class="flex flex-wrap gap-2 text-xs text-amber-900 font-medium">
          ${recipe.ingredients.sauce.map(sc => `<span class="bg-white/90 px-2.5 py-1 rounded-lg border border-amber-200/60 shadow-2xs">${sc}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // 2. Step-by-Step Cooking Guide
  const stepsContainer = document.getElementById('modal-recipe-steps');
  if (stepsContainer) {
    stepsContainer.innerHTML = recipe.steps.map(s => `
      <div class="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-all">
        <span class="w-7 h-7 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs mt-0.5">
          ${s.step}
        </span>
        <div class="space-y-0.5 flex-1 min-w-0">
          <h5 class="text-xs sm:text-sm font-bold text-slate-900">${s.title}</h5>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">${s.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Chef Tip
  const tipEl = document.getElementById('modal-recipe-tip');
  if (tipEl) tipEl.innerText = recipe.tip;

  // 3. Impact Grid
  const impactContainer = document.getElementById('modal-recipe-impact');
  if (impactContainer) {
    impactContainer.innerHTML = `
      <div class="p-2.5 bg-red-50 rounded-xl border border-red-100">
        <div class="text-[10px] text-red-700 font-bold">대체한 축산육</div>
        <div class="text-sm sm:text-base font-black text-red-950 mt-0.5">${recipe.meatReplaced}g</div>
      </div>
      <div class="p-2.5 bg-sky-50 rounded-xl border border-sky-100">
        <div class="text-[10px] text-sky-700 font-bold">아낀 물 (L)</div>
        <div class="text-sm sm:text-base font-black text-sky-950 mt-0.5">${recipe.waterSaved.toLocaleString()}L</div>
      </div>
      <div class="p-2.5 bg-amber-50 rounded-xl border border-amber-100">
        <div class="text-[10px] text-amber-700 font-bold">사료곡물 전환</div>
        <div class="text-sm sm:text-base font-black text-amber-950 mt-0.5">${recipe.grainSaved}kg</div>
      </div>
      <div class="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
        <div class="text-[10px] text-emerald-700 font-bold">결식아동 영양식</div>
        <div class="text-sm sm:text-base font-black text-emerald-950 mt-0.5">${recipe.mealsSaved}끼</div>
      </div>
    `;
  }

  // Footer Actions
  const mainProdEl = document.getElementById('modal-recipe-main-prod');
  if (mainProdEl) mainProdEl.innerText = recipe.linkedProductName.split(' ')[0] + ' ' + (recipe.linkedProductName.split(' ')[1] || '');

  const btnAddCart = document.getElementById('modal-btn-add-cart');
  if (btnAddCart) {
    btnAddCart.onclick = () => {
      addToCartFromRecipe(recipe.linkedProductId, recipe.name);
    };
  }

  const btnGoMarket = document.getElementById('modal-btn-go-market');
  if (btnGoMarket) {
    btnGoMarket.onclick = () => {
      toggleRecipeModal(false);
      goToMarketWithItem(recipe.linkedProductName);
    };
  }

  toggleRecipeModal(true);
}

function toggleRecipeModal(show) {
  const modal = document.getElementById('recipe-modal');
  if (!modal) return;
  if (show) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  } else {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function addToCartFromRecipe(productId, recipeName) {
  addToCart(productId);
  showToast(`🥣 [${recipeName}] 요리에 필요한 주재료가 장바구니에 담겼습니다!`);
}


/* ======================================================== */
/* 4. ECO & HUNGER CALCULATOR (환경 & 기아 지속 가능성 계산기) */
/* ======================================================== */
// 대체 식품 1kg당 자원 절약 및 식량 전환 계수 (FAO 및 WFP 기아 통계 기준)
const impactFactors = {
  beef: {
    waterPerKg: 15400 - 1500, // 소고기 ~15,400L vs 식물성 ~1,500L => 13,900L 절약
    co2PerKg: 60 - 3.5,       // 소고기 ~60kg vs 식물성 ~3.5kg => 56.5kg 저감
    grainPerKg: 7.0,          // 소고기 1kg 생산에 필요한 사료 곡물 7.0kg (식용 전환 가능)
    mealsPerKg: 14.0,         // 절약 곡물 7kg로 지원 가능한 영양 죽/식사 끼니 수 (1끼 500g 기준)
    treesPerKg: 8.6           // 30년생 소나무 연간 흡수량 기준 환산
  },
  pork: {
    waterPerKg: 6000 - 1500,  // 4,500L 절약
    co2PerKg: 12 - 3.5,       // 8.5kg 저감
    grainPerKg: 3.5,          // 사료 곡물 3.5kg 절약
    mealsPerKg: 7.0,          // 약 7끼 식사 공급
    treesPerKg: 2.1
  },
  chicken: {
    waterPerKg: 4300 - 1500,  // 2,800L 절약
    co2PerKg: 8.5 - 3.5,      // 5.0kg 저감
    grainPerKg: 2.2,          // 사료 곡물 2.2kg 절약
    mealsPerKg: 4.4,          // 약 4.4끼 식사 공급
    treesPerKg: 1.4
  }
};

function selectMeatType(type) {
  selectedMeat = type;
  ['beef', 'pork', 'chicken'].forEach(t => {
    const btn = document.getElementById(`meat-btn-${t}`);
    if (t === type) {
      btn.className = "meat-btn p-3.5 rounded-xl border-2 border-emerald-600 bg-emerald-50/80 text-emerald-900 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition shadow-xs";
    } else {
      btn.className = "meat-btn p-3.5 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition";
    }
  });
  calculateImpact();
}

function updateSliderFill(val) {
  const slider = document.getElementById('meat-slider');
  if (!slider) return;
  const min = parseInt(slider.min, 10) || 0;
  const max = parseInt(slider.max, 10) || 2000;
  const current = Math.min(Math.max(parseInt(val, 10) || 0, min), max);
  const percent = ((current - min) / (max - min)) * 100;
  slider.style.background = `linear-gradient(to right, #059669 0%, #059669 ${percent}%, #e2e8f0 ${percent}%, #e2e8f0 100%)`;
}

function syncFromSlider(val) {
  currentMeatAmount = parseInt(val, 10) || 0;
  document.getElementById('meat-input').value = currentMeatAmount;
  updateSliderFill(currentMeatAmount);
  calculateImpact();
}

function syncFromInput(val) {
  let num = parseInt(val, 10);
  if (isNaN(num)) num = 0;
  if (num < 0) num = 0;
  if (num > 3000) num = 3000;
  currentMeatAmount = num;
  const slider = document.getElementById('meat-slider');
  if (slider) slider.value = Math.min(num, 2000);
  updateSliderFill(num);
  calculateImpact();
}

function setPreset(grams) {
  currentMeatAmount = grams;
  const slider = document.getElementById('meat-slider');
  if (slider) slider.value = Math.min(grams, 2000);
  document.getElementById('meat-input').value = grams;
  updateSliderFill(grams);
  calculateImpact();
}

function calculateImpact() {
  const factors = impactFactors[selectedMeat] || impactFactors.beef;
  const ratio = currentMeatAmount / 1000.0;

  const savedWater = Math.round(factors.waterPerKg * ratio);
  const savedCo2 = (factors.co2PerKg * ratio).toFixed(1);
  const savedGrain = (factors.grainPerKg * ratio).toFixed(1);
  const savedMeals = (factors.mealsPerKg * ratio).toFixed(1);
  const savedTrees = (factors.treesPerKg * ratio).toFixed(1);

  // 일상 속 직관적 비유
  const showers = Math.round(savedWater / 100); // 1회 샤워 약 100L
  const carKm = Math.round(parseFloat(savedCo2) * 5); // 1kg CO2 당 약 5km 승용차 주행

  // DOM 갱신
  const resWater = document.getElementById('res-water');
  const resShower = document.getElementById('res-shower');
  const resCo2 = document.getElementById('res-co2');
  const resKm = document.getElementById('res-km');
  const resGrain = document.getElementById('res-grain');
  const resMeals = document.getElementById('res-meals');
  const resTrees = document.getElementById('res-trees');

  if (resWater) resWater.innerText = savedWater.toLocaleString();
  if (resShower) resShower.innerText = `${showers}회`;
  if (resCo2) resCo2.innerText = savedCo2;
  if (resKm) resKm.innerText = `${carKm}km`;
  if (resGrain) resGrain.innerText = savedGrain;
  if (resMeals) resMeals.innerText = savedMeals;
  if (resTrees) resTrees.innerText = savedTrees;

  // 에코 & 기아 종식(Zero Hunger) 레벨 갱신
  const badgeIcon = document.getElementById('badge-icon');
  const badgeLevel = document.getElementById('badge-level');
  const badgeTitle = document.getElementById('badge-title');

  if (badgeIcon && badgeLevel && badgeTitle) {
    const co2Num = parseFloat(savedCo2);
    if (co2Num < 10) {
      badgeIcon.innerText = "🌾";
      badgeLevel.innerText = "제로헝거 레벨 1: 식량 나눔 새싹 실천가";
      badgeTitle.innerText = "사료로 사라지던 곡물을 보전해 결식 이웃을 구하고 있습니다!";
    } else if (co2Num < 30) {
      badgeIcon.innerText = "🥣";
      badgeLevel.innerText = "제로헝거 레벨 2: 온기 식탁 히어로";
      badgeTitle.innerText = "당신의 한 끼가 강과 숲을 지키고 영양 식사 5끼 이상을 채웁니다!";
    } else if (co2Num < 60) {
      badgeIcon.innerText = "🌿";
      badgeLevel.innerText = "제로헝거 레벨 3: 식량 안보 수호 리더";
      badgeTitle.innerText = "가축 사료 수십 킬로그램을 굶주린 아이들의 식량으로 전환했습니다!";
    } else {
      badgeIcon.innerText = "🌍";
      badgeLevel.innerText = "제로헝거 레벨 4: 글로벌 식량정의 챔피언";
      badgeTitle.innerText = "기후 위기와 지구촌 기아를 동시에 종식시키는 최고의 선한 영향력!";
    }
  }
}

function copyImpactResult() {
  const water = document.getElementById('res-water')?.innerText || '0';
  const co2 = document.getElementById('res-co2')?.innerText || '0';
  const grain = document.getElementById('res-grain')?.innerText || '0';
  const meals = document.getElementById('res-meals')?.innerText || '0';
  const trees = document.getElementById('res-trees')?.innerText || '0';

  const text = `[ReFood 리푸드 기아 & 환경 영향 계산 결과]
이번 주 대체 식량 전환으로:
🌾 사료 곡물 ${grain}kg 절약 (인간 식량 전환)!
🥣 결식 아동 영양식 약 ${meals}끼 분량 자원 확보!
💧 깨끗한 물 ${water}L 절약!
☁️ 이산화탄소 ${co2}kg 감축 (소나무 ${trees}그루 효과)!

함께 지구를 살리고 기아를 끝내는 맛있는 대안 식탁: https://refood.org`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 기아 구호 및 환경 영향 결과가 클립보드에 복사되었습니다!");
  }).catch(() => {
    showToast("결과를 복사했습니다.");
  });
}

/* ======================================================== */
/* 5. MARKET & PRODUCTS (오픈 마켓, 대체육량 & 자동 기부)     */
/* ======================================================== */
function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-btn').forEach(btn => {
    const isTarget = (cat === '전체' && btn.innerText.includes('전체')) || (cat !== '전체' && btn.innerText.includes(cat));
    if (isTarget) {
      btn.className = "category-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white shadow-sm whitespace-nowrap transition";
    } else {
      btn.className = "category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 whitespace-nowrap transition";
    }
  });
  filterProducts();
}

function resetFilters() {
  currentCategory = '전체';
  const searchInput = document.getElementById('market-search');
  if (searchInput) searchInput.value = '';
  setCategory('전체');
}

function filterProducts() {
  const query = (document.getElementById('market-search')?.value || '').trim().toLowerCase();
  
  const filtered = productsData.filter(item => {
    const matchesCategory = (currentCategory === '전체' || item.category === currentCategory);
    const matchesQuery = !query || 
      item.name.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) || 
      item.feature.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const countEl = document.getElementById('market-product-count');
  if (countEl) {
    countEl.innerText = `${filtered.length}개`;
  }

  renderFilteredProducts(filtered);
}

function renderProducts() {
  filterProducts();
}

function getBadgeClass(type) {
  switch(type) {
    case 'emerald':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'amber':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'purple':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'sky':
      return 'bg-sky-100 text-sky-800 border-sky-200';
    default:
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
  }
}

function renderFilteredProducts(list) {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  grid.innerHTML = list.map(item => `
    <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <!-- Image Frame -->
        <div class="relative h-48 overflow-hidden bg-slate-100">
          <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='https://placehold.co/600x400/059669/ffffff?text=${encodeURIComponent(item.name.substring(0, 10))}'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          
          <!-- Category / Impact Badges -->
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-extrabold border shadow-xs ${getBadgeClass(item.badgeType)}">
            ${item.badge}
          </span>
          <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-red-50 text-red-700 border border-red-200 shadow-xs flex items-center gap-1">
            <span>🥩 육류 ${item.meatReplaced}g 대체</span>
          </span>

          <!-- Product Name Badge overlay on Image -->
          <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
            <span class="bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg truncate shadow-md border border-white/10 max-w-[70%]">
              🏷️ ${item.name}
            </span>
            <span class="bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-1 rounded-lg font-medium whitespace-nowrap shadow-md">
              💧 물 ${item.waterSaved.toLocaleString()}L
            </span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-4">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[11px] text-emerald-700 font-semibold">${item.category}</span>
            <span class="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              ❤️ ${item.donationAmount.toLocaleString()}원 자동 기부 (포함)
            </span>
          </div>

          <h3 class="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-emerald-600 transition">
            ${item.name}
          </h3>
          <p class="text-[12px] text-slate-500 mt-1 line-clamp-1">${item.desc}</p>
          
          <!-- Hunger & Meat Replacement Info Box -->
          <div class="mt-2.5 p-2 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-center justify-between text-[11px]">
            <span class="text-amber-900 font-bold flex items-center gap-1">
              <span>🥣 결식아동 기부:</span>
              <strong class="text-amber-700 font-extrabold">${item.donationAmount.toLocaleString()}원</strong>
            </span>
            <span class="text-emerald-800 font-bold bg-emerald-100/80 px-2 py-0.5 rounded text-[10px]">
              육류 ${item.meatReplaced}g 대체
            </span>
          </div>

          <!-- Price (추가비용 없는 실제 구매 가격) -->
          <div class="mt-3 flex items-baseline justify-between">
            <div class="flex items-baseline gap-2">
              <span class="text-base sm:text-lg font-black text-slate-900">${item.price.toLocaleString()}원</span>
              <span class="text-xs text-slate-400 line-through">${item.originalPrice.toLocaleString()}원</span>
            </div>
            <span class="text-[11px] text-emerald-700 font-semibold">기부금 포함가</span>
          </div>
        </div>
      </div>

      <!-- Card Bottom Actions -->
      <div class="p-4 pt-0 grid grid-cols-2 gap-2">
        <button onclick="addToCart(${item.id})" class="w-full py-2 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1 border border-slate-200">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <span>담기</span>
        </button>
        <button onclick="buyNow(${item.id})" class="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow-xs">
          <span>바로 구매</span>
        </button>
      </div>
    </div>
  `).join('');
}

/* ======================================================== */
/* 6. CART & CHECKOUT (구매 직전 모든 수치 확인 및 결제)       */
/* ======================================================== */
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  updateCartBadge();
  showToast(`🛒 "${product.name.substring(0, 14)}..." 담김 (육류 ${product.meatReplaced}g 대체 · ${product.donationAmount}원 자동 기부 포함)`);
}

function buyNow(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  
  // 이미 장바구니에 없으면 추가
  const existing = cart.find(c => c.id === productId);
  if (!existing) {
    cart.push({ id: productId, quantity: 1 });
  }
  updateCartBadge();
  toggleCartModal(true);
}

function updateCartBadge() {
  const totalCount = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.innerText = totalCount;
    if (totalCount > 0) {
      badge.classList.add('scale-110');
      setTimeout(() => badge.classList.remove('scale-110'), 150);
    }
  }
}

function toggleCartModal(show) {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  if (show) {
    renderCartItems();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalPriceEl = document.getElementById('cart-total-price');
  const totalDonationEl = document.getElementById('cart-total-donation');
  const totalMealsEl = document.getElementById('cart-total-meals');
  
  // 요청하신 핵심 지표 DOM 요소 (구매 직전 확인)
  const totalMeatEl = document.getElementById('cart-total-meat');
  const totalMeatSubEl = document.getElementById('cart-total-meat-sub');
  const totalWaterEl = document.getElementById('cart-total-water');
  const totalShowerEl = document.getElementById('cart-total-shower');
  const totalGrainEl = document.getElementById('cart-total-grain');
  const totalCo2El = document.getElementById('cart-total-co2');
  const totalKmEl = document.getElementById('cart-total-km');
  const reportContainerEl = document.getElementById('cart-impact-report');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <div class="text-4xl mb-2">🛒</div>
        <p class="text-sm font-semibold text-slate-600">장바구니가 비어 있습니다.</p>
        <p class="text-xs text-slate-400 mt-1">맛있는 대체 식량을 담고 절약되는 자원과 기여도를 확인해 보세요!</p>
      </div>
    `;
    if (totalPriceEl) totalPriceEl.innerText = "0원";
    if (totalDonationEl) totalDonationEl.innerText = "0원 기부금 포함";
    if (totalMealsEl) totalMealsEl.innerText = "결식아동 0.0끼 지원";
    if (totalMeatEl) totalMeatEl.innerText = "0 g";
    if (totalMeatSubEl) totalMeatSubEl.innerText = "소고기 0인분";
    if (totalWaterEl) totalWaterEl.innerText = "0 L";
    if (totalShowerEl) totalShowerEl.innerText = "샤워 0회분";
    if (totalGrainEl) totalGrainEl.innerText = "0.0 kg";
    if (totalCo2El) totalCo2El.innerText = "0.0 kg";
    if (totalKmEl) totalKmEl.innerText = "차량 0km 상쇄";
    if (reportContainerEl) reportContainerEl.classList.add('opacity-50');
    return;
  }

  if (reportContainerEl) reportContainerEl.classList.remove('opacity-50');

  let total = 0;
  let totalWater = 0;
  let totalMeat = 0;
  let totalCo2 = 0;
  let totalGrain = 0;
  let totalMeals = 0;
  let totalDonation = 0;

  container.innerHTML = cart.map(item => {
    const prod = productsData.find(p => p.id === item.id);
    if (!prod) return '';
    const subtotal = prod.price * item.quantity;
    const subWater = (prod.waterSaved || 2000) * item.quantity;
    const subMeat = (prod.meatReplaced || 200) * item.quantity;
    const subCo2 = (prod.co2Saved || 10.0) * item.quantity;
    const subGrain = (prod.grainSaved || 1.5) * item.quantity;
    const subMeals = (prod.mealsSaved || 3.0) * item.quantity;
    const subDonation = (prod.donationAmount || 300) * item.quantity;

    total += subtotal;
    totalWater += subWater;
    totalMeat += subMeat;
    totalCo2 += subCo2;
    totalGrain += subGrain;
    totalMeals += subMeals;
    totalDonation += subDonation;

    return `
      <div class="flex items-center gap-3 py-3">
        <img src="${prod.image}" alt="${prod.name}" class="w-14 h-14 rounded-xl object-cover border border-slate-200">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-slate-900 truncate">${prod.name}</h4>
          <div class="text-xs text-slate-500 font-medium">${prod.price.toLocaleString()}원</div>
          <div class="flex flex-wrap items-center gap-1.5 mt-1 text-[10px]">
            <span class="text-red-700 font-semibold bg-red-50 px-1.5 py-0.5 rounded border border-red-100">🥩 육류 ${subMeat}g 대체</span>
            <span class="text-sky-700 font-semibold bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">💧 물 ${subWater.toLocaleString()}L 절약</span>
            <span class="text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">❤️ 기부 ${subDonation.toLocaleString()}원 포함</span>
          </div>
        </div>
        <div class="flex items-center gap-1.5">
          <button onclick="changeQuantity(${prod.id}, -1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">-</button>
          <span class="text-xs font-bold w-5 text-center">${item.quantity}</span>
          <button onclick="changeQuantity(${prod.id}, 1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">+</button>
        </div>
        <div class="text-xs font-extrabold text-slate-900 w-16 text-right">
          ${subtotal.toLocaleString()}원
        </div>
      </div>
    `;
  }).join('');

  // 환산 수치 계산
  const showers = Math.round(totalWater / 100);
  const carKm = Math.round(totalCo2 * 5);
  const meatPortions = (totalMeat / 200).toFixed(1); // 1인분 약 200g

  // 1. 총 결제 금액
  if (totalPriceEl) totalPriceEl.innerText = `${total.toLocaleString()}원`;

  // 2. 구매 직전 확인: 대체한 육류량 (g / kg / 인분)
  if (totalMeatEl) {
    totalMeatEl.innerText = totalMeat >= 1000 
      ? `${(totalMeat / 1000).toFixed(2)} kg` 
      : `${totalMeat.toLocaleString()} g`;
  }
  if (totalMeatSubEl) totalMeatSubEl.innerText = `소고기 약 ${meatPortions}인분 대체`;

  // 3. 구매 직전 확인: 수자원 보전 (L / 샤워 횟수)
  if (totalWaterEl) totalWaterEl.innerText = `${totalWater.toLocaleString()} L`;
  if (totalShowerEl) totalShowerEl.innerText = `샤워 약 ${showers}회분`;

  // 4. 구매 직전 확인: 사료곡물 식량전환 (kg)
  if (totalGrainEl) totalGrainEl.innerText = `${totalGrain.toFixed(1)} kg`;

  // 5. 구매 직전 확인: 줄인 온실가스 (kg / 차량 주행 상쇄)
  if (totalCo2El) totalCo2El.innerText = `${totalCo2.toFixed(1)} kg`;
  if (totalKmEl) totalKmEl.innerText = `차량 ${carKm}km 상쇄`;

  // 6. 구매 직전 확인: 기아 구호 식사 및 포함 기부금
  if (totalDonationEl) totalDonationEl.innerText = `${totalDonation.toLocaleString()}원 기부금 포함`;
  if (totalMealsEl) totalMealsEl.innerText = `결식아동 ${totalMeals.toFixed(1)}끼 영양식 지원`;
}

function changeQuantity(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx !== -1) {
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
  }
  updateCartBadge();
  renderCartItems();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm('장바구니를 모두 비우시겠습니까?')) {
    cart = [];
    updateCartBadge();
    renderCartItems();
    showToast('장바구니가 비워졌습니다.');
  }
}

function checkoutCart() {
  if (cart.length === 0) {
    alert('장바구니에 담긴 상품이 없습니다.');
    return;
  }
  const totalAmount = document.getElementById('cart-total-price')?.innerText || '0원';
  const totalMeat = document.getElementById('cart-total-meat')?.innerText || '0 g';
  const totalMeatSub = document.getElementById('cart-total-meat-sub')?.innerText || '';
  const totalWater = document.getElementById('cart-total-water')?.innerText || '0 L';
  const totalShower = document.getElementById('cart-total-shower')?.innerText || '';
  const totalGrain = document.getElementById('cart-total-grain')?.innerText || '0 kg';
  const totalCo2 = document.getElementById('cart-total-co2')?.innerText || '0 kg';
  const totalKm = document.getElementById('cart-total-km')?.innerText || '';
  const totalDonation = document.getElementById('cart-total-donation')?.innerText || '0원';
  const totalMeals = document.getElementById('cart-total-meals')?.innerText || '';

  alert(`🎉 [ReFood 리푸드 주문 및 자원 절약 확정 리포트]

총 결제 금액: ${totalAmount} (기부금 자동 포함)

📊 [이번 구매로 창출된 환경 & 기아 구호 기여도]
──────────────────────────────────────
🥩 대체한 축산 육류: ${totalMeat} (${totalMeatSub})
💧 아껴낸 수자원: ${totalWater} (${totalShower})
🌾 사람의 식량으로 전환된 사료곡물: ${totalGrain}
☁️ 줄여낸 온실가스(CO2): ${totalCo2} (${totalKm})
🥣 지원된 결식아동 영양식: ${totalMeals} (${totalDonation})
──────────────────────────────────────

고객님께서는 일반 상품 가격 그대로 결제하셨으며,
구매액의 일부가 ReFood를 통해 기아 구호 식사로 자동 전달됩니다.
지구를 살리고 굶주린 이웃을 구하는 가치 있는 식탁에 함께해 주셔서 감사합니다! 🌾❤️`);

  cart = [];
  updateCartBadge();
  toggleCartModal(false);
  showToast('주문 완료! 결제 금액에서 기아 구호 기부금이 자동으로 전달되었습니다.');
}

/* ======================================================== */
/* 7. UTILITIES & TOAST (토스트 알림 및 키보드 이벤트)         */
/* ======================================================== */
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.innerText = msg;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3000);
}

// ESC 키로 모달 닫기
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    toggleRecipeModal(false);
    toggleCartModal(false);
  }
});

// 모달 바깥 클릭 시 닫기

// 레시피 모달 바깥 클릭 시 닫기
document.getElementById('recipe-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'recipe-modal') {
    toggleRecipeModal(false);
  }
});

document.getElementById('cart-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'cart-modal') {
    toggleCartModal(false);
  }
});

// 초기화 실행
window.addEventListener('DOMContentLoaded', () => {
  updateSliderFill(currentMeatAmount);
  renderRecipes();
  calculateImpact();
  renderProducts();
});
