//************ MENU MOBILE BTN CONTROL
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.add('show'));

document.querySelector('.close-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.remove('show'));

//************ PARALLAX EFFECT
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom(".menu-item", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)
TweenMax.from(".search", 1, {
    delay: .5,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from(".account", 1, {
    delay: .6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from(".cart", 1, {
    delay: .7,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from(".juice", 1, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".leaves .layer:nth-child(1)", 2, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".leaves .layer:nth-child(2)", 2, {
    delay: 2.1,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".leaves .layer:nth-child(3)", 2, {
    delay: 2.2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".leaves .layer:nth-child(4)", 2, {
    delay: 2.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".leaves .layer:nth-child(5)", 2, {
    delay: 2.5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".title", 1, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from(".tagline", 1, {
    delay: 1.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from(".pages", 1, {
    delay: 1.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from(".more", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from(".desc", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from(".arrows", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})