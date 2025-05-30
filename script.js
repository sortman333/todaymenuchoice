alert('script.js loaded!');
// 메뉴 데이터 (20개씩, 예시)
const menuData = {
    breakfast: [
        {
            name: "샌드위치",
            calorie: 350,
            price: 4500,
            time: "10분",
            description: "신선한 야채와 계란, 치즈가 듬뿍 들어간 영양만점 샌드위치",
            recipe: "1. 식빵에 버터를 바르고, 계란, 치즈, 야채를 올려주세요.\n2. 다른 식빵으로 덮고 반으로 잘라주세요.",
            image: "🥪"
        },
        {
            name: "토스트",
            calorie: 320,
            price: 4000,
            time: "8분",
            description: "달콤한 잼과 버터가 어우러진 따뜻한 토스트",
            recipe: "1. 식빵을 토스터에 구워주세요.\n2. 버터와 잼을 발라 맛있게 드세요.",
            image: "🍞"
        },
        {
            name: "시리얼",
            calorie: 280,
            price: 3000,
            time: "5분",
            description: "우유와 함께 먹는 바삭바삭 시리얼",
            recipe: "1. 그릇에 시리얼을 담고 우유를 부어주세요.",
            image: "🥣"
        },
        {
            name: "계란말이",
            calorie: 250,
            price: 3500,
            time: "12분",
            description: "부드러운 계란말이와 김치",
            recipe: "1. 계란을 풀고 소금, 후추를 넣어주세요.\n2. 팬에 부어 돌돌 말아주세요.",
            image: "🍳"
        },
        {
            name: "샐러드",
            calorie: 200,
            price: 5000,
            time: "7분",
            description: "상큼한 과일과 야채가 듬뿍!",
            recipe: "1. 야채와 과일을 한입 크기로 썰어주세요.\n2. 드레싱을 뿌려 섞어주세요.",
            image: "🥗"
        },
        { name: "오트밀", calorie: 270, price: 3500, time: "6분", description: "따뜻하고 든든한 오트밀 한 그릇", recipe: "1. 오트밀과 우유를 끓여주세요.\n2. 꿀과 과일을 올려주세요.", image: "🥣" },
        { name: "바나나 팬케이크", calorie: 330, price: 5000, time: "15분", description: "달콤한 바나나와 폭신한 팬케이크", recipe: "1. 팬케이크 반죽에 바나나를 넣고 구워주세요.", image: "🥞" },
        { name: "요거트볼", calorie: 210, price: 4000, time: "5분", description: "과일과 그래놀라가 어우러진 요거트볼", recipe: "1. 요거트에 과일과 그래놀라를 올려주세요.", image: "🍧" },
        { name: "크로와상", calorie: 340, price: 3500, time: "7분", description: "겹겹이 부드러운 크로와상", recipe: "1. 오븐에 살짝 데워서 드세요.", image: "🥐" },
        { name: "치즈 오믈렛", calorie: 290, price: 4500, time: "10분", description: "치즈가 쭉 늘어나는 오믈렛", recipe: "1. 계란을 풀고 치즈를 넣어 오믈렛을 만드세요.", image: "🍳" },
        { name: "감자샐러드", calorie: 260, price: 4000, time: "12분", description: "포슬포슬 감자와 마요네즈의 만남", recipe: "1. 감자를 삶아 으깨고 마요네즈와 섞으세요.", image: "🥔" },
        { name: "프렌치토스트", calorie: 350, price: 4500, time: "10분", description: "달콤한 시럽이 뿌려진 프렌치토스트", recipe: "1. 식빵을 계란물에 적셔 구워주세요.\n2. 시럽을 뿌려주세요.", image: "🍞" },
        { name: "에그마요 샌드위치", calorie: 370, price: 4800, time: "9분", description: "고소한 에그마요가 가득!", recipe: "1. 삶은 계란과 마요네즈를 섞어 식빵에 올리세요.", image: "🥪" },
        { name: "딸기잼 토스트", calorie: 320, price: 4000, time: "8분", description: "상큼한 딸기잼이 듬뿍!", recipe: "1. 식빵에 딸기잼을 듬뿍 발라주세요.", image: "🍓" },
        { name: "고구마 구이", calorie: 280, price: 3500, time: "20분", description: "달콤한 고구마 구이", recipe: "1. 고구마를 오븐에 구워주세요.", image: "🍠" },
        { name: "우유식빵", calorie: 300, price: 3500, time: "7분", description: "부드러운 우유식빵 한 조각", recipe: "1. 식빵을 우유와 함께 드세요.", image: "🍞" },
        { name: "치아바타 샌드위치", calorie: 360, price: 5000, time: "12분", description: "쫄깃한 치아바타와 신선한 채소", recipe: "1. 치아바타에 채소와 햄을 넣어 샌드위치를 만드세요.", image: "🥪" },
        { name: "베이컨 에그머핀", calorie: 390, price: 5500, time: "10분", description: "베이컨과 계란의 완벽한 조화", recipe: "1. 머핀에 베이컨과 계란을 올려주세요.", image: "🥯" },
        { name: "과일샐러드", calorie: 220, price: 4500, time: "6분", description: "상큼한 과일이 듬뿍!", recipe: "1. 여러 가지 과일을 깍둑썰기 해 섞으세요.", image: "🍎" },
        { name: "옥수수스프", calorie: 250, price: 4000, time: "8분", description: "달콤한 옥수수스프 한 그릇", recipe: "1. 옥수수와 우유를 끓여 믹서에 갈아주세요.", image: "🌽" },
        {
            name: "공기",
            calorie: 0,
            price: 0,
            time: "0분",
            description: "숨을 깊게 들이마시고 돈을 아끼며 살을 빼보세요",
            recipe: "숨을 깊게 들이마시고 돈을 아끼며 살을 빼보세요",
            image: "💨"
        }
    ],
    lunch: [
        { name: "비빔밥", calorie: 650, price: 8000, time: "15분", description: "다양한 나물과 고소한 참기름이 어우러진 건강식", recipe: "1. 밥 위에 나물, 고기, 계란을 올리고 고추장과 참기름을 넣어 비벼주세요.", image: "🍚" },
        { name: "파스타", calorie: 750, price: 12000, time: "20분", description: "알덴테 파스타와 풍부한 소스", recipe: "1. 파스타 면을 삶고 소스와 함께 볶아주세요.", image: "🍝" },
        { name: "샐러드", calorie: 450, price: 9000, time: "10분", description: "단백질이 풍부한 닭가슴살 샐러드", recipe: "1. 닭가슴살과 야채를 한입 크기로 썰어 섞으세요.", image: "🥗" },
        { name: "햄버거", calorie: 850, price: 7000, time: "8분", description: "육즙 가득한 패티와 신선한 야채", recipe: "1. 번에 패티, 치즈, 야채를 올려주세요.", image: "🍔" },
        { name: "샌드위치", calorie: 550, price: 6000, time: "5분", description: "다양한 재료가 들어간 든든한 샌드위치", recipe: "1. 식빵에 햄, 치즈, 야채를 넣어 샌드위치를 만드세요.", image: "🥪" },
        { name: "김치찌개", calorie: 600, price: 8000, time: "18분", description: "얼큰한 김치찌개와 밥 한 공기", recipe: "1. 김치와 돼지고기를 볶고 물을 부어 끓이세요.", image: "🍲" },
        { name: "돈까스", calorie: 900, price: 9000, time: "15분", description: "바삭한 돈까스와 새콤한 소스", recipe: "1. 돈까스를 튀기고 소스를 곁들여 드세요.", image: "🥩" },
        { name: "쌀국수", calorie: 550, price: 10000, time: "12분", description: "향긋한 쌀국수와 고수", recipe: "1. 쌀국수를 삶고 육수와 고명을 올리세요.", image: "🍜" },
        { name: "카레라이스", calorie: 700, price: 8500, time: "13분", description: "진한 카레와 밥의 조화", recipe: "1. 카레를 끓여 밥 위에 부어주세요.", image: "🍛" },
        { name: "치킨마요덮밥", calorie: 800, price: 8500, time: "10분", description: "치킨과 마요네즈의 환상 조합", recipe: "1. 밥 위에 치킨과 마요네즈를 올려주세요.", image: "🍗" },
        { name: "불고기", calorie: 650, price: 11000, time: "14분", description: "달콤짭짤한 불고기와 밥", recipe: "1. 소고기를 양념에 재워 볶아주세요.", image: "🥩" },
        { name: "떡볶이", calorie: 700, price: 7000, time: "12분", description: "매콤달콤한 떡볶이", recipe: "1. 떡과 어묵, 양념을 넣고 끓이세요.", image: "🍢" },
        { name: "김밥", calorie: 500, price: 5000, time: "10분", description: "한입에 쏙 김밥", recipe: "1. 김 위에 밥과 재료를 올려 말아주세요.", image: "🍙" },
        { name: "라면", calorie: 550, price: 4000, time: "7분", description: "국물 진한 라면 한 그릇", recipe: "1. 라면을 끓여 계란과 파를 올려주세요.", image: "🍜" },
        { name: "오므라이스", calorie: 650, price: 9000, time: "13분", description: "계란이 부드러운 오므라이스", recipe: "1. 볶음밥을 계란으로 감싸주세요.", image: "🍳" },
        { name: "순두부찌개", calorie: 500, price: 9000, time: "15분", description: "부드러운 순두부와 얼큰한 국물", recipe: "1. 순두부와 해산물을 넣고 끓이세요.", image: "🍲" },
        { name: "제육볶음", calorie: 800, price: 9500, time: "14분", description: "매콤한 제육볶음과 밥", recipe: "1. 돼지고기를 양념에 재워 볶아주세요.", image: "🥓" },
        { name: "샤브샤브", calorie: 800, price: 12000, time: "20분", description: "신선한 야채와 고기가 어우러진 샤브샤브", recipe: "1. 고기와 야채를 육수에 살짝 익혀 드세요.", image: "🍲" },
        { name: "볶음밥", calorie: 600, price: 7000, time: "10분", description: "고슬고슬 볶음밥", recipe: "1. 밥과 야채, 고기를 함께 볶아주세요.", image: "🍚" },
        { name: "우동", calorie: 550, price: 8000, time: "11분", description: "쫄깃한 면발의 우동", recipe: "1. 우동면을 삶고 국물과 함께 드세요.", image: "🍜" },
        {
            name: "공기",
            calorie: 0,
            price: 0,
            time: "0분",
            description: "숨을 깊게 들이마시고 돈을 아끼며 살을 빼보세요",
            recipe: "숨을 깊게 들이마시고 돈을 아끼며 살을 빼보세요",
            image: "💨"
        }
    ],
    dinner: [
        { name: "스테이크", calorie: 850, price: 25000, time: "25분", description: "부드러운 육즙이 가득한 스테이크", recipe: "1. 소고기를 소금, 후추로 간하고 구워주세요.\n2. 소스를 곁들여 드세요.", image: "🥩" },
        { name: "삼겹살", calorie: 950, price: 18000, time: "30분", description: "고소한 삼겹살 구이", recipe: "1. 삼겹살을 노릇하게 구워 쌈과 함께 드세요.", image: "🥓" },
        { name: "치킨", calorie: 1200, price: 18000, time: "20분", description: "바삭한 치킨과 콜라", recipe: "1. 치킨을 튀겨 콜라와 함께 드세요.", image: "🍗" },
        { name: "피자", calorie: 1100, price: 20000, time: "15분", description: "치즈가 듬뿍 들어간 피자", recipe: "1. 도우에 소스와 치즈, 토핑을 올려 구워주세요.", image: "🍕" },
        { name: "샤브샤브", calorie: 800, price: 22000, time: "40분", description: "신선한 야채와 고기가 어우러진 샤브샤브", recipe: "1. 고기와 야채를 육수에 살짝 익혀 드세요.", image: "🍲" },
        { name: "불고기", calorie: 700, price: 15000, time: "18분", description: "달콤짭짤한 불고기와 밥", recipe: "1. 소고기를 양념에 재워 볶아주세요.", image: "🥩" },
        { name: "된장찌개", calorie: 400, price: 9000, time: "15분", description: "구수한 된장찌개와 밥", recipe: "1. 된장과 야채, 두부를 넣고 끓이세요.", image: "🍲" },
        { name: "회덮밥", calorie: 600, price: 13000, time: "12분", description: "신선한 회와 야채가 어우러진 덮밥", recipe: "1. 밥 위에 회와 야채를 올리고 초고추장을 뿌려주세요.", image: "🍣" },
        { name: "닭갈비", calorie: 900, price: 14000, time: "20분", description: "매콤한 닭갈비와 고구마", recipe: "1. 닭고기와 야채를 양념에 볶아주세요.", image: "🍗" },
        { name: "곱창전골", calorie: 1100, price: 18000, time: "25분", description: "얼큰한 곱창전골", recipe: "1. 곱창과 야채를 전골냄비에 끓이세요.", image: "🍲" },
        { name: "갈비찜", calorie: 1200, price: 22000, time: "30분", description: "부드러운 갈비찜과 당근, 감자", recipe: "1. 갈비를 양념에 재워 푹 끓이세요.", image: "🍖" },
        { name: "오징어볶음", calorie: 600, price: 12000, time: "13분", description: "매콤한 오징어볶음과 밥", recipe: "1. 오징어와 야채를 양념에 볶아주세요.", image: "🦑" },
        { name: "감자탕", calorie: 900, price: 15000, time: "25분", description: "진한 국물의 감자탕", recipe: "1. 돼지뼈와 감자를 푹 끓이세요.", image: "🍲" },
        { name: "참치김치찌개", calorie: 700, price: 10000, time: "15분", description: "참치와 김치의 환상 조합", recipe: "1. 김치와 참치를 넣고 끓이세요.", image: "🍲" },
        { name: "해물파전", calorie: 800, price: 12000, time: "18분", description: "쫄깃한 해물파전과 막걸리", recipe: "1. 해물과 파를 반죽에 넣어 부쳐주세요.", image: "🥞" },
        { name: "잡채", calorie: 700, price: 13000, time: "20분", description: "탱글탱글 당면과 고기, 야채", recipe: "1. 당면을 삶고 고기, 야채와 함께 볶으세요.", image: "🍝" },
        { name: "부대찌개", calorie: 1100, price: 14000, time: "20분", description: "햄과 소시지가 듬뿍!", recipe: "1. 햄, 소시지, 야채를 넣고 끓이세요.", image: "🍲" },
        { name: "쭈꾸미볶음", calorie: 650, price: 13000, time: "14분", description: "매콤한 쭈꾸미볶음과 밥", recipe: "1. 쭈꾸미와 야채를 양념에 볶으세요.", image: "🦑" },
        { name: "닭볶음탕", calorie: 950, price: 16000, time: "25분", description: "얼큰한 닭볶음탕", recipe: "1. 닭고기와 감자, 당근을 양념에 넣고 끓이세요.", image: "🍗" },
        { name: "연어스테이크", calorie: 700, price: 20000, time: "15분", description: "고소한 연어스테이크와 샐러드", recipe: "1. 연어를 소금, 후추로 간해 구워주세요.", image: "🐟" },
        {
            name: "공기",
            calorie: 0,
            price: 0,
            time: "0분",
            description: "숨을 깊게 들이마시고 돈을 아끼며 살을 빼보세요",
            recipe: "숨을 깊게 들이마시고 돈을 아끼며 살을 빼보세요",
            image: "💨"
        }
    ]
};

// 메뉴 목록을 저장할 객체 (시간대별로 구분)
let menus = {
    breakfast: [],
    lunch: [],
    dinner: []
};

// 현재 선택된 시간대
let currentMealTime = '';
let currentMenuIndex = null;
let rerollCount = 0;
const MAX_REROLL = 3;

// 정렬 상태 저장
let sortState = { type: null, order: 'asc' };

// --- 설정 팝업 및 언어 전환 ---
function openSettings() {
    document.getElementById('settingsModal').style.display = 'flex';
}
function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

// 언어 상태 저장
let currentLang = localStorage.getItem('lang') || 'ko';

function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    // 한글/영어 텍스트 매핑
    window.textMap = {
        ko: {
            settings: '설정',
            dark: '다크모드',
            lang: 'English',
            close: '&times;',
            introTitle: '당신의 식사를 책임집니다',
            introDesc: '오늘의 메뉴를 귀엽게 추천해드릴게요!',
            start: '시작하기',
            mealQ: '언제 식사하실 예정인가요?',
            breakfast: '아침',
            lunch: '점심',
            dinner: '저녁',
            favList: '⭐ 즐겨찾기 전체 리스트',
            menuRec: '메뉴 추천',
            otherRec: '다른 추천 메뉴',
            dislike: '이 음식이 싫어요! 다른 음식은 어떤가요?',
            favorite: '즐겨찾기',
            share: '공유',
            rerollBtn: '다른 메뉴 추천하기 ({n}회 남음) 🔄',
            noRerollBtn: '더 이상 랜덤 추천이 없어요! 전체 메뉴 보기',
            home: '홈으로',
        },
        en: {
            settings: 'Settings',
            dark: 'Dark Mode',
            lang: '한국어',
            close: '&times;',
            introTitle: 'We take care of your meal',
            introDesc: 'We will recommend today\'s menu cutely!',
            start: 'Start',
            mealQ: 'When will you eat?',
            breakfast: 'Breakfast',
            lunch: 'Lunch',
            dinner: 'Dinner',
            favList: '⭐ All Favorites',
            menuRec: 'Menu Recommendation',
            otherRec: 'Other Recommended Menus',
            dislike: "Don't like this? Show me another!",
            favorite: 'Favorite',
            share: 'Share',
            rerollBtn: 'Show me another ({n} left) 🔄',
            noRerollBtn: 'No more random picks! Show all menus',
            home: 'Home',
        }
    };
    const textMap = window.textMap;
    const t = textMap[currentLang];
    // 팝업
    document.getElementById('settingsTitle').textContent = t.settings;
    // 이모지 제거: 다크모드 버튼 텍스트를 항상 이모지 없이 세팅
    const modalBtn = document.getElementById('modalDarkModeBtn');
    if (modalBtn) {
        modalBtn.textContent = t.dark;
    }
    document.getElementById('langToggleBtn').textContent = t.lang;
    // 인트로
    const introScreen = document.getElementById('introScreen');
    if (introScreen) {
        introScreen.querySelector('h1').textContent = t.introTitle;
        // 안내 문구도 영어로 변경
        const introDescDivs = introScreen.querySelectorAll('div');
        introDescDivs.forEach(div => {
            if (div.textContent.includes('오늘의 메뉴를 귀엽게 추천해드릴게요!') || div.textContent.includes('We will recommend')) {
                div.textContent = t.introDesc;
            }
        });
        introScreen.querySelector('.today-btn') && (introScreen.querySelector('.today-btn').textContent = t.start);
        introScreen.querySelector('button[onclick="startApp()"]') && (introScreen.querySelector('button[onclick="startApp()"]').textContent = t.start);
    }
    // 식사 시간 선택
    const mealSel = document.getElementById('mealTimeSelection');
    if (mealSel) {
        mealSel.querySelector('h1').textContent = t.mealQ;
        const btns = mealSel.querySelectorAll('.meal-button');
        if (btns.length === 3) {
            btns[0].textContent = t.breakfast;
            btns[1].textContent = t.lunch;
            btns[2].textContent = t.dinner;
        }
    }
    // 즐겨찾기 화면
    const favScreen = document.getElementById('favoritesScreen');
    if (favScreen) {
        const h2 = favScreen.querySelector('h2');
        if (h2) h2.textContent = t.favList;
    }
    // 메뉴 추천 화면
    const menuRec = document.getElementById('menuRecommend');
    if (menuRec) {
        const h2 = menuRec.querySelector('#mealTimeTitle');
        if (h2) h2.textContent = t.menuRec;
        const btn = menuRec.querySelector('.other-menu-btn');
        if (btn) btn.textContent = t.dislike;
    }
    // 다른 메뉴 화면
    const otherMenus = document.getElementById('otherMenus');
    if (otherMenus) {
        const h2 = otherMenus.querySelector('h2');
        if (h2) h2.textContent = t.otherRec;
    }
    // 상단 타이틀(점심 메뉴 추천 등)
    const mealTitles = {
        breakfast: { ko: '아침 메뉴 추천', en: 'Breakfast Menu Recommendation' },
        lunch: { ko: '점심 메뉴 추천', en: 'Lunch Menu Recommendation' },
        dinner: { ko: '저녁 메뉴 추천', en: 'Dinner Menu Recommendation' }
    };
    const mealTimeTitle = document.getElementById('mealTimeTitle');
    if (mealTimeTitle && currentMealTime) {
        mealTimeTitle.textContent = mealTitles[currentMealTime][currentLang];
    }
}

// 다크모드 버튼은 팝업에서만 보이도록
window.onload = function() {
    let savedMenus = localStorage.getItem('menus');
    let needInit = false;
    try {
        const parsed = JSON.parse(savedMenus);
        if (!parsed || !parsed.breakfast || !parsed.lunch || !parsed.dinner ||
            parsed.breakfast.length < 100 || parsed.lunch.length < 100 || parsed.dinner.length < 100) {
            needInit = true;
        }
    } catch { needInit = true; }
    if (!savedMenus || needInit) {
        localStorage.setItem('menus', JSON.stringify(menuData));
    }
    // 인트로만 active, 나머지 비활성화
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('introScreen').classList.add('active');
    restoreDarkMode();
    applyLanguage();
    // 다크모드 버튼 숨김
    document.getElementById('darkModeBtn').style.display = 'none';
};

// 식사 시간대 선택 함수
function selectMealTime(mealTime, isToday=false) {
    currentMealTime = mealTime;
    rerollCount = 0;
    
    // 화면 전환
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('menuRecommend').classList.add('active');
    
    // 타이틀 설정 (다국어)
    const mealTitles = {
        breakfast: { ko: '아침 메뉴 추천', en: 'Breakfast Menu Recommendation' },
        lunch: { ko: '점심 메뉴 추천', en: 'Lunch Menu Recommendation' },
        dinner: { ko: '저녁 메뉴 추천', en: 'Dinner Menu Recommendation' }
    };
    const lang = currentLang;
    document.getElementById('mealTimeTitle').textContent = isToday
        ? (lang === 'en' ? "Today's Recommendation" : '오늘의 추천')
        : mealTitles[mealTime][lang];
    
    // 로딩 화면 표시
    const card = document.getElementById('recommendCard');
    card.innerHTML = `
        <div class="loading-container">
            <div class="loading-text">두구두구...</div>
            <div class="loading-dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    `;
    // 두구두구(로딩) 화면이 뜬 직후 자연스럽게 스크롤
    setTimeout(() => {
        const sectionElem = document.getElementById('menuRecommend');
        if (sectionElem) {
            sectionElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);

    // 2초 후에 메뉴 표시
    setTimeout(() => {
        try {
            const menus = menuData[mealTime];
            if (!menus || menus.length === 0) {
                showToast('메뉴를 찾을 수 없어요!');
                return;
            }
            currentMenuIndex = pickRandomIndex(menus);
            if (currentMenuIndex === null) {
                showToast('메뉴를 선택할 수 없어요!');
                return;
            }
            renderRecommendCard(menus[currentMenuIndex]);
        } catch (error) {
            console.error('메뉴 표시 중 오류 발생:', error);
            showToast('메뉴를 불러오는 중 오류가 발생했어요!');
        }
    }, 2000);
}

// 이전 화면으로 돌아가기
function goBack() {
    const currentScreen = document.querySelector('.screen.active');
    if (currentScreen.id === 'menuRecommend') {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('mealTimeSelection').classList.add('active');
    } else if (currentScreen.id === 'otherMenus') {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('menuRecommend').classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 맨 위로 이동
}

// 홈으로 가기
function goHome() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('mealTimeSelection').classList.add('active');
}

// 메뉴 선택 함수
function selectMenu() {
    const menus = JSON.parse(localStorage.getItem('menus'))[currentMealTime];
    
    if (menus.length === 0) {
        alert('메뉴를 찾을 수 없습니다!');
        return;
    }
    
    const result = document.getElementById('result');
    const resultCalorie = document.getElementById('resultCalorie');
    const resultPrice = document.getElementById('resultPrice');
    const resultTime = document.getElementById('resultTime');
    const resultDescription = document.getElementById('resultDescription');
    
    const randomIndex = Math.floor(Math.random() * menus.length);
    const selectedMenu = menus[randomIndex];
    
    result.innerHTML = `
        <div class="result-emoji">${selectedMenu.image}</div>
        <div class="result-name">${selectedMenu.name}</div>
    `;
    resultCalorie.textContent = `${selectedMenu.calorie}kcal`;
    resultPrice.textContent = `${selectedMenu.price.toLocaleString()}원`;
    resultTime.textContent = selectedMenu.time;
    resultDescription.textContent = selectedMenu.description;
    
    // 애니메이션 효과
    result.style.animation = 'none';
    result.offsetHeight; // 리플로우 강제
    result.style.animation = 'fadeIn 0.5s';
}

// 메뉴 목록 저장 함수
function saveMenus() {
    localStorage.setItem('menus', JSON.stringify(menus));
}

// --- Utility ---
function pickRandomIndex(arr, excludeIdx = null) {
    let idx;
    do {
        idx = Math.floor(Math.random() * arr.length);
    } while (arr.length > 1 && idx === excludeIdx);
    return idx;
}

// --- 즐겨찾기 ---
function isFavorite(menu) {
    const favs = JSON.parse(localStorage.getItem('favoriteMenus') || '[]');
    return favs.some(f => f.name === menu.name && f.meal === currentMealTime);
}

function toggleFavorite(menu) {
    let favs = JSON.parse(localStorage.getItem('favoriteMenus') || '[]');
    const meal = currentMealTime;
    const idx = favs.findIndex(f => f.name === menu.name && f.meal === meal);
    if (idx >= 0) {
        favs.splice(idx, 1);
        showToast('즐겨찾기에서 제거했어요!');
    } else {
        favs.unshift({ ...menu, meal });
        showToast('즐겨찾기에 추가했어요!');
    }
    localStorage.setItem('favoriteMenus', JSON.stringify(favs));
    renderRecommendCard(menu); // UI 갱신
}

// --- 즐겨찾기 홈/전체 다국어 지원 ---
function renderFavoritesOnHome() {
    const favs = JSON.parse(localStorage.getItem('favoriteMenus') || '[]');
    if (favs.length === 0) return '';
    const t = window.textMap ? window.textMap[currentLang] : { favList: '⭐ 즐겨찾기 메뉴' };
    return `<div class="fav-title">${t.favList || '⭐ 즐겨찾기 메뉴'}</div><div class="fav-list">` +
        favs.slice(0, 5).map(item => `
            <div class="fav-card">
                <span class="menu-emoji">${item.image}</span>
                <span class="menu-name">${getMenuName(item)}</span>
                <span class="menu-meal">(${currentLang === 'en' ? (item.meal === 'breakfast' ? 'Breakfast' : item.meal === 'lunch' ? 'Lunch' : 'Dinner') : (item.meal === 'breakfast' ? '아침' : item.meal === 'lunch' ? '점심' : '저녁')})</span>
            </div>
        `).join('') + '</div>';
}

// --- Home: 최근 추천/오늘의 추천/즐겨찾기 ---
function renderHome() {
    rerollCount = 0;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('mealTimeSelection').classList.add('active');
    // 즐겨찾기 표시
    const favHtml = renderFavoritesOnHome();
    // 최근 추천 표시
    const history = JSON.parse(localStorage.getItem('recentMenus') || '[]');
    let historyHtml = '';
    if (history.length > 0) {
        historyHtml = `<div class="recent-title">${currentLang === 'en' ? 'Recent Picks' : '최근 추천'}</div><div class="recent-list">` +
            history.map(item => `
                <div class="recent-card">
                    <span class="menu-emoji">${item.image}</span>
                    <span class="menu-name">${getMenuName(item)}</span>
                    <span class="menu-meal">(${currentLang === 'en' ? (item.meal === 'breakfast' ? 'Breakfast' : item.meal === 'lunch' ? 'Lunch' : 'Dinner') : item.meal})</span>
                </div>
            `).join('') + '</div>';
    }
    // 오늘의 추천
    const todayBtn = `<button class="today-btn" onclick="todayRecommend()">${currentLang === 'en' ? 'See Today\'s Menu 🍀' : '오늘의 추천 메뉴 보기 🍀'}</button>`;
    // 렌더링
    let extra = `<div class="home-extra">${todayBtn}${favHtml}${historyHtml}</div>`;
    // 기존 home-extra 있으면 제거
    const old = document.querySelector('.home-extra');
    if (old) old.remove();
    document.getElementById('mealTimeSelection').insertAdjacentHTML('beforeend', extra);
}

function todayRecommend() {
    // 아침/점심/저녁 중 랜덤, 그 중 랜덤 메뉴
    const meals = ['breakfast', 'lunch', 'dinner'];
    const meal = meals[Math.floor(Math.random() * meals.length)];
    selectMealTime(meal, true);
}

// TheMealDB에서 영어 레시피 가져오기
async function fetchRecipeFromTheMealDB(menuName) {
    const nameMap = {
        '치킨텐더': 'Chicken Tender',
        '샌드위치': 'Sandwich',
        '오므라이스': 'Omelette Rice',
        '토스트': 'Toast',
        '파스타': 'Pasta',
        '피자': 'Pizza',
        '스테이크': 'Steak',
        '샐러드': 'Salad',
        '치킨': 'Chicken',
        '햄버거': 'Hamburger',
        '라면': 'Ramen',
        '볶음밥': 'Fried Rice',
        '오믈렛': 'Omelette',
        '감자튀김': 'French Fries',
        '치즈버거': 'Cheeseburger',
        // 필요한 메뉴 추가
    };
    const query = nameMap[menuName] || menuName;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.meals && data.meals.length > 0) {
            return data.meals[0].strInstructions;
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
}

// Papago 번역 API 예시 (실제 서비스에서는 서버 프록시 필요, 여기선 예시만)
async function translateToKorean(text) {
    // 실제 서비스에서는 서버에서 번역 API 호출 필요
    // 여기서는 fetch로는 불가하므로, 예시로만 작성
    // return await fetch('/translate', { method: 'POST', body: JSON.stringify({text}) }) ...
    return text; // 실제 배포시 서버 프록시 필요
}

// --- 추천 카드 설명 다국어 지원 ---
function getMenuDescription(menu) {
    if (currentLang === 'en') {
        // 영어 모드: 간단한 템플릿으로 변환
        return `Enjoy a cute and hearty ${getMenuName(menu)} for your meal!`;
    } else {
        return menu.description;
    }
}

// --- 메뉴 이름 영어 매핑 ---
const menuNameEnMap = {
    '공기': 'Air',
    '딸기잼토스트': 'Strawberry Jam Toast',
    '샌드위치': 'Sandwich',
    '토스트': 'Toast',
    '시리얼': 'Cereal',
    '계란말이': 'Rolled Omelette',
    '샐러드': 'Salad',
    '오트밀': 'Oatmeal',
    '바나나 팬케이크': 'Banana Pancake',
    '요거트볼': 'Yogurt Bowl',
    '크로와상': 'Croissant',
    '치즈 오믈렛': 'Cheese Omelette',
    '감자샐러드': 'Potato Salad',
    '프렌치토스트': 'French Toast',
    '에그마요 샌드위치': 'Egg Mayo Sandwich',
    '딸기잼 토스트': 'Strawberry Jam Toast',
    '고구마 구이': 'Roasted Sweet Potato',
    '우유식빵': 'Milk Bread',
    '치아바타 샌드위치': 'Ciabatta Sandwich',
    '베이컨 에그머핀': 'Bacon Egg Muffin',
    '과일샐러드': 'Fruit Salad',
    '옥수수스프': 'Corn Soup',
    '비빔밥': 'Bibimbap',
    '파스타': 'Pasta',
    '햄버거': 'Hamburger',
    '김치찌개': 'Kimchi Stew',
    '돈까스': 'Pork Cutlet',
    '쌀국수': 'Pho',
    '카레라이스': 'Curry Rice',
    '치킨마요덮밥': 'Chicken Mayo Rice Bowl',
    '불고기': 'Bulgogi',
    '떡볶이': 'Tteokbokki',
    '김밥': 'Gimbap',
    '라면': 'Ramen',
    '오므라이스': 'Omelette Rice',
    '순두부찌개': 'Soft Tofu Stew',
    '제육볶음': 'Spicy Pork Stir-fry',
    '샤브샤브': 'Shabu-shabu',
    '볶음밥': 'Fried Rice',
    '우동': 'Udon',
    '스테이크': 'Steak',
    '삼겹살': 'Pork Belly',
    '치킨': 'Chicken',
    '피자': 'Pizza',
    '된장찌개': 'Soybean Paste Stew',
    '회덮밥': 'Sliced Raw Fish Rice Bowl',
    '닭갈비': 'Spicy Stir-fried Chicken',
    '곱창전골': 'Beef Intestine Hot Pot',
    '갈비찜': 'Braised Short Ribs',
    '오징어볶음': 'Stir-fried Squid',
    '감자탕': 'Pork Backbone Stew',
    '참치김치찌개': 'Tuna Kimchi Stew',
    '해물파전': 'Seafood Pancake',
    '잡채': 'Japchae',
    '부대찌개': 'Army Stew',
    '쭈꾸미볶음': 'Stir-fried Webfoot Octopus',
    '닭볶음탕': 'Spicy Braised Chicken',
    '연어스테이크': 'Salmon Steak',
    '샐러드볼': 'Salad Bowl',
    '치즈토스트': 'Cheese Toast',
    '베이컨샌드위치': 'Bacon Sandwich',
    '닭가슴살샐러드': 'Chicken Breast Salad',
    '참치샐러드': 'Tuna Salad',
    '치킨텐더': 'Chicken Tender',
    '새우볶음밥': 'Shrimp Fried Rice',
    '불닭볶음면': 'Spicy Chicken Noodle',
    '치즈돈까스': 'Cheese Pork Cutlet',
    '치즈라면': 'Cheese Ramen',
    '치즈김밥': 'Cheese Gimbap',
    '치즈떡볶이': 'Cheese Tteokbokki',
    '치즈피자': 'Cheese Pizza',
    '불고기버거': 'Bulgogi Burger',
    '새우버거': 'Shrimp Burger',
    '치킨버거': 'Chicken Burger',
    '불닭버거': 'Spicy Chicken Burger',
    '치즈버거': 'Cheeseburger',
    '베이컨버거': 'Bacon Burger',
    '더블버거': 'Double Burger',
    '트리플버거': 'Triple Burger',
    '치즈스테이크': 'Cheese Steak',
    '치즈샌드위치': 'Cheese Sandwich',
    '치즈오믈렛': 'Cheese Omelette',
    '치즈프렌치토스트': 'Cheese French Toast',
    '치즈감자샐러드': 'Cheese Potato Salad',
    '치즈오트밀': 'Cheese Oatmeal',
    '치즈요거트볼': 'Cheese Yogurt Bowl',
    '치즈크로와상': 'Cheese Croissant',
    '치즈베이컨샌드위치': 'Cheese Bacon Sandwich',
    '치즈과일샐러드': 'Cheese Fruit Salad',
    '치즈옥수수스프': 'Cheese Corn Soup',
    '치즈우유식빵': 'Cheese Milk Bread',
    '치즈치아바타샌드위치': 'Cheese Ciabatta Sandwich',
    '치즈에그마요샌드위치': 'Cheese Egg Mayo Sandwich',
    '치즈딸기잼토스트': 'Cheese Strawberry Jam Toast',
    '치즈고구마구이': 'Cheese Roasted Sweet Potato',
    '치즈바나나팬케이크': 'Cheese Banana Pancake',
    '치즈닭가슴살샐러드': 'Cheese Chicken Breast Salad',
    '치즈참치샐러드': 'Cheese Tuna Salad',
    '치즈치킨텐더': 'Cheese Chicken Tender',
    '치즈새우볶음밥': 'Cheese Shrimp Fried Rice'
};
function getMenuName(menu) {
    if (currentLang === 'en') {
        return menuNameEnMap[menu.name] || menu.name;
    } else {
        return menu.name;
    }
}

// 메뉴 카드 렌더링 시 API 레시피 우선 적용
async function renderRecommendCard(menu) {
    const card = document.getElementById('recommendCard');
    let rerollBtn = '';
    const t = window.textMap[currentLang];
    if (rerollCount < MAX_REROLL) {
        rerollBtn = `<button class="again-btn" onclick="rerollMenu()">${t.rerollBtn.replace('{n}', MAX_REROLL - rerollCount)}</button>`;
    } else {
        rerollBtn = `<button class="again-btn" onclick="showOtherMenus()">${t.noRerollBtn}</button>`;
    }
    // 즐겨찾기 버튼
    const star = isFavorite(menu) ? '⭐' : '☆';
    const favBtn = `<button class="fav-btn" onclick="toggleFavorite(menuData[currentMealTime][currentMenuIndex])">${star} ${t.favorite}</button>`;
    // 공유 버튼
    const shareBtn = `<button class="share-btn" onclick="shareMenu(menuData[currentMealTime][currentMenuIndex])">${t.share}</button>`;
    card.innerHTML = `
        <span class="menu-emoji">${menu.image}</span>
        <div class="menu-name">${getMenuName(menu)}</div>
        <div class="menu-description">${getMenuDescription(menu)}</div>
        <div class="menu-detail-row"><span>${getMenuDetailLabel('칼로리')}</span><span>${getMenuDetailValue('칼로리', menu.calorie + 'kcal')}</span></div>
        <div class="menu-detail-row"><span>${getMenuDetailLabel('가격')}</span><span>${getMenuDetailValue('가격', menu.price === 0 ? '0원' : menu.price.toLocaleString() + '원')}</span></div>
        <div class="menu-detail-row"><span>${getMenuDetailLabel('제조시간')}</span><span>${getMenuDetailValue('제조시간', menu.time)}</span></div>
        <div class="fav-share-row">${favBtn}${shareBtn}</div>
        ${rerollBtn}
        <button class="home-btn" onclick="goBack()">${t.home}</button>
    `;
    saveRecentMenu(menu);
    animateCard(card);
    // 음식카드가 렌더링된 후 자연스럽게 스크롤
    setTimeout(() => {
        const sectionElem = document.getElementById('menuRecommend');
        if (sectionElem) {
            sectionElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

function rerollMenu() {
    if (rerollCount < MAX_REROLL) {
        rerollCount++;
        const menus = menuData[currentMealTime];
        const prevIdx = currentMenuIndex;
        currentMenuIndex = pickRandomIndex(menus, prevIdx);
        renderRecommendCard(menus[currentMenuIndex]);
        if (rerollCount === MAX_REROLL) {
            showToast('마지막 추천이에요!');
        } else {
            showToast('새로운 메뉴를 추천했어요!');
        }
    } else {
        showOtherMenus();
    }
}

// --- 다른 메뉴 리스트 ---
function showOtherMenus(sortType = null) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('otherMenus').classList.add('active');
    
    // 부드러운 스크롤 효과 추가
    setTimeout(() => {
        document.getElementById('otherMenus').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    
    let menus = menuData[currentMealTime];
    // 정렬 상태 토글
    if (sortType) {
        if (sortState.type === sortType) {
            sortState.order = sortState.order === 'asc' ? 'desc' : 'asc';
        } else {
            sortState.type = sortType;
            sortState.order = 'asc';
        }
    }
    // 정렬
    if (sortState.type === 'price') {
        menus = [...menus].sort((a, b) => sortState.order === 'asc' ? a.price - b.price : b.price - a.price);
    } else if (sortState.type === 'calorie') {
        menus = [...menus].sort((a, b) => sortState.order === 'asc' ? a.calorie - b.calorie : b.calorie - a.calorie);
    }
    const list = document.getElementById('otherMenuList');
    list.innerHTML = '';
    // 기존 sort-row 제거
    const oldSort = document.querySelector('.sort-row');
    if (oldSort) oldSort.remove();
    // 정렬 버튼 UI
    const priceArrow = sortState.type === 'price' ? (sortState.order === 'asc' ? '▲' : '▼') : '';
    const calArrow = sortState.type === 'calorie' ? (sortState.order === 'asc' ? '▲' : '▼') : '';
    const sortUI = `<div class="sort-row"><button class="sort-btn" onclick="showOtherMenus('price')">💸 가격순 ${priceArrow}</button><button class="sort-btn" onclick="showOtherMenus('calorie')">🔥 칼로리순 ${calArrow}</button></div>`;
    list.insertAdjacentHTML('beforebegin', sortUI);
    // 카드 리스트
    menus.forEach((menu, idx) => {
        if (idx !== currentMenuIndex) {
            const card = document.createElement('div');
            card.className = 'other-menu-card';
            const star = isFavorite(menu) ? '⭐' : '☆';
            card.innerHTML = `
                <span class="menu-emoji">${menu.image}</span>
                <div class="menu-name">${menu.name}</div>
                <div class="menu-description">${menu.description}</div>
                <div class="menu-detail-row">${menu.calorie}kcal · ${menu.price.toLocaleString()}원</div>
                <button class="fav-btn" onclick="event.stopPropagation();toggleFavorite(menuData[currentMealTime][${idx}])">${star}</button>
            `;
            card.onclick = () => {
                currentMenuIndex = idx;
                showRecommendFromOther(menu);
            };
            list.appendChild(card);
        }
    });
}

function showRecommendFromOther(menu) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('menuRecommend').classList.add('active');
    renderRecommendCard(menu);
}

function backToRecommend() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('menuRecommend').classList.add('active');
}

// --- 최근 추천 저장 ---
function saveRecentMenu(menu) {
    let history = JSON.parse(localStorage.getItem('recentMenus') || '[]');
    const meal = currentLang === 'en'
        ? (currentMealTime === 'breakfast' ? 'Breakfast' : currentMealTime === 'lunch' ? 'Lunch' : 'Dinner')
        : (currentMealTime === 'breakfast' ? '아침' : currentMealTime === 'lunch' ? '점심' : '저녁');
    const item = { name: getMenuName(menu), image: menu.image, meal };
    history = history.filter(h => h.name !== item.name || h.meal !== item.meal);
    history.unshift(item);
    if (history.length > 5) history = history.slice(0, 5);
    localStorage.setItem('recentMenus', JSON.stringify(history));
}

// --- 귀여운 토스트/스낵바 ---
function showToast(msg) {
    let toast = document.getElementById('cuteToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cuteToast';
        toast.style.position = 'fixed';
        toast.style.bottom = '40px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = '#fff6fa';
        toast.style.color = '#7b5fc0';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '24px';
        toast.style.boxShadow = '0 2px 12px 0 rgba(123, 95, 192, 0.10)';
        toast.style.fontFamily = 'Jua, Gowun Dodum, sans-serif';
        toast.style.fontSize = '1.1rem';
        toast.style.zIndex = 9999;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = 1;
    setTimeout(() => { toast.style.opacity = 0; }, 1800);
}

// --- 카드 애니메이션 ---
function animateCard(card) {
    card.style.opacity = 0;
    card.style.transform = 'scale(0.96)';
    setTimeout(() => {
        card.style.transition = 'all 0.3s cubic-bezier(.68,-0.55,.27,1.55)';
        card.style.opacity = 1;
        card.style.transform = 'scale(1)';
    }, 10);
}

function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById('darkModeBtn');
    const modalBtn = document.getElementById('modalDarkModeBtn');
    const isDark = body.classList.toggle('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    // 설정 팝업 다크모드 버튼 텍스트도 이모지 없이
    if (modalBtn) {
        modalBtn.textContent = (localStorage.getItem('lang') === 'en') ? 'Dark Mode' : '다크모드';
    }
    localStorage.setItem('darkMode', isDark ? '1' : '0');
    showToast(isDark ? '다크모드로 전환!' : '라이트모드로 전환!');
}

function restoreDarkMode() {
    const isDark = localStorage.getItem('darkMode') === '1';
    if (isDark) {
        document.body.classList.add('dark');
        document.getElementById('darkModeBtn').textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        document.getElementById('darkModeBtn').textContent = '🌙';
    }
}

function shareMenu(menu) {
    const shareText = `오늘의 메뉴 추천: ${menu.image} ${menu.name}\n\n${menu.description}\n\n칼로리: ${menu.calorie}kcal\n가격: ${menu.price.toLocaleString()}원\n제조시간: ${menu.time}\n\n제조 방법: ${menu.recipe}`;
    if (navigator.share) {
        navigator.share({
            title: `오늘의 메뉴: ${menu.name}`,
            text: shareText,
            url: window.location.href
        }).then(() => {
            showToast('공유했어요!');
        }).catch(() => {
            showToast('공유가 취소되었어요.');
        });
    } else {
        // fallback: copy to clipboard
        copyToClipboard(shareText);
        showToast('메뉴 정보가 복사되었어요!');
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

// --- 메뉴 데이터 100개씩 자동 생성 ---
function generateMenuList(baseList, mealType) {
    const emojiMap = {
        '김치찌개': '🍲', '된장찌개': '🍲', '부대찌개': '🍲', '순두부찌개': '🍲',
        '돈까스': '🥩', '스테이크': '🥩', '불고기': '🥩', '삼겹살': '🥓',
        '피자': '🍕', '햄버거': '🍔', '샌드위치': '🥪', '토스트': '🍞',
        '시리얼': '🥣', '오트밀': '🥣', '샐러드': '🥗', '파스타': '🍝',
        '쌀국수': '🍜', '라면': '🍜', '우동': '🍜', '카레라이스': '🍛',
        '김밥': '🍙', '볶음밥': '🍚', '오므라이스': '🍳', '계란말이': '🍳',
        '치킨': '🍗', '치킨마요덮밥': '🍗', '닭갈비': '🍗', '닭볶음탕': '🍗',
        '회덮밥': '🍣', '연어스테이크': '🐟', '새우볶음밥': '🍤',
        '감자샐러드': '🥔', '고구마구이': '🍠', '옥수수스프': '🌽',
        '크로와상': '🥐', '팬케이크': '🥞', '프렌치토스트': '🍞',
        '떡볶이': '🍢', '잡채': '🍝', '해물파전': '🥞',
        '과일샐러드': '🍎', '요거트볼': '🍧', '우유식빵': '🍞',
        '치즈오믈렛': '🍳', '치즈돈까스': '🥩', '치즈피자': '🍕',
        '치즈라면': '🍜', '치즈김밥': '🍙', '치즈떡볶이': '🍢',
        '치즈버거': '🍔', '베이컨버거': '🍔', '불닭볶음면': '🌶️',
        '참치김치찌개': '🍲', '곱창전골': '🍲', '갈비찜': '🍖',
        '오징어볶음': '🦑', '쭈꾸미볶음': '🦑', '감자탕': '🍲',
        '딸기잼토스트': '🍓', '바나나팬케이크': '🍌', '샤브샤브': '🍲',
        '치즈스테이크': '🥩', '치즈샌드위치': '🥪', '치즈프렌치토스트': '🍞',
        '치즈감자샐러드': '🥔', '치즈오트밀': '🥣', '치즈요거트볼': '🍧',
        '치즈크로와상': '🥐', '치즈베이컨샌드위치': '🥪', '치즈과일샐러드': '🍎',
        '치즈옥수수스프': '🌽', '치즈우유식빵': '🍞', '치즈치아바타샌드위치': '🥪',
        '치즈에그마요샌드위치': '🥪', '치즈딸기잼토스트': '🍓', '치즈고구마구이': '🍠',
        '치즈바나나팬케이크': '🍌', '치즈닭가슴살샐러드': '🥗', '치즈참치샐러드': '🥗',
        '치즈치킨텐더': '🍗', '치즈새우볶음밥': '🍤'
    };
    const emojis = mealType === 'breakfast' ? ['🥪','🍞','🥣','🍳','🥗','🥞','🍧','🥐','🥯','🍓','🍠','🍎','🌽','🥛','🧀','🍫','🍊','🍋','🍒','🍉']
        : mealType === 'lunch' ? ['🍚','🍝','🥗','🍔','🥪','🍲','🥩','🍜','🍛','🍗','🍙','🍢','🍳','🥓','🍕','🍟','🌮','🥟','🍤','🍱']
        : ['🥩','🥓','🍗','🍕','🍲','🍖','🍣','🦑','🍞','🍜','🍛','🍚','🍤','🍟','🍝','🍳','🍠','🍚','🍢','🍗'];
    const names = [
        '토스트','샌드위치','시리얼','오트밀','팬케이크','요거트볼','크로와상','오믈렛','감자샐러드','프렌치토스트',
        '비빔밥','파스타','샐러드','햄버거','김치찌개','돈까스','쌀국수','카레라이스','치킨마요덮밥','불고기',
        '스테이크','삼겹살','치킨','피자','샤브샤브','된장찌개','회덮밥','닭갈비','곱창전골','갈비찜',
        '오징어볶음','감자탕','참치김치찌개','해물파전','잡채','부대찌개','쭈꾸미볶음','닭볶음탕','연어스테이크','볶음밥',
        '우동','순두부찌개','제육볶음','오므라이스','김밥','라면','떡볶이','샐러드볼','치즈토스트','베이컨에그머핀',
        '과일샐러드','옥수수스프','우유식빵','치아바타샌드위치','에그마요샌드위치','딸기잼토스트','고구마구이','치즈오믈렛','바나나팬케이크','베이컨샌드위치',
        '닭가슴살샐러드','참치샐러드','치킨텐더','새우볶음밥','불닭볶음면','치즈돈까스','치즈라면','치즈김밥','치즈떡볶이','치즈피자',
        '불고기버거','새우버거','치킨버거','불닭버거','치즈버거','베이컨버거','더블버거','트리플버거','치즈스테이크','치즈샌드위치',
        '치즈오믈렛','치즈프렌치토스트','치즈감자샐러드','치즈오트밀','치즈요거트볼','치즈크로와상','치즈베이컨샌드위치','치즈과일샐러드','치즈옥수수스프','치즈우유식빵',
        '치즈치아바타샌드위치','치즈에그마요샌드위치','치즈딸기잼토스트','치즈고구마구이','치즈바나나팬케이크','치즈베이컨샌드위치','치즈닭가슴살샐러드','치즈참치샐러드','치즈치킨텐더','치즈새우볶음밥'
    ];
    const descMap = {
        breakfast: '오늘을 시작해보세요!',
        lunch: '든든하게 채워보세요!',
        dinner: '오늘을 마무리해보세요!'
    };
    // --- 레시피 패턴 ---
    const recipePatterns = [
        '1. 신선한 재료를 준비해요.\n2. 사랑을 담아 조리해요.\n3. 예쁘게 플레이팅해서 먹어요!',
        '1. 재료를 쏙쏙 썰어요.\n2. 맛있게 볶거나 끓여요.\n3. 한입 먹고 미소 지어요!',
        '1. 재료를 깨끗이 씻어요.\n2. 황금비율로 양념해요.\n3. 따뜻할 때 먹어요!',
        '1. 재료를 준비해요.\n2. 레시피대로 조리해요.\n3. 오늘도 맛있게 냠냠!',
        '1. 재료를 꺼내요.\n2. 정성껏 조리해요.\n3. 맛있게 먹어요!'
    ];
    // --- 키워드별 레시피 ---
    function getRecipeByName(name) {
        if (name.includes('볶음')) {
            return '1. 고기와 야채를 준비해요.\n2. 재료를 달군 팬에 볶아요.\n3. 양념을 넣고 한 번 더 볶아 맛있게 완성해요!';
        } else if (name.includes('찌개')) {
            return '1. 재료를 손질해요.\n2. 냄비에 재료와 물을 넣고 끓여요.\n3. 양념을 넣고 푹 끓여 맛있게 먹어요!';
        } else if (name.includes('덮밥')) {
            return '1. 밥을 준비해요.\n2. 고기와 야채를 볶아 소스를 넣어요.\n3. 밥 위에 올려 맛있게 먹어요!';
        } else if (name.includes('샐러드')) {
            return '1. 신선한 야채와 과일을 손질해요.\n2. 먹기 좋게 썰어요.\n3. 드레싱을 뿌려 섞어 먹어요!';
        } else if (name.includes('볶음밥')) {
            return '1. 밥과 야채, 고기를 준비해요.\n2. 팬에 재료를 볶아요.\n3. 간을 맞추고 맛있게 먹어요!';
        } else if (name.includes('오므라이스')) {
            return '1. 볶음밥을 만들어요.\n2. 계란을 풀어 부드럽게 익혀요.\n3. 볶음밥을 계란으로 감싸 완성해요!';
        } else if (name.includes('라면')) {
            return '1. 냄비에 물을 끓여요.\n2. 면과 스프, 재료를 넣고 끓여요.\n3. 그릇에 담아 맛있게 먹어요!';
        } else if (name.includes('토스트')) {
            return '1. 식빵을 토스터에 구워요.\n2. 잼이나 버터를 발라요.\n3. 따뜻할 때 먹어요!';
        } else if (name.includes('샌드위치')) {
            return '1. 식빵에 다양한 재료를 올려요.\n2. 다른 식빵으로 덮어요.\n3. 반으로 잘라 맛있게 먹어요!';
        } else if (name.includes('파스타')) {
            return '1. 파스타 면을 삶아요.\n2. 소스와 함께 볶거나 끓여요.\n3. 예쁘게 담아 먹어요!';
        } else if (name.includes('스테이크')) {
            return '1. 고기를 소금, 후추로 간해요.\n2. 팬에 노릇하게 구워요.\n3. 소스를 곁들여 먹어요!';
        } else if (name.includes('카레')) {
            return '1. 고기와 야채를 썰어요.\n2. 냄비에 볶다가 물과 카레를 넣어요.\n3. 밥 위에 부어 먹어요!';
        } else if (name.includes('국수') || name.includes('우동')) {
            return '1. 면을 삶아요.\n2. 육수와 고명을 준비해요.\n3. 그릇에 담아 맛있게 먹어요!';
        } else if (name.includes('피자')) {
            return '1. 도우에 소스와 치즈, 토핑을 올려요.\n2. 오븐에 구워요.\n3. 먹기 좋게 잘라 먹어요!';
        } else if (name.includes('탕')) {
            return '1. 재료를 손질해요.\n2. 냄비에 넣고 푹 끓여요.\n3. 간을 맞춰 맛있게 먹어요!';
        } else if (name.includes('구이')) {
            return '1. 재료를 손질해요.\n2. 오븐이나 팬에 구워요.\n3. 따뜻할 때 먹어요!';
        } else if (name.includes('전골')) {
            return '1. 재료를 손질해요.\n2. 냄비에 육수와 함께 끓여요.\n3. 푸짐하게 담아 먹어요!';
        } else if (name.includes('전')) {
            return '1. 반죽을 만들고 재료를 넣어요.\n2. 팬에 노릇하게 부쳐요.\n3. 간장에 찍어 먹어요!';
        } else if (name.includes('김밥')) {
            return '1. 김 위에 밥과 재료를 올려요.\n2. 돌돌 말아요.\n3. 한입 크기로 썰어 먹어요!';
        } else if (name.includes('빵')) {
            return '1. 빵을 준비해요.\n2. 원하는 재료를 곁들여요.\n3. 맛있게 먹어요!';
        }
        // 기본값: 랜덤 귀여운 문구
        return recipePatterns[Math.floor(Math.random() * recipePatterns.length)];
    }
    function getPriceByName(name) {
        if (/(스테이크|갈비찜|연어스테이크|랍스터|장어|한우|등심|안심|티본|꽃등심|랍스터파스타)/.test(name)) {
            return 15000 + Math.round(Math.random() * 15000 / 100) * 100; // 15000~30000
        } else if (/(피자|파스타|치킨|삼겹살|곱창|곱창전골|샤브샤브|회덮밥|감자탕|부대찌개|쭈꾸미|닭갈비|닭볶음탕|불고기)/.test(name)) {
            return 9000 + Math.round(Math.random() * 11000 / 100) * 100; // 9000~20000
        } else if (/(샌드위치|토스트|오트밀|시리얼|우유식빵|크로와상|요거트볼|프렌치토스트|베이컨에그머핀|딸기잼토스트|바나나팬케이크)/.test(name)) {
            return 3000 + Math.round(Math.random() * 4000 / 100) * 100; // 3000~7000
        } else if (/(김밥|라면|우동|떡볶이|순두부찌개|감자샐러드|고구마구이|옥수수스프)/.test(name)) {
            return 3000 + Math.round(Math.random() * 3000 / 100) * 100; // 3000~6000
        } else if (/(샐러드|볶음밥|오므라이스|카레|잡채|쌀국수)/.test(name)) {
            return 5000 + Math.round(Math.random() * 7000 / 100) * 100; // 5000~12000
        } else {
            return 4000 + Math.round(Math.random() * 11000 / 100) * 100; // 4000~15000
        }
    }
    const result = [...baseList];
    let usedNames = new Set(baseList.map(m => m.name));
    for (let i = baseList.length; i < 100; i++) {
        let n;
        let tryCount = 0;
        do {
            n = names[(i + Math.floor(Math.random()*names.length)) % names.length];
            tryCount++;
        } while (usedNames.has(n) && tryCount < 200);
        usedNames.add(n);
        const emoji = emojiMap[n] || emojis[i % emojis.length];
        const price = getPriceByName(n);
        result.push({
            name: n,
            calorie: 180 + Math.floor(Math.random()*900),
            price: price,
            time: `${5 + Math.floor(Math.random()*30)}분`,
            description: `귀엽고 든든한 ${n}로 ${descMap[mealType]}`,
            recipe: getRecipeByName(n),
            image: emoji
        });
    }
    return result;
}

// 기존 baseList(20개) 유지, 100개로 확장
menuData.breakfast = generateMenuList(menuData.breakfast, 'breakfast');
menuData.lunch = generateMenuList(menuData.lunch, 'lunch');
menuData.dinner = generateMenuList(menuData.dinner, 'dinner');

function startApp() {
    // 모든 화면 비활성화
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    // 식사 시간 선택 화면 활성화
    const mealTimeScreen = document.getElementById('mealTimeSelection');
    mealTimeScreen.classList.add('active');
    // 홈 화면 렌더링
    renderHome();
    // 부드러운 자동 스크롤
    setTimeout(() => {
        mealTimeScreen.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function goIntro() {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    document.getElementById('introScreen').classList.add('active');
}

// --- 즐겨찾기 전체 보기 화면 ---
function showFavoritesScreen() {
    const favWindow = window.open('', 'favorites', 'width=420,height=800,left=100,top=100');
    if (!favWindow) {
        showToast(currentLang === 'en' ? 'Popup blocked! Please allow popups.' : '팝업이 차단되었어요. 팝업 차단을 해제해주세요!');
        return;
    }
    favWindow.document.write(`
        <!DOCTYPE html>
        <html lang="${currentLang}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${currentLang === 'en' ? 'Favorite Menus' : '즐겨찾기 메뉴'}</title>
            <link rel="stylesheet" href="styles.css">
            <link href="https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&display=swap" rel="stylesheet">
            <style>
                body { margin: 0; padding: 0; }
                .favorites-container {
                    max-width: 420px;
                    width: 100%;
                    min-height: 100vh;
                    background: var(--bg-card);
                    border-radius: 32px;
                    box-shadow: var(--shadow);
                    position: relative;
                    padding: 2rem 1.2rem 1rem 1.2rem;
                }
                .favorites-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    gap: 0.5rem;
                }
                .favorites-title {
                    font-size: 1.5rem;
                    color: var(--text-accent);
                    margin: 0;
                }
                .favorites-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.2rem;
                    justify-content: center;
                }
                .favorite-card {
                    background: var(--bg-card);
                    border-radius: 24px;
                    box-shadow: var(--shadow-card);
                    padding: 1.2rem 1rem 1rem 1rem;
                    width: 160px;
                    text-align: center;
                    margin-bottom: 0.5rem;
                    transition: box-shadow 0.2s, transform 0.2s, background 0.3s;
                    color: var(--text-main);
                }
                .favorite-card:hover {
                    box-shadow: 0 6px 24px 0 rgba(123, 95, 192, 0.18);
                    transform: translateY(-4px) scale(1.04);
                }
                .close-btn {
                    background: var(--bg-btn);
                    border: none;
                    border-radius: 18px;
                    font-size: 1.08rem;
                    font-weight: 600;
                    color: var(--text-accent);
                    padding: 0.6rem 1.2rem;
                    margin: 0.2rem 0.3rem;
                    box-shadow: var(--shadow-btn);
                    cursor: pointer;
                    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
                }
                .close-btn:hover {
                    background: var(--bg-btn-hover);
                    color: #ffb300;
                }
                .clear-btn {
                    background: #ffe0e0;
                    border: none;
                    border-radius: 18px;
                    font-size: 1.08rem;
                    font-weight: 600;
                    color: #e57373;
                    padding: 0.6rem 1.2rem;
                    margin: 0.2rem 0.3rem;
                    box-shadow: var(--shadow-btn);
                    cursor: pointer;
                    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
                }
                .clear-btn:hover {
                    background: #ffb3b3;
                    color: #b71c1c;
                }
            </style>
        </head>
        <body>
            <div class="favorites-container">
                <div class="favorites-header">
                    <button class="close-btn" onclick="window.opener.scrollTo(0,0); window.close()">${currentLang === 'en' ? '← Back' : '← 뒤로가기'}</button>
                    <h2 class="favorites-title">${currentLang === 'en' ? '⭐ All Favorites' : '⭐ 즐겨찾기 전체 리스트'}</h2>
                    <button class="clear-btn" onclick="clearAllFavorites()">${currentLang === 'en' ? 'Clear All' : '모두 해제'}</button>
                </div>
                <div class="favorites-list" id="favoritesList"></div>
            </div>
            <script>
                // 다크모드 설정 복사
                if (window.opener.document.body.classList.contains('dark')) {
                    document.body.classList.add('dark');
                }
                // 즐겨찾기 데이터 로드
                const favs = JSON.parse(localStorage.getItem('favoriteMenus') || '[]');
                const list = document.getElementById('favoritesList');
                if (favs.length === 0) {
                    list.innerHTML = '<div style="text-align:center; color:var(--text-soft); font-size:1.1rem; margin-top:2rem;">'+
                        (window.opener.currentLang === 'en' ? 'No favorites yet!<br>Click the ⭐ button to add.' : '아직 즐겨찾기한 메뉴가 없어요!<br>⭐ 버튼을 눌러 추가해보세요.')+'</div>';
                } else {
                    favs.forEach((item, idx) => {
                        const mealLabel = window.opener.currentLang === 'en' ? (item.meal === 'breakfast' ? 'Breakfast' : item.meal === 'lunch' ? 'Lunch' : 'Dinner') : (item.meal === 'breakfast' ? '아침' : item.meal === 'lunch' ? '점심' : '저녁');
                        const calLabel = window.opener.currentLang === 'en' ? 'kcal' : 'kcal';
                        const priceLabel = window.opener.currentLang === 'en' ? 'won' : '원';
                        const timeLabel = window.opener.currentLang === 'en' ? 'min' : '분';
                        const card = document.createElement('div');
                        card.className = 'favorite-card';
                        card.innerHTML = '<div class="favorite-card-content">'
                            + '<div class="menu-name">' + window.opener.getMenuName(item) + '</div>'
                            + '<div class="menu-description">' + window.opener.getMenuDescription(item) + '</div>'
                            + '<div class="menu-detail-row">' + item.calorie + calLabel + ' · ' + item.price.toLocaleString() + priceLabel + '</div>'
                            + '<div class="menu-meal" style="color:var(--text-accent); font-size:0.98rem; margin-bottom:0.3rem;">' + mealLabel + '</div>'
                            + '<button class="fav-btn" onclick="removeFavorite(' + idx + ')">⭐ ' + (window.opener.currentLang === 'en' ? 'Remove' : '해제') + '</button>'
                        + '</div>';
                        list.appendChild(card);
                    });
                }
                function removeFavorite(idx) {
                    let favs = JSON.parse(localStorage.getItem('favoriteMenus') || '[]');
                    favs.splice(idx, 1);
                    localStorage.setItem('favoriteMenus', JSON.stringify(favs));
                    window.opener.showToast(window.opener.currentLang === 'en' ? 'Removed from favorites!' : '즐겨찾기에서 제거했어요!');
                    window.location.reload();
                }
                function clearAllFavorites() {
                    localStorage.setItem('favoriteMenus', '[]');
                    window.opener.showToast(window.opener.currentLang === 'en' ? 'All favorites cleared!' : '모든 즐겨찾기를 해제했어요!');
                    window.location.reload();
                }
                // 즐겨찾기 리스트 렌더링 후 하단으로 부드럽게 스크롤
                setTimeout(() => {
                    const list = document.getElementById('favoritesList');
                    if (list) {
                        list.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }
                }, 200);
            </script>
        </body>
        </html>
    `);
    favWindow.document.close();
}

// --- 메뉴 상세 라벨/값 다국어 지원 함수 추가 ---
function getMenuDetailLabel(type) {
    if (currentLang === 'en') {
        if (type === '칼로리') return 'Calorie';
        if (type === '가격') return 'Price';
        if (type === '제조시간') return 'Time';
    }
    return type;
}
function getMenuDetailValue(type, value) {
    if (currentLang === 'en') {
        if (type === '가격') return value.replace('원', 'won');
        if (type === '제조시간') return value.replace('분', 'min');
    }
    return value;
}

// --- window에 주요 함수 바인딩 (HTML onclick 등에서 정상 동작하도록) ---
window.selectMealTime = selectMealTime;
window.startApp = startApp;
window.goHome = goHome;
window.goBack = goBack;
window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.toggleLanguage = toggleLanguage;
window.toggleDarkMode = toggleDarkMode;
window.showFavoritesScreen = showFavoritesScreen;
window.todayRecommend = todayRecommend;