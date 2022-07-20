// -------------Slider-------------
const slider = document.querySelector('.carousel__wrapper');
const slides = document.querySelectorAll('.carousel__item');
const arrowRight = document.querySelector('.carousel__arrow-right');
const arrowLeft = document.querySelector('.carousel__arrow-left');

let currentSlide = 0;

function nextSlide(){
    if (currentSlide === slides.length-1) {
        arrowRight.style.display = 'none';
    } else {
        slider.style.transform = `translateX(${-100*(currentSlide+1)}%)`;
        currentSlide++;
        arrowLeft.style.display = 'block';
    }    
}

function prevSlide(){
    if (currentSlide === 0) {
        arrowLeft.style.display = 'none';
    } else {
        slider.style.transform = `translateX(${-100*(--currentSlide)}%)`;
        arrowRight.style.display = 'block';
    }
}

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

// -------------Modal-------------

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

// -------------tabs-------------

const tabsWrapper = document.querySelector('.catalog__tabs');

tabsWrapper.addEventListener('click', (e) => {
    if (e.target && e.target.closest('.catalog__tab')){
        const tab = e.target.tagName !== 'SPAN' ? e.target.parentElement : e.target;

        for (item of tabsWrapper.children) {
            item.classList.remove('catalog__tab_active');
        }

        tab.classList.add('catalog__tab_active');
        const attribute = tab.getAttribute('data-trigger');

        document.querySelectorAll('.catalog__items').forEach(item => item.style.display = 'none');
        document.querySelector(`[data-modal=${attribute}]`).style.display = 'flex';
    }
})

// -------------card info------------- 

const catalogWrappers = document.querySelectorAll('.catalog__items');

catalogWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', (e) => { 
        if (e.target && e.target.classList.contains('pulse-card__link')){
            e.preventDefault();
            const card = e.target.parentElement.parentElement;
            card.querySelector('.pulse-card__content').classList.toggle('pulse-card__content_active');
            card.querySelector('.pulse-card__list').classList.toggle('pulse-card__list_active');
        }
    })
})


