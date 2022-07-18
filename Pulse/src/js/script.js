const slider = document.querySelector('.carousel__inner');
const slides = document.querySelectorAll('.carousel__item');
const arrowRight = document.querySelector('.carousel__arrow-right');
const arrowLeft = document.querySelector('.carousel__arrow-left');

slides.forEach(slide => {
    slide.style = "display: none";
})

slides[0].style = "display: block";

let currentSlide = 0;

nextSlide = () => {
    slides[currentSlide].style = "display: none";
   
    currentSlide += 1;
    if (currentSlide > slides.length -1 ) currentSlide = 0;

    slides[currentSlide].style = "display: block";    
} 

prevSlide = () => {
    slides[currentSlide].style = "display: none";
   
    currentSlide -= 1;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].style = "display: block";    
} 

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

// Modal

const modalTrigger = document.querySelectorAll('[data-modal=constulation]');

const modalWindow = document.querySelector('.overlay');
const modalConsultation = document.querySelector('#consultation');
const modalOrder = document.querySelector('#order');
const modalThanks = document.querySelector('#thanks');

const orderBtn = document.querySelectorAll('[data-modal=orderBtn]');
const closeBtn = document.querySelectorAll('.modal__close');
const buyBtn = document.querySelectorAll('.button_small');

function openModal(modal) {
    modalWindow.style = 'display: block';
    modal.style = 'display: block';
}

function closeModal(modal) {
    modal.style = 'display: none';
    modalWindow.style = 'display: none';
}

modalTrigger.forEach(trigger => {
    trigger.addEventListener('click', () => {
        openModal(modalConsultation);
    })
})

//close by closeBtn
closeBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        closeModal(e.target.parentElement);
    })
});

//close by click on the substrate
modalWindow.addEventListener('click', (e) => {
    for (modal of e.target.children) {
        if (modal.style.display == 'block') {
            closeModal(modal);
        }
    }
})

// close by esc
document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        for (modal of modalWindow.children) {
            if (modal.style.display == 'block') {
                closeModal(modal);
            }
        }
    }
})

// thanks window
orderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        closeModal(e.target.parentElement.parentElement);
        openModal(modalThanks);

        setTimeout (() => {
            closeModal(modalThanks);
        }, 3000)
    })
});

buyBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalOrder);
    })
})

// tabs 

const tabs = document.querySelectorAll('.catalog__tab');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        let attribute;

        tabs.forEach(tab => tab.classList.remove('catalog__tab_active'));
        if (e.target.tagName === 'DIV'){
            e.target.parentElement.classList.add('catalog__tab_active');
            attribute = e.target.parentElement.getAttribute('data-trigger');
        } else {
            e.target.classList.add('catalog__tab_active');
            attribute = e.target.getAttribute('data-trigger');
        }

        document.querySelectorAll('.catalog__items').forEach(item => item.style.display = 'none');
        document.querySelector(`[data-modal=${attribute}]`).style.display = 'flex';
    })
})

// card info 

const cards = document.querySelectorAll('.pulse-card');
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('pulse-card__link')){
            e.preventDefault();
            if (e.target.classList.contains('pulse-card__link_back')) {
                e.target.parentElement.classList.toggle('pulse-card__list_active');
                e.target.parentElement.previousElementSibling.classList.toggle('pulse-card__content_active');
            } else {
                e.target.parentElement.classList.toggle('pulse-card__content_active');
                e.target.parentElement.nextElementSibling.classList.toggle('pulse-card__list_active');
            }
        }
    })
})
console.log(cards);