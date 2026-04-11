const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuItem = document.querySelector('.menu-list')

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())

menuItem.addEventListener('click', (event) => {
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
})