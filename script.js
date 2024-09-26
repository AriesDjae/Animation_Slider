const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let runAutoPlay = setTimeout(() => {
    next.click();
}, 5000);


next.addEventListener('click', () => {
    initSlider('next');
});
prev.addEventListener('click', () => {
    initSlider('prev');
});

const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = list.querySelectorAll('item-tmb');

    if(type == 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next'); 
    } else {
        const lastItem = sliderItems.length - 1;
        list.prepend(sliderItems[lastItem])
        thumbnail.prepend(thumbnailItems[lastItem]);
        slider.classList.add('prev');
    }

    setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, 2000);

    // autoplay
    clearTimeout(runAutoPlay);
    runAutoPlay = setTimeout(() => {
        next.click();
    }, 5000);

};
