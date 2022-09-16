// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0 ); //the number means the pixels after scrolling
});

//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');

        icon.className === "uil uil-plus" ? icon.className = "uil uil-minus" : icon.className = "uil uil-plus";

    })
});

//show/hide navbar

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

const close = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
}

closeBtn.addEventListener('click', close );