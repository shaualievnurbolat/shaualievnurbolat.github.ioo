import './scss/style.scss'
import images from './img/monument.png'
import hobbyImages from './img/png.png'

console.log('hello world')

const ABOUTMEWRAPPER = document.querySelector('.aboutme__wrapper')
const HOBBYWRAPPER = document.querySelector('.hobby__wrapper')

ABOUTMEWRAPPER.insertAdjacentHTML('beforeend', `<img class="aboutme__wrapper-bg animate__animated animate__fadeInRightBig animate__delay-1s" src=${images}>`)

HOBBYWRAPPER.insertAdjacentHTML('beforeend', `<img class="hobby__wrapper-icon animate__animated animate__fadeInLeftBig animate__delay-1s" src=${hobbyImages}>`)

// window.addEventListener('scroll', function() {
//     window.scrollBy(0, window.innerHeight)
// });
