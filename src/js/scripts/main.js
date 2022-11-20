// Swiper section slides

const slide_thumbnail = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlideProgress: true,
    breakpoints: {
        320:{
            direction: 'horizontal'
        },
        1150: {
            direction: 'vertical'
        }
    }
});

const progressSlide = document.querySelector('.js-progress')

const slide_hero = new Swiper('.slide-principal', {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        init: function() {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('animate');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionStart: function() {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            progressSlide.classList.add('animate');
        }
    }
});


// Filtros section games

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


// Modal

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close');

btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();
    let tagHtml = document.documentElement;
    tagHtml.classList.add('show-modal')
});

btnCloseModal.addEventListener('click', () => {
    let tagHtml = document.documentElement;
    tagHtml.classList.remove('show-modal')
});


// Dropdowns

const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
         
        menuSite.forEach(menuItem => {
            menuItem.classList.remove('active');
            menuItem.addEventListener('mouseleave', () => {
                menuItem.classList.remove('active');
                
                btnMenu.forEach(itemBtn => {
                    itemBtn.classList.remove('active'); 
                })
            })
        })

        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active'); 
        })

        btn.classList.add('active');
        menuSite[index].classList.add('active');
    })
});
