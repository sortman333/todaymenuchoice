// 메뉴 데이터
const menuData = {
    breakfast: [
        {
            name: "샌드위치",
            calorie: 350,
            price: 4500,
            time: "10분",
            description: "신선한 야채와 계란, 치즈가 듬뿍 들어간 영양만점 샌드위치",
            image: "🥪"
        },
        {
            name: "시리얼",
            calorie: 280,
            price: 3000,
            time: "5분",
            description: "우유와 함께 먹는 아침 식사용 시리얼",
            image: "🥣"
        },
        {
            name: "토스트",
            calorie: 320,
            price: 4000,
            time: "8분",
            description: "버터와 잼을 바른 따뜻한 토스트",
            image: "🍞"
        },
        {
            name: "계란말이",
            calorie: 250,
            price: 3500,
            time: "12분",
            description: "부드러운 계란말이와 김치",
            image: "🍳"
        },
        {
            name: "샐러드",
            calorie: 200,
            price: 5000,
            time: "7분",
            description: "신선한 야채와 과일이 듬뿍 들어간 샐러드",
            image: "🥗"
        }
    ],
    lunch: [
        {
            name: "비빔밥",
            calorie: 650,
            price: 8000,
            time: "15분",
            description: "다양한 나물과 고소한 참기름이 어우러진 건강식",
            image: "🍚"
        },
        {
            name: "파스타",
            calorie: 750,
            price: 12000,
            time: "20분",
            description: "알덴테 파스타와 풍부한 소스",
            image: "🍝"
        },
        {
            name: "샐러드",
            calorie: 450,
            price: 9000,
            time: "10분",
            description: "단백질이 풍부한 닭가슴살 샐러드",
            image: "🥗"
        },
        {
            name: "햄버거",
            calorie: 850,
            price: 7000,
            time: "8분",
            description: "육즙 가득한 패티와 신선한 야채",
            image: "🍔"
        },
        {
            name: "샌드위치",
            calorie: 550,
            price: 6000,
            time: "5분",
            description: "다양한 재료가 들어간 든든한 샌드위치",
            image: "🥪"
        }
    ],
    dinner: [
        {
            name: "스테이크",
            calorie: 850,
            price: 25000,
            time: "25분",
            description: "부드러운 육즙이 가득한 스테이크",
            image: "🥩"
        },
        {
            name: "삼겹살",
            calorie: 950,
            price: 18000,
            time: "30분",
            description: "고소한 삼겹살 구이",
            image: "🥓"
        },
        {
            name: "치킨",
            calorie: 1200,
            price: 18000,
            time: "20분",
            description: "바삭한 치킨과 콜라",
            image: "🍗"
        },
        {
            name: "피자",
            calorie: 1100,
            price: 20000,
            time: "15분",
            description: "치즈가 듬뿍 들어간 피자",
            image: "🍕"
        },
        {
            name: "샤브샤브",
            calorie: 800,
            price: 22000,
            time: "40분",
            description: "신선한 야채와 고기가 어우러진 샤브샤브",
            image: "🍲"
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

// 페이지 로드 시 메뉴 데이터 초기화
window.onload = function() {
    // 로컬 스토리지에서 저장된 메뉴가 있는지 확인
    const savedMenus = localStorage.getItem('menus');
    if (!savedMenus) {
        // 저장된 메뉴가 없으면 기본 메뉴 데이터 저장
        localStorage.setItem('menus', JSON.stringify(menuData));
    }
};

// 식사 시간대 선택 함수
function selectMealTime(mealTime) {
    currentMealTime = mealTime;
    document.getElementById('mealTimeSelection').classList.remove('active');
    document.getElementById('menuSelection').classList.add('active');
    
    // 시간대별 제목 설정
    const titles = {
        breakfast: '아침 메뉴',
        lunch: '점심 메뉴',
        dinner: '저녁 메뉴'
    };
    document.getElementById('mealTimeTitle').textContent = titles[mealTime];
    
    updateMenuList();
}

// 이전 화면으로 돌아가기
function goBack() {
    document.getElementById('menuSelection').classList.remove('active');
    document.getElementById('mealTimeSelection').classList.add('active');
}

// 메뉴 추가 함수
function addMenu() {
    const menuInput = document.getElementById('menuInput');
    const calorieInput = document.getElementById('calorieInput');
    const priceInput = document.getElementById('priceInput');
    
    const menu = menuInput.value.trim();
    const calorie = calorieInput.value.trim();
    const price = priceInput.value.trim();
    
    if (menu) {
        const menuItem = {
            name: menu,
            calorie: calorie ? parseInt(calorie) : null,
            price: price ? parseInt(price) : null
        };
        
        menus[currentMealTime].push(menuItem);
        menuInput.value = '';
        calorieInput.value = '';
        priceInput.value = '';
        updateMenuList();
        saveMenus();
    }
}

// 메뉴 목록 업데이트 함수
function updateMenuList() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';
    
    const menus = JSON.parse(localStorage.getItem('menus'))[currentMealTime];
    
    menus.forEach((menu, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-info">
                <div class="menu-header">
                    <span class="menu-emoji">${menu.image}</span>
                    <span class="menu-name">${menu.name}</span>
                </div>
                <div class="menu-details">
                    <span class="menu-calorie">${menu.calorie}kcal</span>
                    <span class="menu-price">${menu.price.toLocaleString()}원</span>
                    <span class="menu-time">${menu.time}</span>
                </div>
                <div class="menu-description">${menu.description}</div>
            </div>
        `;
        menuList.appendChild(li);
    });
}

// 메뉴 삭제 함수
function removeMenu(index) {
    menus[currentMealTime].splice(index, 1);
    updateMenuList();
    saveMenus();
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

// Enter 키로 메뉴 추가
document.getElementById('menuInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addMenu();
    }
}); 