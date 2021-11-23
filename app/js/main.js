document.querySelector('.burger-menu__open').addEventListener('click', function(e){
    document.querySelector('.rightside-menu').classList.remove('rightside-menu--close');
    document.querySelector('.burger-menu__open').classList.add('rightside-menu__close');
    document.querySelector('.burger-menu__close').classList.remove('rightside-menu__close');
})
document.querySelector('.burger-menu__close').addEventListener('click', function(e){
    document.querySelector('.rightside-menu').classList.add('rightside-menu--close');
    document.querySelector('.burger-menu__open').classList.remove('rightside-menu__close');
    document.querySelector('.burger-menu__close').classList.add('rightside-menu__close');
})

let position = 0;
let slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.main-slider__container');
const track = document.querySelector('.main-slider__track');
const btnPrev = document.querySelector('.main-slider__prev');
const btnNext = document.querySelector('.main-slider__next');
const items = document.querySelectorAll('.main-slider__item');
const itemsCount = items.length;
let marg = 90;


if(window.innerWidth < 1001){
    slidesToShow = 3;
	marg = 60;
}
console.log(slidesToShow );
console.log(marg);
if(window.innerWidth < 761){
    slidesToShow = 2;
	marg = 30;
}
if(window.innerWidth < 501){
    slidesToShow = 1;
	marg = 0;
}
let itemWidth = (container.clientWidth - marg) / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
console.log(itemWidth);
items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () =>{
    const itemsLeft = Math.round(itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth);
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    position -= (itemsLeft > 0) ? 30 : 0;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.round(Math.abs(position) / itemWidth);
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    position += (itemsLeft > 0) ? 30 : 0;

    setPosition();
    checkBtns();
});
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();


