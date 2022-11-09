const slide_thumbnail = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlideProgress: true
});

const slide_hero = new Swiper('.slide-principal', {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPanel  = document.querySelectorAll('.tab-panel-games')

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();

        allFilters.forEach(item => {
            item.classList.remove('active');
        })

        tabPanel.forEach(tab => {
            tab.classList.remove('active');
        })

        tabPanel[index].classList.add('active')
        filter.classList.add('active');
    })
})



