let toggleBtn = document.querySelector('.js-nav-open');
let jsHeader = document.querySelector('.js-header');
let navLinks = document.querySelectorAll('.nav-items__list');

toggleBtn.addEventListener('click', function() {
    jsHeader.classList.toggle('active');
    if (jsHeader.classList.contains('active')) {
        this.setAttribute("aria-label", "open menu");
        this.setAttribute("aria-expanded", "false");
    } else {
        this.setAttribute("aria-expanded", "true");
        this.setAttribute("aria-label", "Close menu")
    }
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        jsHeader.classList.remove('active')
    })
})
