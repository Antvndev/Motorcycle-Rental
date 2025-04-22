let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let navLinks = document.querySelectorAll('.navlist a');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Close menu on link click (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});
