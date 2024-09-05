
// Получаем элементы бургер-меню, меню и кнопку закрытия
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');

// Добавляем событие на бургер-меню для открытия меню
burger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Добавляем событие на кнопку закрытия для скрытия меню
closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
});


const video = document.getElementById('custom-video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    video.play();
    playButton.classList.add('hidden'); // Скрываем кнопку play после начала воспроизведения
});

video.addEventListener('pause', () => {
    playButton.classList.remove('hidden'); // Показываем кнопку play при паузе
});


const tapeContainer = document.getElementById('tapeContainer');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const cardWidth = 273 + 20; // Ширина карточки плюс отступ
let position = 0; // Начальная позиция карусели

const updateVisibleCards = () => {
    const tapeWidth = document.querySelector('.tape').offsetWidth;
    const visibleCards = Math.floor(tapeWidth / cardWidth); // Вычисляем количество видимых карточек
    return visibleCards;
};

let visibleCards = updateVisibleCards();
const totalCards = document.querySelectorAll('.card').length; // Общее количество карточек

window.addEventListener('resize', () => {
    visibleCards = updateVisibleCards();
});

nextBtn.addEventListener('click', () => {
    const maxPosition = -(cardWidth * (totalCards - visibleCards));
    if (position > maxPosition) {
    position -= cardWidth * visibleCards;
    if (position < maxPosition) position = maxPosition; // Ограничение, чтобы не перелистывать дальше последней карточки
    }
    tapeContainer.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
    if (position < 0) {
    position += cardWidth * visibleCards;
    if (position > 0) position = 0; // Ограничение, чтобы не вернуться дальше первой карточки
    }
    tapeContainer.style.transform = `translateX(${position}px)`;
});



document.querySelector('.answers__desc-block').addEventListener('click', function() {
    var hiddenContent = document.querySelector('.hidden-content');
    
    if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
    this.classList.toggle('active');
});
