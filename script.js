// 메뉴 목록을 저장할 배열
let menus = [];

// 페이지 로드 시 저장된 메뉴 목록 불러오기
window.onload = function() {
    const savedMenus = localStorage.getItem('menus');
    if (savedMenus) {
        menus = JSON.parse(savedMenus);
        updateMenuList();
    }
};

// 메뉴 추가 함수
function addMenu() {
    const menuInput = document.getElementById('menuInput');
    const menu = menuInput.value.trim();
    
    if (menu) {
        menus.push(menu);
        menuInput.value = '';
        updateMenuList();
        saveMenus();
    }
}

// 메뉴 목록 업데이트 함수
function updateMenuList() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';
    
    menus.forEach((menu, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${menu}</span>
            <button onclick="removeMenu(${index})">삭제</button>
        `;
        menuList.appendChild(li);
    });
}

// 메뉴 삭제 함수
function removeMenu(index) {
    menus.splice(index, 1);
    updateMenuList();
    saveMenus();
}

// 메뉴 선택 함수
function selectMenu() {
    if (menus.length === 0) {
        alert('메뉴를 먼저 추가해주세요!');
        return;
    }
    
    const result = document.getElementById('result');
    const randomIndex = Math.floor(Math.random() * menus.length);
    result.textContent = menus[randomIndex];
    
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