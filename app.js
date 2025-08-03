let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let item = document.querySelectorAll('.carousel .item');
let countItem = item.length;
let active = 1;
let other_1 = null;
let other_2 = null;
let other_3 = null;
let other_4 = null;
let other_5 = null;
let other_6 = null;
let other_7 = null;
let other_8 = null;
let other_9 = null;
let other_10 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active = (active + 1) % countItem;
    other_1 = (active - 1 + countItem) % countItem;
    other_2 = (active + 1) % countItem;
    other_3 = (active + 2) % countItem;
    other_4 = (active + 3) % countItem;
    other_5 = (active + 4) % countItem;
    other_6 = (active + 5) % countItem;
    other_7 = (active + 6) % countItem;
    other_8 = (active + 7) % countItem;
    other_9 = (active + 8) % countItem;
    other_10 = (active + 9) % countItem;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = (active - 1 + countItem) % countItem;
    other_1 = (active - 1 + countItem) % countItem;
    other_2 = (active - 2 + countItem) % countItem;
    other_3 = (active - 3 + countItem) % countItem;
    other_4 = (active - 4 + countItem) % countItem;
    other_5 = (active - 5 + countItem) % countItem;
    other_6 = (active - 6 + countItem) % countItem;
    other_7 = (active - 7 + countItem) % countItem;
    other_8 = (active - 8 + countItem) % countItem;
    other_9 = (active - 9 + countItem) % countItem;
    other_10 = (active - 10 + countItem) % countItem;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

      let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    let itemOldOther_3 = document.querySelector('.carousel .item.other_3');
    if(itemOldOther_3) itemOldOther_3.classList.remove('other_3');

    let itemOldOther_4 = document.querySelector('.carousel .item.other_4');
    if(itemOldOther_4) itemOldOther_4.classList.remove('other_4');

    let itemOldOther_5 = document.querySelector('.carousel .item.other_5');
    if(itemOldOther_5) itemOldOther_5.classList.remove('other_5');

    let itemOldOther_6 = document.querySelector('.carousel .item.other_6');
    if(itemOldOther_6) itemOldOther_6.classList.remove('other_6');

    let itemOldOther_7 = document.querySelector('.carousel .item.other_7');
    if(itemOldOther_7) itemOldOther_7.classList.remove('other_7');

    let itemOldOther_8 = document.querySelector('.carousel .item.other_8');
    if(itemOldOther_8) itemOldOther_8.classList.remove('other_8');

    let itemOldOther_9 = document.querySelector('.carousel .item.other_9');
    if(itemOldOther_9) itemOldOther_9.classList.remove('other_9');

    let itemOldOther_10 = document.querySelector('.carousel .item.other_10');
    if(itemOldOther_10) itemOldOther_10.classList.remove('other_10');

    item.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth; // Forces reflow
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    item[active].classList.add('active');
    item[other_1].classList.add('other_1');
    item[other_2].classList.add('other_2');
    item[other_3].classList.add('other_3');
    item[other_4].classList.add('other_4');
    item[other_5].classList.add('other_5');
    item[other_6].classList.add('other_6');
    item[other_7].classList.add('other_7');
    item[other_8].classList.add('other_8');
    item[other_9].classList.add('other_9');
    item[other_10].classList.add('other_10');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
    next.click();
    }, 7000);
}
let autoPlay = setInterval(() => {
    next.click();
},7000);