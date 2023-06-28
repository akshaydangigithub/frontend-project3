function locoInitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}


var typed = new Typed('#element', {
    strings: ['TO REMEMBER', 'WITH A VIEW', 'BY THE SEA'],
    typeSpeed: 60,
    loop: true
});

// scrollTrigger working code in locomotive js.........
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// cursor on cards
let cursor = document.querySelector(".cursor")
let cards = document.querySelector(".cards")
cards.addEventListener('mousemove', function (e) {
    cursor.style.left = `${e.x - 100}px`
    cursor.style.top = `${e.y - 300}px`
    cursor.style.scale = 1
})
cards.addEventListener('mouseleave', function () {
    cursor.style.scale = 0
})


function valueSetter() {
    // nav value set
    gsap.set(".links h3", { y: '-120px' });
    gsap.set("nav img", { y: '-120px' });
    gsap.set("nav button", { y: '-120px' });

    //Home page element value set
    gsap.set("#right video", { scale: 1.1 });
    gsap.set("#img1", { scale: 1.2 });
    gsap.set("#img2", { opacity: 0, y: '-50px' });
    gsap.set("#left h1 ", { opacity: 0, y: '80px' });
    gsap.set("#left p ", { opacity: 0, y: '80px' });
    gsap.set("#left button ", { opacity: 0, y: '80px', x: '-10px' });

    //secton2 elements value set
    gsap.set(".child h1", { marginTop: '3.5vw' });
    gsap.set(".child2 p", { marginTop: '1.2vw' });

    // cards value set
    gsap.set(".card ", { x: 100 });

    // section3 elements value set
    gsap.set(".line", { width: '0%' })
    gsap.set(".img3", { opacity: 0, y: '-100' })
    gsap.set(".child3 h1", { marginTop: '3vw' })
    gsap.set(".child4 p", { marginTop: '23px' })

    // footer value set
    gsap.set("footer h1", { y: '50', opacity: 0 })
    gsap.set(".footer-left p", { y: '50', opacity: 0 })
    gsap.set(".footer-right h3", { y: '50', opacity: 0 })
}

function navAnimate() {
    gsap.to(".links h3 , nav img, nav button", {
        y: '0px',
        duration: .5,
        ease: Power1,
        stagger: .2
    })
}

function homePageAnimate() {
    gsap.to('#right video', {
        scale: 1,
        duration: 1,
        ease: Power1
    })
    gsap.to('#img1', {
        scale: 1,
        duration: 1,
        ease: Power1,
        delay: .1
    })
    gsap.to('#left h1,#left p,#left button', {
        x: '0px',
        y: '0px',
        duration: .8,
        ease: Power1,
        delay: .1,
        opacity: 1
    })

    gsap.to("#img2", {
        scrollTrigger: {
            trigger: "#room-booking-section",
            start: "top -25%",
            scroller: "#main",
        },
        y: "0px",
        duration: .8,
        opacity: 1,
        ease: Power1
    })


}

function secondSectionAnimate() {
    gsap.to(".child h1", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top 70%",
            scroller: "#main",
        },
        marginTop: "0vw",
        duration: .8,
        ease: Power1
    })
    gsap.to(".child2 p", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top 60%",
            scroller: "#main",
        },
        marginTop: "0vw",
        duration: .8,
        ease: Power1
    })
}

function cardsAnimate() {
    gsap.to(".card", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top 50%",
            scroller: "#main",
            // markers: true
        },
        x: 0,
        duration: .8,
        ease: Power1,
        stagger: .1
    })
}

function thirdSectionAnimate() {
    gsap.to(".line", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top 70%",
            scroller: "#main",
            // markers: true
        },
        width: '100%',
        stagger: .1,
        duration: .8,
        ease: Power1
    })
    gsap.to(".img3", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top 70%",
            scroller: "#main",
            // markers: true
        },
        y: 0,
        opacity: 1,
        duration: .8,
        ease: Power1
    })

    gsap.to(".img4", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top 50%",
            scroller: "#main",
            // markers: true,
            scrub: 1
        },
        marginTop: '-100px',
        stagger: 1,
        duration: .8,
        ease: Power1
    })

    gsap.to(".child3 h1", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top 50%",
            scroller: "#main",
            // markers: true,
        },
        marginTop: '0',
        duration: .8,
        ease: Power1
    })

    gsap.to(".child4 p", {
        scrollTrigger: {
            trigger: ".section3",
            start: "top 40%",
            scroller: "#main",
            // markers: true,
        },
        marginTop: '0',
        duration: .8,
        ease: Power1
    })
}

function footerAnimate() {
    gsap.to("footer h1,.footer-left p,.footer-right h3", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 70%",
            scroller: "#main",
            // markers: true
        },
        y: '0%',
        stagger: .1,
        duration: .4,
        opacity: 1,
        ease: Power1
    })
}

locoInitialize();
valueSetter()
navAnimate()
homePageAnimate()
secondSectionAnimate();
cardsAnimate()
thirdSectionAnimate();
footerAnimate();