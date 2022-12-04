import './scss/style.scss'
import images from './img/monument.png'
import hobbyImages from './img/png.png'
import WOW from '../node_modules/wow.js'
import '../node_modules/animate.css'
// import "wowjs/dist/wow.min.js";


new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
new WOW().init()

const ABOUTMEWRAPPER = document.querySelector('.aboutme__wrapper')
const HOBBYWRAPPER = document.querySelector('.hobby__wrapper')

ABOUTMEWRAPPER.insertAdjacentHTML('beforeend', `<img class="aboutme__wrapper-bg animate__animated animate__fadeInRightBig animate__delay-1s" src=${images}>`)

HOBBYWRAPPER.insertAdjacentHTML('beforeend', `<img class="hobby__wrapper-icon wow animate__animated animate__fadeInLeftBig" src=${hobbyImages}>`)
// window.addEventListener('scroll', function() {
//     window.scrollBy(0, window.innerHeight)
// });