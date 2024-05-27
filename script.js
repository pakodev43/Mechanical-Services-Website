const navToggleBtn = document.querySelector('#navToggleBtn')
const nav = document.querySelector('#nav')

navToggleBtn.onclick = () => {
    nav.classList.toggle('top_nav_active');
    navToggleBtn.classList.toggle('opened_nav');
}