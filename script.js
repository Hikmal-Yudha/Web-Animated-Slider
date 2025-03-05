const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnails = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Autoplay Slider
let runAutoPlay = setTimeout(() => {
    next.click()
}, 8000)

next.addEventListener('click', () => {
    initSlider('next');
});

prev.addEventListener('click', () => {
    initSlider('prev');
});

const initSlider = (type) => {
    const sliderItem = list.querySelectorAll('.item');
    const thumbnailsItem = thumbnails.querySelectorAll('.item');

    if (type === 'next') {
        list.appendChild(sliderItem[0]);
        thumbnails.appendChild(thumbnailsItem[0]);
        slider.classList.add('next');
    } else {
        const lastItemPosition = sliderItem.length - 1;
        list.prepend(sliderItem[lastItemPosition]);
        thumbnails.prepend(thumbnailsItem[lastItemPosition]);
        slider.classList.add('prev');
    }

    setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, 2000);

    clearTimeout(runAutoPlay);
    runAutoPlay = setTimeout(() => {
        next.click()
    }, 8000)

};