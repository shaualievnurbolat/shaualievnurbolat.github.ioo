import './scss/style.scss'
import images from './img/monument.png'
import hobbyImages from './img/png.png'
import skillsIcon from './img/500.gif'
import WOW from '../node_modules/wow.js'
import '../node_modules/animate.css'


new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
new WOW().init()

// add selector image in html
const SKILLSWRAPPER = document.querySelector('.skills-icon')
const ABOUTMEWRAPPER = document.querySelector('.aboutme__wrapper')
const HOBBYWRAPPER = document.querySelector('.hobby__wrapper')

// selectors menu, overlay
const OPENBUTTON = document.querySelector('.hamburger')
const CLOSEBUTTON = document.querySelector('.menu-mobile__close')
const OVERLAY = document.querySelector('.overlay')
const MENU = document.querySelector('.menu-mobile')


// function menu
OPENBUTTON.addEventListener('click', () => {
    OVERLAY.style.display = 'block'
    MENU.style.left = '0px'
})

CLOSEBUTTON.addEventListener('click', () => {
    OVERLAY.style.display = 'none'
    MENU.style.left = '-600px'
})



// add image in html
ABOUTMEWRAPPER.insertAdjacentHTML('beforeend', `<img class="aboutme__wrapper-bg animate__animated animate__fadeInRightBig animate__delay-1s" src=${images}>`)
HOBBYWRAPPER.insertAdjacentHTML('beforeend', `<img class="hobby__wrapper-icon wow animate__animated animate__fadeInLeftBig" src=${hobbyImages}>`)
SKILLSWRAPPER.insertAdjacentHTML('beforeend', `<img class="skills__inner-item-icon" src=${skillsIcon}>`)
