const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const a = document.querySelectorAll(".list-a");
const view_menu = document.querySelector('.view-menu');
const news = document.querySelectorAll('.news')
const how_to_buy_btn = document.querySelector(".how-to-buy-btn");


// 選單列開關JS
menu_btn.onclick = function () {
    if (document.querySelector("#menu-btn").checked) {
        closeList();
        let shop_distance = (document.querySelector(".shop").offsetTop - 100)
        let shop_height = document.querySelector(".shop").offsetHeight
        if ((document.documentElement.scrollTop >= shop_distance) && (document.documentElement.scrollTop < (shop_distance + shop_height))) {
            console.log("???");
            document.querySelectorAll('.menu-btn-line').forEach(element => {
                element.classList.remove('menu-btn-line-light');
                element.classList.add('menu-btn-line-dark');
            });
        }
    }
    else {
        nav.style = "opacity:1";
        nav.classList.remove('d-none');
        document.querySelectorAll('.menu-btn-line').forEach(element => {
            element.classList.add('menu-btn-line-light');
            element.classList.remove('menu-btn-line-dark');
        });
    }
}
//漢堡條樣式切換JS
function clicklinkEvent(index) {
    closeList();
    document.querySelector('input').checked = false;
    clickEvent(index);
}
function closeList() {
    nav.style = "opacity:0";
    setTimeout(function () {
        nav.classList.add('d-none');
    }, 500);
}

// 如果點選網頁內連結，關閉選單列（外聯不關閉）
a.forEach(element => {
    element.onclick = function () {
        closeList();
        document.querySelector('input').checked = false;
    }
});

//看全部菜單按按鈕打開、點背景關閉
document.querySelector('.whole-menu-btn').onclick = function () {
    view_menu.style = "opacity:1";
    view_menu.classList.remove('d-none');
}
view_menu.addEventListener('click', event => {
    if (view_menu == event.target) {
        view_menu.style = "opacity:0";
        setTimeout(function () {
            view_menu.classList.add('d-none');
        }, 1000);
    }
})

//關閉最新消息
function closeNews() {
    news.forEach(element => {
        element.style = 'display:none';
    })
}
news.forEach(element => {
    element.addEventListener('click', event => {
        if (element == event.target) {
            element.style = "opacity:0";
            setTimeout(function () {
                element.style = 'display:none'
            }, 1000);
        }
    })
});

// 跳轉至HOW TO BUY
how_to_buy_btn.onclick = function () {
    window.scrollTo(0, 5000)
}
