import './scss/style.scss'
import images from './img/monument.png'
// import "../node_modules/animate.css";

console.log('hello world')

const ABOUTMEWRAPPER = document.querySelector('.aboutme__wrapper')

ABOUTMEWRAPPER.insertAdjacentHTML('beforeend', `<img class="aboutme__wrapper-bg animate__animated animate__fadeInRight" src=${images}>`)

window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = '100vh';
  });