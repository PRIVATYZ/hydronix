const swiperConfig = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 700,
};

const swiperSlides = [
    { src: 'img/picture.png', alt: 'Screenshot 1' },
    { src: 'img/picture.png', alt: 'Screenshot 2' },
    { src: 'img/picture.png', alt: 'Screenshot 3' }
];

function generateSwiperSlides() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (!swiperWrapper) return;

    swiperWrapper.innerHTML = '';

    swiperSlides.forEach(slide => {
        const slideElement = document.createElement('div');
        slideElement.className = 'swiper-slide';
        slideElement.innerHTML = `<img src="${slide.src}" alt="${slide.alt}">`;
        swiperWrapper.appendChild(slideElement);
    });
}

function initSwiper() {
    generateSwiperSlides();
    
    const swiper = new Swiper('.swiper', swiperConfig);
    return swiper;
}

function initTimelineScroll() {
    const timelineContainer = document.querySelector('.content-right');
    if (!timelineContainer) return;

    timelineContainer.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            timelineContainer.scrollLeft += e.deltaY;
        }
    }, { passive: false });
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        initSwiper();
    }
    initTimelineScroll();
});

