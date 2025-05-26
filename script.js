// 화면 전환 함수
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// 시작하기 버튼 클릭 시
function startApp() {
    showScreen('mealTimeSelection');
}

// 홈으로 돌아가기
function goHome() {
    showScreen('introScreen');
}

// 뒤로 가기
function goBack() {
    showScreen('mealTimeSelection');
}

// 식사 시간 선택
function selectMealTime(time) {
    document.getElementById('mealTimeTitle').textContent = 
        time === 'breakfast' ? '아침 메뉴 추천' :
        time === 'lunch' ? '점심 메뉴 추천' : '저녁 메뉴 추천';
    showScreen('menuRecommend');
    recommendMenu(time);
}

// 메뉴 추천
function recommendMenu(time) {
    const menus = {
        breakfast: ['샌드위치', '토스트', '시리얼', '오트밀', '팬케이크', '요거트볼', '크로와상', '오믈렛'],
        lunch: ['비빔밥', '파스타', '샐러드', '햄버거', '김치찌개', '돈까스', '쌀국수', '카레라이스'],
        dinner: ['스테이크', '삼겹살', '치킨', '피자', '샤브샤브', '된장찌개', '회덮밥', '닭갈비']
    };
    
    const randomMenu = menus[time][Math.floor(Math.random() * menus[time].length)];
    document.getElementById('recommendCard').innerHTML = `
        <h3>${randomMenu}</h3>
        <p>오늘의 추천 메뉴입니다!</p>
    `;
}

// 다른 메뉴 보기
function showOtherMenus() {
    showScreen('otherMenus');
}

// 즐겨찾기 화면 렌더링
function renderFavoritesScreen() {
    showScreen('favoritesScreen');
}

// 다크모드 토글
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('darkModeBtn');
    btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}