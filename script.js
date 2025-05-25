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
        { name: "옥수수스프", calorie: 250, price: 4000, time: "8분", description: "달콤한 옥수수스프 한 그릇", recipe: "1. 옥수수와 우유를 끓여 믹서에 갈아주세요.", image: "🌽" }
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
        { name: "우동", calorie: 550, price: 8000, time: "11분", description: "쫄깃한 면발의 우동", recipe: "1. 우동면을 삶고 국물과 함께 드세요.", image: "🍜" }
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
        { name: "연어스테이크", calorie: 700, price: 20000, time: "15분", description: "고소한 연어스테이크와 샐러드", recipe: "1. 연어를 소금, 후추로 간해 구워주세요.", image: "🐟" }
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

// 페이지 로드 시 메뉴 데이터 초기화
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
};

// 식사 시간대 선택 함수
function selectMealTime(mealTime, isToday=false) {
    currentMealTime = mealTime;
    rerollCount = 0;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('menuRecommend').classList.add('active');
    document.getElementById('menuRecommend').style.display = 'block';
    document.getElementById('menuRecommend').scrollIntoView({ behavior: 'smooth' });
    const titles = { breakfast: '아침 메뉴 추천', lunch: '점심 메뉴 추천', dinner: '저녁 메뉴 추천' };
    document.getElementById('mealTimeTitle').textContent = isToday ? '오늘의 추천' : titles[mealTime];
    const menus = menuData[mealTime];
    currentMenuIndex = pickRandomIndex(menus);
    renderRecommendCard(menus[currentMenuIndex]);
}

// 이전 화면으로 돌아가기
function goBack() {
    renderHome();
    document.getElementById('mealTimeSelection').scrollIntoView({ behavior: 'smooth' });
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

function renderFavoritesOnHome() {
    const favs = JSON.parse(localStorage.getItem('favoriteMenus') || '[]');
    if (favs.length === 0) return '';
    return `<div class="fav-title">⭐ 즐겨찾기 메뉴</div><div class="fav-list">` +
        favs.slice(0, 5).map(item => `
            <div class="fav-card">
                <span class="menu-emoji">${item.image}</span>
                <span class="menu-name">${item.name}</span>
                <span class="menu-meal">(${item.meal === 'breakfast' ? '아침' : item.meal === 'lunch' ? '점심' : '저녁'})</span>
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
        historyHtml = `<div class="recent-title">최근 추천</div><div class="recent-list">` +
            history.map(item => `
                <div class="recent-card">
                    <span class="menu-emoji">${item.image}</span>
                    <span class="menu-name">${item.name}</span>
                    <span class="menu-meal">(${item.meal})</span>
                </div>
            `).join('') + '</div>';
    }
    // 오늘의 추천
    const todayBtn = `<button class="today-btn" onclick="todayRecommend()">오늘의 추천 메뉴 보기 🍀</button>`;
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

function renderRecommendCard(menu) {
    const card = document.getElementById('recommendCard');
    let rerollBtn = '';
    if (rerollCount < MAX_REROLL) {
        rerollBtn = `<button class="again-btn" onclick="rerollMenu()">다른 메뉴 추천하기 (${MAX_REROLL - rerollCount}회 남음) 🔄</button>`;
    } else {
        rerollBtn = `<button class="again-btn" onclick="showOtherMenus()">더 이상 랜덤 추천이 없어요! 전체 메뉴 보기</button>`;
    }
    // 즐겨찾기 버튼
    const star = isFavorite(menu) ? '⭐' : '☆';
    const favBtn = `<button class="fav-btn" onclick="toggleFavorite(menuData[currentMealTime][currentMenuIndex])">${star} 즐겨찾기</button>`;
    // 공유 버튼
    const shareBtn = `<button class="share-btn" onclick="shareMenu(menuData[currentMealTime][currentMenuIndex])">🔗 공유</button>`;
    card.innerHTML = `
        <span class="menu-emoji">${menu.image}</span>
        <div class="menu-name">${menu.name}</div>
        <div class="menu-description">${menu.description}</div>
        <div class="menu-detail-row"><span>칼로리</span><span>${menu.calorie}kcal</span></div>
        <div class="menu-detail-row"><span>가격</span><span>${menu.price.toLocaleString()}원</span></div>
        <div class="menu-detail-row"><span>제조시간</span><span>${menu.time}</span></div>
        <div class="menu-recipe"><b>제조 방법</b><br>${menu.recipe}</div>
        <div class="fav-share-row">${favBtn}${shareBtn}</div>
        ${rerollBtn}
        <button class="home-btn" onclick="renderHome()">홈으로</button>
    `;
    saveRecentMenu(menu);
    animateCard(card);
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
    const meal = { breakfast: '아침', lunch: '점심', dinner: '저녁' }[currentMealTime];
    const item = { name: menu.name, image: menu.image, meal };
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
    const isDark = body.classList.toggle('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
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
        const rawPrice = 3000 + Math.floor(Math.random()*20000);
        const price = Math.round(rawPrice / 100) * 100;
        result.push({
            name: n,
            calorie: 180 + Math.floor(Math.random()*900),
            price: price,
            time: `${5 + Math.floor(Math.random()*30)}분`,
            description: `귀엽고 든든한 ${n}로 ${descMap[mealType]}`,
            recipe: `1. 재료를 준비해요.\n2. 정성껏 조리해요.\n3. 맛있게 먹어요!`,
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
    document.getElementById('mealTimeSelection').classList.add('active');
    document.getElementById('mealTimeSelection').style.display = 'block';
    document.getElementById('mealTimeSelection').scrollIntoView({ behavior: 'smooth' });
}

function goIntro() {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    document.getElementById('introScreen').classList.add('active');
    document.getElementById('introScreen').style.display = 'flex';
} 