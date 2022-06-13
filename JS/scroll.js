let lastKnownScrollPosition = 0;
let ticking = false;

//PC
const banner = document.querySelector('.banner')
const background = document.querySelector('.web-background')
const fortune = document.querySelector('.fortune')
const buy = document.querySelector('.how-to-buy')
const buyen = document.querySelector('.how-txt-en')
const buych = document.querySelector('.how-txt-ch')
const about = document.querySelector('.about-us')
const footer = document.querySelector('.footer')
const webinside = document.querySelector('.web-inside')

//Phone
const banner_phone = document.querySelector('.banner-phone')
const background_phone = document.querySelector('.web-background-phone')
const fortune_phone = document.querySelector('.fortune-phone')
const buy_phone = document.querySelector('.how-to-buy-phone')
const buyen_phone = document.querySelector('.how-txt-en-phone')
const buych_phone = document.querySelector('.how-txt-ch-phone')
const about_phone = document.querySelector('.about-us-phone')
const footer_phone = document.querySelector('.footer-phone')
const webinside_phone = document.querySelector('.web-inside-phone')

function doSomething(scrollPos) {
    if (document.body.clientWidth > 599) {
        if (document.documentElement.scrollTop < 500) {
            banner.style = 'display:flex'
            background.style = 'position:fixed'
            fortune.style = 'display:none'
            buy.style = 'display:none'
            buyen.style = 'display:none'
            buych.style = 'display:none'
            about.style = 'display:none'
            footer.style = 'display:none'
            webinside.style = 'overflow:hidden'

        } else if (document.documentElement.scrollTop < 2000) {
            banner.style = 'display:none'
            background.style = 'position: absolute; top: calc(150vh + 600px);'
            fortune.style = 'display:block'
            buy.style = 'display:none'
            buyen.style = 'display:none'
            buych.style = 'display:none'
            about.style = 'display:none'
            footer.style = 'display:none'
            webinside.style = 'overflow:hidden'

        }
        else if (document.documentElement.scrollTop < 3000) {
            banner.style = 'display:none'
            background.style = 'position:fixed'
            fortune.style = 'display:block'
            buy.style = 'display:none'
            buyen.style = 'display:none'
            buych.style = 'display:none'
            about.style = 'display:none'
            footer.style = 'display:none'
            webinside.style = 'overflow:hidden'

        } else if (document.documentElement.scrollTop < 5000) {
            banner.style = 'display:none'
            background.style = 'position:fixed'
            fortune.style = 'display:none'
            buy.style = 'display:flex'
            buyen.style = 'display:block'
            buych.style = 'display:none'
            about.style = 'display:none'
            footer.style = 'display:none'
            webinside.style = 'overflow:hidden'

        } else if (document.documentElement.scrollTop < 7000) {
            banner.style = 'display:none'
            background.style = 'position:fixed'
            fortune.style = 'display:none'
            buy.style = 'display:flex'
            buych.style = 'display:block'
            buyen.style = 'display:none'
            about.style = 'display:none'
            footer.style = 'display:none'
            webinside.style = 'overflow:hidden'

        } else if (document.documentElement.scrollTop < 8500) {
            banner.style = 'display:none'
            background.style = 'position:fixed'
            fortune.style = 'display:none'
            buy.style = 'display:none'
            buyen.style = 'display:none'
            buych.style = 'display:none'
            about.style = 'display:flex'
            footer.style = 'display:none'
            webinside.style = 'overflow:visible'

        } else if (document.documentElement.scrollTop < 9000) {
            banner.style = 'display:none'
            background.style = 'position:fixed'
            fortune.style = 'display:none'
            buy.style = 'display:none'
            buyen.style = 'display:none'
            buych.style = 'display:none'
            about.style = 'display:flex'
            footer.style = 'display:none'
            webinside.style = 'overflow:hidden'

        } else if (document.documentElement.scrollTop < 9500) {
            banner.style = 'display:none'
            background.style = 'position:fixed'
            fortune.style = 'display:none'
            buy.style = 'display:none'
            buyen.style = 'display:none'
            buych.style = 'display:none'
            about.style = 'display:none'
            footer.style = 'display:block'
            webinside.style = 'overflow:hidden'

        } else {
            banner.style = 'display:none'
            background.style = 'position:fixed'
            fortune.style = 'display:none'
            buy.style = 'display:none'
            buyen.style = 'display:none'
            buych.style = 'display:none'
            about.style = 'display:none'
            footer.style = 'display:block'
            webinside.style = 'overflow:hidden'
        }

        //漢堡條變色
        const line = document.querySelectorAll(".menu-btn-line")
        let shop_distance = (document.querySelector(".shop").offsetTop - 100)
        let shop_height = document.querySelector(".shop").offsetHeight

        if ((document.documentElement.scrollTop >= shop_distance) && (document.documentElement.scrollTop < shop_distance + shop_height)) {
            line.forEach(element => {
                element.classList.remove("menu-btn-line-light");
                element.classList.add("menu-btn-line-dark");
            });
        }
        else {
            line.forEach(element => {
                element.classList.add("menu-btn-line-light");
                element.classList.remove("menu-btn-line-dark");
            });
        }
    }
    else {
        if (document.documentElement.scrollTop < 500) {
            banner_phone.style = 'display:flex'
            background_phone.style = 'position:fixed'
            fortune_phone.style = 'display:none'
            buy_phone.style = 'display:none'
            buyen_phone.style = 'display:none'
            buych_phone.style = 'display:none'
            about_phone.style = 'display:none'
            footer_phone.style = 'display:none'
            webinside_phone.style = 'overflow:hidden'

        }
        else if (document.documentElement.scrollTop < 2000) {
            banner_phone.style = 'display:none'
            background_phone.style = 'position: absolute; top: calc(150vh + 600px);'
            fortune_phone.style = 'display:block'
            buy_phone.style = 'display:none'
            buyen_phone.style = 'display:none'
            buych_phone.style = 'display:none'
            about_phone.style = 'display:none'
            footer_phone.style = 'display:none'
            webinside_phone.style = 'overflow:hidden'
        }
        if (document.documentElement.scrollTop < 3000) {
            buy_phone.style = 'display:none'
            buyen_phone.style = 'display:none'
            buych_phone.style = 'display:none'
            about_phone.style = 'display:none'
            footer_phone.style = 'display:none'
            webinside_phone.style = 'overflow:hidden'
        } else if (document.documentElement.scrollTop < 4000) {
            buy_phone.style = 'display:flex'
            buyen_phone.style = 'display:block'
            buych_phone.style = 'display:none'
        } else if (document.documentElement.scrollTop < 5000) {
            buy_phone.style = 'display:flex'
            buyen_phone.style = 'display:blcok'
            buych_phone.style = 'display:blcok'
        } else if (document.documentElement.scrollTop < 6000) {
            buy_phone.style = 'display:flex'
            buyen_phone.style = 'display:blcok'
            buych_phone.style = 'display:blcok'
            webinside_phone.style = 'overflow:hidden'
        } else if (document.documentElement.scrollTop < 7000) {
            buy_phone.style = 'display:none'
            about_phone.style = 'display:block'
            webinside_phone.style = 'overflow:visible'
        } else if (document.documentElement.scrollTop < 8500) {
            about_phone.style = 'display:block'
            webinside_phone.style = 'overflow:visible'
        } else if (document.documentElement.scrollTop < 9000) {
            about_phone.style = 'display:none'
            footer_phone.style = 'display:none'
            webinside_phone.style = 'overflow:visible'
        } else {
            footer_phone.style = 'display:block'
            webinside_phone.style = 'overflow:hidden'
        }
    }
}

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

window.onload = function () {
    lax.init()
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })
    if (document.body.clientWidth > 599) {

        //BANNER卷軸效果
        lax.addElements('.animate-1', {
            scrollY: {
                scale: [
                    ["50", "250", "500"],
                    [1, 2, 4],
                ],
                opacity: [
                    ["550", "650"],
                    [1, 0],
                ]
            }
        })

        lax.addElements('.banner-title', {
            scrollY: {
                opacity: [
                    ["150", "250"],
                    [1, 0],
                ],
                scale: [
                    ["150", "450"],
                    [1, 0],
                ]
            }
        })

        lax.addElements('.animate-2', {
            scrollY: {
                scale: [
                    ["50", "250", "500"],
                    [1, 3, 5],
                ],
                opacity: [
                    ['600', '800'],
                    [1, 0],
                ]
            }
        })

        lax.addElements('.animate-3', {
            scrollY: {
                translateY: [
                    ["50", "250", "500"],
                    [0, 300, 900],
                ]
            }
        })

        // FORTUNE COOKIE 愛心 跳動
        lax.addElements('.fortune-heart', {
            scrollY: {
                translateY: [
                    ["2100", "2500"],
                    [300, 0],
                ],
                scale: [
                    ["2100", "2500", "3000"],
                    [1, 2, 20],
                ]
            }
        })

        // HOW TO BUY 過場
        //PC
        lax.addElements('.how-circle', {
            scrollY: {
                opacity: [
                    ["3000", "3500", "6800", "7000"],
                    [0, 1, 1, 0],
                ],
                scale: [
                    ["6000", "6500"],
                    [1, 12],
                ]
            }
        })

        lax.addElements('.how-title', {
            scrollY: {
                scale: [
                    ["3200", "3500"],
                    [0, 1],
                ],
                opacity: [
                    ["6500", "6800"],
                    [1, 0],
                ]
            }
        })

        lax.addElements('.how-paper', {
            scrollY: {
                translateX: [
                    ["3500", "4000"],
                    [-1000, 0],
                ]
            }
        })

        lax.addElements('.how-txt-en-lax', {
            scrollY: {
                translateY: [
                    ["3500", "4000"],
                    [1000, 0],
                ],
                opacity: [
                    ["4500", "5000"],
                    [1, 0]
                ]
            }
        })

        lax.addElements('.how-txt-ch-lax', {
            scrollY: {
                opacity: [
                    ["5000", "6000", "6800"],
                    [0, 1, 0]
                ]
            }
        })

        // ABOUT US 餅乾
        lax.addElements('.about-cookie', {
            scrollY: {
                translateY: [
                    ["6500", "7000", "8000"],
                    [-500, 100, 200],
                ]
            }
        })

        lax.addElements('.about-us-lax', {
            scrollY: {
                translateX: [
                    ["8500", "9000"],
                    [0, 1800],
                ]
            }
        })

        // FOOTER 
        lax.addElements('.footer-lax', {
            scrollY: {
                translateX: [
                    ["9000", "9500"],
                    [-1800, 0],
                ]
            }
        })
    }
    else {

        //BANNER卷軸效果
        lax.addElements('.animate-1-phone', {
            scrollY: {
                scale: [
                    ["50", "250", "500"],
                    [1, 2, 4],
                ],
                opacity: [
                    ["550", "650"],
                    [1, 0],
                ]
            }
        })

        lax.addElements('.banner-title-phone', {
            scrollY: {
                opacity: [
                    ["150", "250"],
                    [1, 0],
                ],
                scale: [
                    ["150", "450"],
                    [1, 0],
                ]
            }
        })

        lax.addElements('.animate-2-phone', {
            scrollY: {
                scale: [
                    ["50", "250", "500"],
                    [1, 3, 5],
                ],
                opacity: [
                    ['600', '800'],
                    [1, 0],
                ]
            }
        })

        lax.addElements('.animate-3-phone', {
            scrollY: {
                translateY: [
                    ["50", "250", "500"],
                    [0, 300, 900],
                ]
            }
        })
        lax.addElements('.phone-cookie-lax-phone', {
            scrollY: {
                translateX: [
                    ["3500", "5000", "6000"],
                    [1000, 250, -50],
                ],
                translateY: [
                    ["5500", "6500"],
                    [750, -450],
                ],
            }
        })

        // how to buy

        lax.addElements('.how-to-buy-lax-phone', {
            scrollY: {
                translateY: [
                    ["3000", "3500", "5000", "6000"],
                    [500, -450, -450, -1300],
                ],
            }
        })

        lax.addElements('.fortune-heart-phone', {
            scrollY: {
                translateY: [
                    ["3000", "3500", "5000", "6000"],
                    [-500, 800, 800, 1500],
                ],
                translateX: [
                    ["3000", "3500", "5000", "6000"],
                    [-150, -50, 0, 300],
                ],
            }
        })

        lax.addElements('.how-txt-en-lax-phone', {
            scrollY: {
                opacity: [
                    ["4000", "4500"],
                    [1, 0],
                ],
                translateX: [
                    ["3000", "3500"],
                    [-450, 0],
                ]
            }
        })

        lax.addElements('.how-txt-ch-lax-phone', {
            scrollY: {
                opacity: [
                    ["4500", "5000"],
                    [0, 1],
                ],
            }
        })

        lax.addElements('.how-paper-phone', {
            scrollY: {
                translateX: [
                    ["5000", "6000"],
                    [0, -450],
                ]
            }
        })

        // about us

        lax.addElements('.about-cookie-phone', {
            scrollY: {
                translateY: [
                    ["6000", "6500", "7000"],
                    [-1400, -400, 0],
                ]
            }
        })

        lax.addElements('.about-us-lax-phone', {
            scrollY: {
                translateY: [
                    ["6000", "6999", "7000"],
                    [-1400, -1400, 0],
                ],
                translateX: [
                    ["7000", "7500", "8000", "9000"],
                    [-1400, 0, 0, 1400],
                ]
            }
        })

        lax.addElements('.about-bag-lax-phone', {
            scrollY: {
                translateX: [
                    ["7000", "7500"],
                    [2800, 0],
                ]
            }
        })

        lax.addElements('.about-cookie-phone', {
            scrollY: {
                translateY: [
                    ["7000", "7500"],
                    [-500, 0],
                ],
                translateX: [
                    ["7000", "7500"],
                    [-1400, 0],
                ]
            }
        })

        // footer

        lax.addElements('.footer-lax-phone', {
            scrollY: {
                translateX: [
                    ["8000", "9500"],
                    [-1400, 0],
                ]
            }
        })
    }

}
