const burgerButton = document.querySelector('.header__nav-btn');
const burgerMenu = document.querySelector('.header__nav-box');
const burgerLinks = document.querySelectorAll('.anchor');
const burgerOrder = document.querySelectorAll('.header__nav-order');
const burgerBlank = document.querySelector('.blank')

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
})

burgerLinks.forEach(burgerLink => {
    burgerLink.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
    })
})

burgerOrder.forEach(order => {
    order.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.style.overflow = 'hidden'
        burgerBlank.classList.toggle('active')
    })
})
