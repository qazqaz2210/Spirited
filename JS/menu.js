const items = document.querySelector(".items")
const mid = document.querySelector(".mid");
const fortune_img = document.querySelector(".fortune_img");
let item;

fetch('./item.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        item = myJson;
        Create(item, 0);
        fortuneCookies(item);
    });

// 切換類別後，重新印該類別的商品
function clickEvent(index) {
    Create(item, index);
}

//印swiper外框
function Create(item, index) {
    items.innerHTML = "";
    mid.innerHTML = "";
    if (index >= 0 && index < 4) {
        //中間的框
        mid.innerHTML +=
            `
        <div class="item-mid position-relative h-100">
            <div class="swipermid mySwipermid">
                <div class="swiper-wrapper swipermid-wrapper">
                </div>
            </div>
            <div class="swipermid-button-next swiper-button-next"></div>
            <div class="swipermid-button-prev swiper-button-prev"></div>
        </div>
        `
        // 印裡面細項
        document.querySelector(".swipermid-wrapper").innerHTML += Create_content(item, index, "mid");

        //上方的框
        items.innerHTML +=
            `
        <div class="swiper-item">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper swipertop-wrapper">
                </div>
            </div>
            <div class="swipertop-button-next swiper-button-next"></div>
            <div class="swipertop-button-prev swiper-button-prev"></div>
        </div>
        `
        // 印細項
        document.querySelector(".swipertop-wrapper").innerHTML += Create_content(item, index, "top");
    }
    // 綁定swiper
    swipermidsize(index);
}

//印swiper裡面的內容
function Create_content(item, index, position) {
    let html = "";

    item.item[index].forEach(element => {
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
            if (index != 3) {
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

//如果改變瀏覽器寬度，重新判斷swiper大小
window.addEventListener('resize', swipermidsize);

//swiper之JS

function swipermidsize(index) {
    //判斷瀏覽器寬度決定swiper有幾個
    if (document.body.clientWidth >= 1800) {
        swiper(2);
    }
    else {
        swiper(1);
    }
    function swiper(index) {
        //上方選單 細項選擇的swiper
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
            // loop: true,
            mousewheel: true,
            navigation: {
                nextEl: ".swipertop-button-next",
                prevEl: ".swipertop-button-prev",
            },
            on: {
                click: function () {
                    swiper.slideTo(swiper.clickedIndex);
                    swipermid.slideTo(swiper.clickedIndex);
                },
            },
        });
        //中間有大圖+說明的swiper
        var swipermid = new Swiper(".mySwipermid", {
            spaceBetween: 0,
            slidesPerView: index,
            slidesPerGroup: 1,
            // loop: true,
            mousewheel: true,
            navigation: {
                nextEl: ".swipermid-button-next",
                prevEl: ".swipermid-button-prev",
            },
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