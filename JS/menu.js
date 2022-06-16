const fortune_img = document.querySelector(".fortune_img");
let item;
let item_index = 0;
let web_width = '';

if (document.body.clientWidth > 1199) {
    web_width = 'L'
}
else if (document.body.clientWidth > 599) {
    web_width = 'S'
}
else {
    web_width = 'XS'
}

fetch('./item.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        item = myJson;
        if (document.body.clientWidth > 1199) {
            Create(item);
        }
        else {
            Create_sm(item);
        }
        ChangeSize(item);
        fortuneCookies(item);
    });

// 切換類別後，重新印該類別的商品
function clickEvent(index) {
    item_index = index;
    Create(item);
}

function info_btn() {
    let active = document.querySelectorAll('.swiper-slide-active')[1]
    if (document.querySelector('#info').checked) {


        document.querySelector('#info').checked = false
        document.querySelector('.info-bg').style.backgroundImage = "url(../img/menu-info-w.svg)"
    }
    else {
        document.querySelector('.info-bg').style.backgroundImage = "url(../img/menu-info-b.svg)"
        document.querySelector('#info').checked = true
    }
}

//如果改變瀏覽器寬度，重新判斷swiper大小
function ChangeSize(item) {
    window.addEventListener('resize', () => {
        if (document.body.clientWidth > 1199) {
            if (web_width != 'L') {
                if (web_width == 'S') {
                    Create(item);
                }
                web_width = 'L'
                swipermidsize(item);
            }
        }
        else if (document.body.clientWidth > 599) {
            if (web_width != 'S') {
                web_width = 'S'
                Create_sm(item);
                swipermidsize(item);
            }
        }
        else {
            if (web_width != 'XS') {
                web_width = 'XS'
                Create_sm(item);
                swipermidsize(item);
            }
        }
    });
}

//印swiper外框
function Create(item) {
    if (item_index >= 0 && item_index < 4) {
        document.querySelector(".shop").innerHTML =
            `
        <div class="shop-main">
            <div class="top w-100">
                <div class="kanban-bg h-100">
                    <div class="kanban">

                        <!-- 類別按鈕 -->
                        <div class="types w-100">
                            <div class="cookie-type type" onclick="clickEvent(0)">
                                <div class="icon">
                                    <img src="./img/cookie-icon.svg" alt="" height="100%">
                                </div>
                                <div>
                                    <div class="title-en">Cookies</div>
                                    <div class="title-ch">餅乾</div>
                                </div>
                            </div>
                            <div class="cake-type type" onclick="clickEvent(1)">
                                <div class="icon">
                                    <img src="./img/cake-icon.svg" alt="" height="100%">
                                </div>
                                <div>
                                    <div class="title-en">Cakes</div>
                                    <div class="title-ch">蛋糕</div>
                                </div>
                            </div>
                            <div class="other-type type" onclick="clickEvent(2)">
                                <div class="icon">
                                    <img src="./img/other-icon.svg" alt="" height="100%">
                                </div>
                                <div>
                                    <div class="title-en">Others</div>
                                    <div class="title-ch">其他</div>
                                </div>
                            </div>
                            <div class="gift-type type" onclick="clickEvent(3)">
                                <div class="icon">
                                    <img src="./img/gift-icon.svg" alt="" height="100%">
                                </div>
                                <div>
                                    <div class="title-en">Gifts</div>
                                    <div class="title-ch">禮物</div>
                                </div>
                            </div>
                        </div>

                        <!-- 細項按鈕 -->
                        <div class="items w-100">
                            <div class="swiper-item">
                                <div class="swiper mySwiper">
                                    <div class="swiper-wrapper swipertop-wrapper">
                                    ${Create_content(item, "top")}
                                    </div>
                                </div>
                                <div class="swipertop-button-next swiper-button-next"></div>
                                <div class="swipertop-button-prev swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右上的燈 -->
                <div class="light h-100">
                </div>
            </div>

            <!-- 中間的swiper -->
            <div class="mid w-100 h-50">
                <div class="item-mid position-relative h-100">
                    <div class="swipermid mySwipermid">
                        <div class="swiper-wrapper swipermid-wrapper">
                        ${Create_content(item, "mid")}
                        </div>
                    </div>
                    <div class="swipermid-button-next swiper-button-next"></div>
                    <div class="swipermid-button-prev swiper-button-prev"></div>
                </div>
            </div>

            <div class="bot w-100">
                <div class="favor">
                    *口味為較甜的美式風味，甜度屬主觀性感受，故甜度標記僅供參考<br>
                    *Sweetness rating is subjective, since we are
                    an American bakery, most items will be on the sweeter side</div>

            </div>
            <div class="shop-bottom">
                <!-- 按鈕 -->
                <div class="menu-btns d-flex">
                    <!-- 看全部菜單 -->
                    <div class="whole-menu-btn shop-btn" onclick="view_all_menu()"></div>
                    <!-- 連到如何購買 -->
                    <div class="how-to-buy-btn shop-btn" onclick="to_how_to_buy()"></div>
                </div>
                <!-- 全部菜單的圖片之swiper -->
                <div class="w-100 position-fixed d-none view-menu" onclick="view_all_menu_close()">
                    <div class="view-menu-wrapper mx-auto">
                        <div class="swiper mySwiper-menu">
                            <div class="swiper-wrapper swiper-wrapper-menu">
                                <div class="swiper-slide swiper-slide-menu">
                                    <img src="./img/menu/menu-all.png" alt="" height="100%">
                                </div>
                                <div class="swiper-slide swiper-slide-menu">
                                    <img src="./img/menu/menu-cakes.png" alt="" height="100%">
                                </div>
                                <div class="swiper-slide swiper-slide-menu">
                                    <img src="./img/menu/menu-other.png" alt="" height="100%">
                                </div>
                                <div class="swiper-slide swiper-slide-menu">
                                    <img src="./img/menu/menu-gift.png" alt="" height="100%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swipermenu-button-next swiper-button-next"></div>
                    <div class="swipermenu-button-prev swiper-button-prev"></div>
                </div>
            </div>
        </div>
        `
    }
    // 綁定swiper
    swipermidsize(item);

    //印swiper裡面的內容
    function Create_content(item, position) {
        let html = "";
        item.item[item_index].forEach(element => {
            if (position == "top") {
                html +=
                    `
            <div class="swiper-slide">
                ${(element.item_en.length > 15) ? `<div class="item-en-sp">${element.item_en}</div>` : `<div class="item-en">${element.item_en}</div>`}
                <div class="item-ch">${element.item_ch}</div>
            </div>
            `
            }
            else if (position == "mid") {
                if (item_index != 3) {
                    html +=
                        `
                <div class="swiper-slide">
                    <div class="item-card w-100 h-100">
                        <div class="item-pic">
                            <img src="./img/photo/${element.img}" class="rounded-circle">
                        </div>
                        <div class="item-info">
                            <div class="item-name w-100">
                                <div class="item-name-en">${element.item_en}</div>
                                <div class="item-name-ch">${element.item_ch}</div>
                                <div class="item-sweet d-flex align-items-center">
                                    甜度<div class="ml-2 d-flex">${outputSweet(element.sweet)}</div>
                                </div>
                            </div>
                            ${output_introduce(element)}
                        </div>
                    </div>
                </div>
                    `
                }
                else {
                    html +=
                        `
                <div class="swiper-slide">
                    <div class="item-card w-100 h-100">
                        <div class="item-pic">
                            <img src="./img/photo/${element.img}" class="rounded-circle">
                        </div>
                        <div class="item-info">
                            <div class="item-name w-100">
                                <div class="item-name-en">${element.item_en}</div>
                                <div class="item-name-ch">${element.item_ch}</div>
                            </div>
                        </div>
                    </div>
                </div>
                `
                }
            }
        });
        return html
    }
}


//印swiper外框_手機板
function Create_sm(item) {
    if (document.body.clientWidth > 599) {
        document.querySelector('.shop').innerHTML = Create_sm_html()
    }
    else {
        document.querySelector('.shop-phone').innerHTML = Create_sm_html()
    }

    function Create_sm_html() {
        let html = '';
        html +=
            `
        <div class="shop-main-phone">
            <div class="top w-100">
                <div class="kanban">
                    <!-- 細項按鈕 -->
                    <div class="items">
                        Cookie
                    </div>

                    <!-- 類別按鈕 -->
                    <div class="types">
                        <div class="swiper mySwiper-item-icon">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="cookie-type type">
                                        <div class="icon">
                                            <img src="./img/cookie-icon.svg" alt="" height="100%">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cake-type type">
                                        <div class="icon">
                                            <img src="./img/cake-icon.svg" alt="" height="100%">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="other-type type">
                                        <div class="icon">
                                            <img src="./img/other-icon.svg" alt="" height="100%">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="gift-type type">
                                        <div class="icon">
                                            <img src="./img/gift-icon.svg" alt="" height="100%">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <!-- 中間的swiper -->
            <div class="mid w-100">
                <div class="item-mid">
                    <div class="swipermid mySwipermid">
                        <div class="swiper-wrapper swipermid-wrapper">
                            
                            ${Create_content_sm(item)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shop-bottom-phone">
            <!-- 按鈕 -->
            <div class="menu-btns d-flex">
                <!-- 看全部菜單 -->
                <div class="whole-menu-btn shop-btn" onclick="view_all_menu()"></div>
            </div>
            <!-- 全部菜單的圖片之swiper -->
            <div class="w-100 position-fixed d-none view-menu-phone" onclick="view_all_menu_close()">
                <div class="view-menu-wrapper mx-auto">
                    <div class="swiper mySwiper-menu">
                        <div class="swiper-wrapper swiper-wrapper-menu">
                            <div class="swiper-slide swiper-slide-menu">
                                <img src="./img/menu/menu-all.png" alt="">
                            </div>
                            <div class="swiper-slide swiper-slide-menu">
                                <img src="./img/menu/menu-cakes.png" alt="">
                            </div>
                            <div class="swiper-slide swiper-slide-menu">
                                <img src="./img/menu/menu-other.png" alt="">
                            </div>
                            <div class="swiper-slide swiper-slide-menu">
                                <img src="./img/menu/menu-gift.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swipermenu-button-next swiper-button-next"></div>
                <div class="swipermenu-button-prev swiper-button-prev"></div>
            </div>
            <div class="info-bg"></div>
        </div>
        `
        return html
    }

    // 綁定swiper
    swipermidsize(item);
}

//印swiper裡面的內容_手機板
function Create_content_sm(item) {
    let html = `<input id="info" type="checkbox">`;
    item.item[item_index].forEach(element => {
        if (item_index != 3) {
            html +=
                `
            <div class="swiper-slide">
                <div class="item-card w-100">
                    <div class="item-info">
                        <div class="item-name w-100">
                            <div class="${(element.item_en.length > 15) ? 'item-name-en-s' : 'item-name-en'}"><img src="./img/menu-icon-left.png"
                                    alt="">${element.item_en}<img src="./img/menu-icon-right.png" alt="">
                            </div>
                            <div class="item-name-ch">${element.item_ch}</div>
                            <div class="item-sweet">
                                甜度<div class="ml-2 d-flex">${outputSweet(element.sweet)}</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-pic">
                        <img src="./img/photo/${element.img}" class="rounded-circle">
                    </div>
                </div>
                ${output_introduce_sm(element)}
            </div>
            `
        }
        else {
            html +=
                `
            <div class="swiper-slide">
                <div class="item-card w-100">
                    <div class="item-info">
                        <div class="item-name w-100">
                            <div class="${(element.item_en.length > 15) ? 'item-name-en-s' : 'item-name-en'}"><img src="./img/menu-icon-left.png"
                                    alt="">${element.item_en}<img src="./img/menu-icon-right.png" alt="">
                            </div>
                            <div class="item-name-ch">${element.item_ch}</div>
                        </div>
                    </div>
                    <div class="item-pic">
                        <img src="./img/photo/${element.img}" class="rounded-circle">
                    </div>
                </div>
            </div>
            `
        }
    });
    return html
}

//判斷是否有介紹，沒有就直接顯示成分&保存方式
function output_introduce(element) {
    let html = '';
    if (element.introduce_ch != "") {
        html +=
            `
        <div class="item-content w-100">
            <div class="item-txt-ch-1">
                ${element.introduce_ch}
            </div>
            <div class="item-txt-en">
                ${element.introduce_en} ${((element.introduce_en) != "") ? "<br>" : ""}
            </div>
            <div class="d-flex justify-content-between">
                <div class="composition-btn"><span class="btn-ch">成分</span><span class="btn-en">composition</span></div>
                <div class="composition-content">
                    <div class="composition-content-ch">
                        成分&其他：${element.composition_ch}
                    </div>
                    <div class="composition-content-en">
                        ${element.composition_en != "" ? ("Ingredients and allergens：" + element.composition_en) : ""}
                    </div>
                </div>
                <div class="preservation-btn"><span class="btn-ch">保存方式</span><span class="btn-en">preservation</span></div>
                <div class="preservation-content">
                    <div class="preservation-content-ch">
                        ${element.preservation_ch}
                    </div>
                    <div class="preservation-content-en">
                        ${element.preservation_en}
                    </div>
                </div>
            </div>
            
        </div>
        `
    }
    else {
        html +=
            `
        <div class="item-content w-100">
            <div class="item-txt-ch-1">
                成分&其他：${element.composition_ch}<br>
                ${element.preservation_ch}
            </div>
            <div class="item-txt-en">
                Ingredients and allergens：${element.composition_en}<br>
                ${element.preservation_en}
            </div>
        </div>
        `
    }
    return html;
}

function output_introduce_sm(element) {
    let html = '';
    if (element.introduce_ch != "") {
        html +=
            `
        <div class="menu-info description-phone">
            <p class="tips">
                <span class="tips-ch">*口味為較甜的美式風味，甜度屬主觀性感受，故甜度標記僅供參考<br></span>
                <span class="tips-en">*Sweetness rating is subjective, since we are an American bakery, most items will be on the sweeter side</span>
            </p>

            <p class="info-ch">
                ${element.introduce_ch}<br>${element.composition_ch}
            </p>
            <p class="info-en">
                ${element.introduce_en}${element.introduce_en.length > 0 ? "<br>" : ""}${element.composition_en}
            </p>
            <div class="info-btn" onclick="info_btn()">
                <span class="info-ch">保存方式</span> <span class="info-en">Preservation></span>
            </div>
        </div>
            
        <div class="menu-info preservation-phone">
            <p class="info-ch">
                ${element.preservation_ch}
            </p>
            <p class="info-en">
                ${element.preservation_en}
            </p>
            <div class="info-btn" onclick="info_btn()">
                <span class="info-ch">商品描述</span> <span class="info-en">Description></span>
            </div>
        </div>
        `
    }
    else {
        html +=
            `
        <div class="menu-info description-phone">
                <p class="tips">
                    <span class="tips-ch">*口味為較甜的美式風味，甜度屬主觀性感受，故甜度標記僅供參考<br></span>
                    <span class="tips-en">*Sweetness rating is subjective, since we are an American bakery, most items will be on the sweeter side</span>
                </p>
                <p class="info-ch">
                    ${element.composition_ch}<br>
                    ${element.preservation_ch}
                </p>
                <p class="info-en">
                    ${element.composition_en}<br>
                    ${element.preservation_en}
                </p>
        </div>
        <div class="menu-info preservation-phone">
                <p class="tips">
                    <span class="tips-ch">*口味為較甜的美式風味，甜度屬主觀性感受，故甜度標記僅供參考<br></span>
                    <span class="tips-en">*Sweetness rating is subjective, since we are an American bakery, most items will be on the sweeter side</span>
                </p>
                <p class="info-ch">
                    ${element.composition_ch}<br>
                    ${element.preservation_ch}
                </p>
                <p class="info-en">
                    ${element.composition_en}<br>
                    ${element.preservation_en}
                </p>
        </div>
        
        `
    }
    return html;
}

//印甜度
function outputSweet(number) {
    let round = "";
    for (let i = 0; i < 5; i++) {
        if (i < number) {
            round += `<div class="rounded-circle sweet-round sweet-solid"></div>`;
        }
        else {
            round += `<div class="rounded-circle sweet-round sweet-hollow"></div>`;
        }
    }
    return round;
}

//swiper之JS
function swipermidsize(item) {
    //判斷瀏覽器寬度決定swiper有幾個
    if (web_width == 'L') {
        swiper();
    }
    else {
        swiper_sm(item);
    }
    function swiper() {
        //上方選單 細項選擇的swiper
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
            mousewheel: true,
            navigation: {
                nextEl: ".swipertop-button-next",
                prevEl: ".swipertop-button-prev",
            },
            on: {
                click: function () {
                    swiper.slideTo(swiper.clickedIndex);
                    swipermid.slideTo(swiper.clickedIndex + index);
                },
            },
        });
        //中間有大圖+說明的swiper
        var swipermid = new Swiper(".mySwipermid", {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            mousewheel: true,
            breakpoints: {
                1800: {
                    slidesPerView: 2,
                }
            },
            navigation: {
                nextEl: ".swipermid-button-next",
                prevEl: ".swipermid-button-prev",
            },
        });
    }

    function swiper_sm(item) {
        //上方選單 類別選擇的swiper
        var swiper_item_icon = new Swiper(".mySwiper-item-icon", {
            direction: "horizontal",
            slidesPerView: 4,
            loop: true,
            allowTouchMove: false,
            on: {
                click: function () {
                    if (swiper_item_icon.clickedIndex == 4) {
                        document.querySelector(".items").innerHTML = "Cookie"
                        item_index = 0
                        document.querySelector('.info-bg').style = "display:block"
                    }
                    if ((swiper_item_icon.clickedIndex == 1) || (swiper_item_icon.clickedIndex == 5)) {
                        document.querySelector(".items").innerHTML = "Cakes"
                        item_index = 1
                        document.querySelector('.info-bg').style = "display:block"
                    }
                    if (swiper_item_icon.clickedIndex == 2) {
                        document.querySelector(".items").innerHTML = "Other"
                        item_index = 2
                        document.querySelector('.info-bg').style = "display:block"
                    }
                    if (swiper_item_icon.clickedIndex == 3) {
                        document.querySelector(".items").innerHTML = "Gift"
                        item_index = 3
                        document.querySelector('.info-bg').style = "display:none"
                    }
                    swiper_item_icon.slideTo(swiper_item_icon.clickedIndex % 4);
                    document.querySelector('.swipermid-wrapper').innerHTML = Create_content_sm(item);
                    swiper_content_sm();
                },


            },
        });
        swiper_content_sm();
        function swiper_content_sm() {
            //中間有大圖+說明的swiper
            var swipermid = new Swiper(".mySwipermid", {
                spaceBetween: 0,
                slidesPerView: 1.5,
                centeredSlides: true,
                mousewheel: true,
                simulateTouch: false,
            });
        }
    }

    //看全部菜單 Swiper
    var swipermenu = new Swiper(".mySwiper-menu", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swipermenu-button-next",
            prevEl: ".swipermenu-button-prev",
        },
    });
}

// 幸運餅乾
function fortuneCookies(item) {
    let item_number = Math.floor(Math.random() * 3);
    switch (item_number) {
        case 0:
            fortune_img.src = "./img/photo/" + (item.item[item_number][Math.floor(Math.random() * 9)].img)
            break;
        case 1:
            fortune_img.src = "./img/photo/" + (item.item[item_number][Math.floor(Math.random() * 5)].img)
            break;
        case 2:
            fortune_img.src = "./img/photo/" + (item.item[item_number][Math.floor(Math.random() * 10)].img)
            break;
    }
}