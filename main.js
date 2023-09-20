import './style.css'

const body = document.querySelector('body')
const boxShadow = document.querySelector('#box-shadow')
const iconMenu = document.querySelector('.icon-menu')
const navbar = document.querySelector('nav')

iconMenu.addEventListener('click', () => {

    body.classList.toggle('scroll')
    boxShadow.classList.toggle('hide')
    navbar.classList.toggle('block')

    navbar.classList.toggle('showNavbar')

    if(navbar.classList.contains('block')) {
        return iconMenu.src = `icon-menu-close.svg`
    }

    iconMenu.src = `icon-menu.svg`
})