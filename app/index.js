import './scss/style.scss'
import images from './img/monument.png'

console.log('hello world')

const ABOUTMEWRAPPER = document.querySelector('.aboutme__wrapper')

ABOUTMEWRAPPER.insertAdjacentHTML('beforeend', `<img class="aboutme__wrapper-bg animate__animated animate__fadeInRightBig" src=${images}>`)

// window.addEventListener('scroll', function() {
//     window.scrollBy(0, window.innerHeight)
// });
