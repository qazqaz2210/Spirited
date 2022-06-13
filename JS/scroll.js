let lastKnownScrollPosition = 0;
let ticking = false;

const banner = document.querySelector('.banner')
const background = document.querySelector('.web-background')
const fortune = document.querySelector('.fortune')
const buy = document.querySelector('.how-to-buy')
const buyen = document.querySelector('.how-txt-en')
const buych = document.querySelector('.how-txt-ch')
const about = document.querySelector('.about-us')
const footer = document.querySelector('.footer')
const webinside = document.querySelector('.web-inside')

function doSomething(scrollPos) {
    if (document.body.clientWidth > 500) {
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

