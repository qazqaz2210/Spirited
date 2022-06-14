const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const a = document.querySelectorAll(".list-a");
const news = document.querySelector('.news');
const news_phone = document.querySelector('.news-phone');


// 選單列開關JS
menu_btn.onclick = function () {
    if (document.querySelector("#menu-btn").checked) {
        closeList();
        let shop_distance = (document.querySelector(".shop").offsetTop - 100)
        let shop_height = document.querySelector(".shop").offsetHeight
        if ((document.documentElement.scrollTop >= shop_distance) && (document.documentElement.scrollTop < (shop_distance + shop_height))) {
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
a.forEach((element, index) => {

    element.onclick = function () {
        closeList();
        document.querySelector('input').checked = false;
        if (index == 0) {
            to_how_to_buy();
        }
        else {
            to_about_us();
        }
    }
});

//看全部菜單按按鈕打開、點背景關閉
function view_all_menu() {
    let view_menu;
    if (document.body.clientWidth > 1199) {
        view_menu = document.querySelector('.view-menu');

    }
    else {
        view_menu = document.querySelector('.view-menu-phone');
    }
    view_menu.style = "opacity:1";
    view_menu.classList.remove('d-none');
}
function view_all_menu_close() {
    let view_menu
    if (document.body.clientWidth > 1199) {
        view_menu = document.querySelector('.view-menu');
    }
    else {
        view_menu = document.querySelector('.view-menu-phone');
    }

    if (view_menu == event.target) {
        view_menu.style = "opacity:0";
        setTimeout(function () {
            view_menu.classList.add('d-none');
        }, 1000);
    }
}

//關閉最新消息
function closeNews() {
    news.style = 'display:none';
    news_phone.style = 'display:none';
    window.scrollTo(0, 0)

}
news.addEventListener('click', event => {
    if (news == event.target) {
        news.style = "opacity:0";
        setTimeout(function () {
            news.style = 'display:none'
        }, 1000);
        window.scrollTo(0, 0)
    }
});

news_phone.addEventListener('click', event => {
    if (news_phone == event.target) {
        news_phone.style = "opacity:0";
        setTimeout(function () {
            news_phone.style = 'display:none'
        }, 1000);
        window.scrollTo(0, 0)
    }
});

// 跳轉至HOW TO BUY
function to_how_to_buy() {
    if (document.body.clientWidth > 599) {
        window.scrollTo(0, 4500)
    }
    else {
        window.scrollTo(0, 3000)
    }

}

// 跳轉至ABOUT US
function to_about_us() {
    window.scrollTo(0, 7000)

}

