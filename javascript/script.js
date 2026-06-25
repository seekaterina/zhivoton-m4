const data_start = [
    //пункты меню
    [
        ['17.5%', '25vh'],
        ['57.8%', '14vh'],
        ['23.6%','34vh'],
        ['14.4%', '40vh'],
        ['36.4%', '44vh'],
        ['75.6%','27vh']
    ],
    //изображения карточек на главной
    [
        [`url('images/alpheratz.png')`],
        [`url('images/kratz.png')`],
        [`url('images/sirius.png')`]
    ],
    //плакаты на странице о нас
    [
        [`url('images/offer-1.png')`],
        [`url('images/offer-2.png')`],
        [`url('images/offer-3.png')`]
    ],
    //шоу-рум блок 2
    [
        [`url('images/sr-block2-1.jpg')`],
        [`url('images/sr-block2-2.jpg')`],
        [`url('images/sr-block2-1.jpg')`]
    ],
    //сияющая среда
    [
        [`url('images/wednesday-1.png')`],
        [`url('images/wednesday-2.png')`],
        [`url('images/wednesday-3.png')`]
    ],
    //наборы
    [
        [`url('images/set-1.png')`],
        [`url('images/set-2.png')`],
        [`url('images/set-3.png')`]
    ],
    //новые предложения
    [
        [`url('images/new-pos-1.png')`],
        [`url('images/new-pos-2.png')`],
        [`url('images/new-pos-3.png')`]
    ],
    //страница ошибки
    [
        ['63%', '-412px'],
        ['83%', '-256px'],
        ['58%', '-125px'],
        ['73%', '0']
    ]
]

const header_points = document.querySelectorAll('.header-point');

header_points.forEach((point, i) => {
    point.style.left = data_start[0][i][0];
    point.style.top = data_start[0][i][1];
})

const main_store_points = document.querySelectorAll('.store-point');

main_store_points.forEach((card, i) => {
    card.style.backgroundImage = data_start[1][i][0]
})

const about_offers = document.querySelectorAll('.offer');

about_offers.forEach((offer, i) => {
    offer.style.backgroundImage = data_start[2][i][0]
})

const sr_block2 = document.querySelectorAll('.sr-block2');

sr_block2.forEach((item, i) => {
    item.style.backgroundImage = data_start[3][i][0]
})

const wednesday = document.querySelectorAll('.wednesday');

wednesday.forEach((item, i) => {
    item.style.backgroundImage = data_start[4][i][0]
})

const sets = document.querySelectorAll('.set');

sets.forEach((item, i) => {
    item.style.backgroundImage = data_start[5][i][0]
})

const new_pos = document.querySelectorAll('.new-pos');

new_pos.forEach((item, i) => {
    item.style.backgroundImage = data_start[6][i][0]
})

const error_stars = document.querySelectorAll('.error-star');

error_stars.forEach((point, i) => {
    point.style.left = data_start[7][i][0];
    point.style.top = data_start[7][i][1];
})

let choose = document.querySelectorAll('.store-choose');

choose.forEach((item) => {
    item.addEventListener('click', () => {
        choose.forEach((point, i) => {
            point.classList.toggle('active')
        })
        //item.classList.toggle('active');
        let cards = document.querySelectorAll('.store-card');
        cards.forEach((card, i) => {
            card.classList.toggle('active')
        })
    })
})

function prev() {
    let new_index = current_index - 1;
    if (new_index == 0){
        track.style.transform = 'translateX(-' + slide_transform_value + 'px)'
        current_index = max_index;
        slide_transform_value = 0;
    }
    if (current_index != new_index){
        current_index = new_index;
        const offset = current_index * window.innerWidth;
        track.style.transform = 'translateX(' + offset + 'px)'
        slide_transform_value = offset
        current_index = new_index;
    }
    if (new_index < 0){
        track.style.transform = 'translateX(-' + slide_transform_value + 'px)'
        current_index = max_index;
        slide_transform_value = 0;
    } 
    bullet(); 
}

function next() {
    let new_index = current_index + 1;
    if (new_index == max_index){
        track.style.transform = 'translateX(' + 0 + 'px)'
        current_index = 0;
        slide_transform_value = max_index * window.innerWidth;
    }
    if (current_index != new_index){
        current_index = new_index;
        const offset = current_index * window.innerWidth;
        track.style.transform = 'translateX(-' + offset + 'px)'
        slide_transform_value = offset
        current_index = new_index;
    }
    if (new_index > max_index){
        track.style.transform = 'translateX(' + 0 + 'px)'
        current_index = 0;
        slide_transform_value = max_index * window.innerWidth;
    } 
    bullet(); 
}

function bullet(){
    bullets.forEach((bullet, i) => {
        if(current_index == i){
            bullet.classList.add('active')
        } else{
            bullet.classList.remove('active')
        }
    })
}

let slide_transform_value = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let max_index = slides.length - 1;
let current_index = 0;
const bullets = document.querySelectorAll('.slider-bullet')

document.querySelector('.btn-prev') && document.querySelector('.btn-prev').addEventListener('click', prev)
document.querySelector('.btn-next') && document.querySelector('.btn-next').addEventListener('click', next)

function prev_af() {
    let new_index_af = current_index_af - 1;
    if (new_index_af == 0){
        track_af.style.transform = 'translateX(-' + slide_transform_value_af + 'px)'
        current_index_af = max_index_af;
        slide_transform_value_af = 0;
    }
    if (current_index_af != new_index_af){
        current_index_af = new_index_af;
        const offset_af = current_index_af * window.innerWidth;
        track_af.style.transform = 'translateX(' + offset_af + 'px)'
        slide_transform_value_af = offset_af
        current_index_af = new_index_af;
    }
    if (new_index_af < 0){
        track_af.style.transform = 'translateX(-' + slide_transform_value_af + 'px)'
        current_index_af = max_index_af;
        slide_transform_value_af = 0;
    } 
    bullet_af(); 
}

function next_af() {
    let new_index_af = current_index_af + 1;
    if (new_index_af == max_index_af){
        track_af.style.transform = 'translateX(' + 0 + 'px)'
        current_index_af = 0;
        slide_transform_value_af = max_index_af * window.innerWidth;
    }
    if (current_index_af != new_index_af){
        current_index_af = new_index_af;
        const offset_af = current_index_af * window.innerWidth;
        track_af.style.transform = 'translateX(-' + offset_af + 'px)'
        slide_transform_value_af = offset_af
        current_index_af = new_index_af;
    }
    if (new_index_af > max_index_af){
        track_af.style.transform = 'translateX(' + 0 + 'px)'
        current_index_af = 0;
        slide_transform_value_af = max_index_af * window.innerWidth;
    } 
    bullet_af(); 
}

function bullet_af(){
    bullets_af.forEach((bullet, i) => {
        if(current_index_af == i){
            bullet.classList.add('active')
        } else{
            bullet.classList.remove('active')
        }
    })
}

let slide_transform_value_af = 0;
const track_af = document.querySelector('.slider-track-af');
const slides_af = document.querySelectorAll('.slide-af');
let max_index_af = slides_af.length - 1;
let current_index_af = 0;
const bullets_af = document.querySelectorAll('.slider-bullet-af')

document.querySelector('.btn-prev-af') && document.querySelector('.btn-prev-af').addEventListener('click', prev_af)
document.querySelector('.btn-next-af') && document.querySelector('.btn-next-af').addEventListener('click', next_af)



let start_mouse_x = 0;
let finish_mouse_x = 0;
let transform_value = 0;
const slider = document.querySelector('.slider');
const set_slider = document.querySelector('.set-slider');
const wed_slider = document.querySelector('.wed-slider');

slider.addEventListener('mousedown', (event) => {
    start_mouse_x = event.pageX;
    finish_mouse_x = 0;
});

slider.addEventListener('mouseup', (event) => {
    finish_mouse_x = event.pageX;
    let delta = finish_mouse_x - start_mouse_x;
    slider.style.transform = 'translateX(' + delta + 'px)'
    transform_value = delta
})

slider.addEventListener('dragstart', (event) => {
    event.preventDefault();
})

set_slider.addEventListener('mousedown', (event) => {
    start_mouse_x = event.pageX;
    finish_mouse_x = 0;
});

set_slider.addEventListener('mouseup', (event) => {
    finish_mouse_x = event.pageX;
    let delta = finish_mouse_x - start_mouse_x;
    set_slider.style.transform = 'translateX(' + delta + 'px)'
    transform_value = delta
})

set_slider.addEventListener('dragstart', (event) => {
    event.preventDefault();
})

wed_slider.addEventListener('mousedown', (event) => {
    start_mouse_x = event.pageX;
    finish_mouse_x = 0;
});

wed_slider.addEventListener('mouseup', (event) => {
    finish_mouse_x = event.pageX;
    let delta = finish_mouse_x - start_mouse_x;
    wed_slider.style.transform = 'translateX(' + delta + 'px)'
    transform_value = delta
})

wed_slider.addEventListener('dragstart', (event) => {
    event.preventDefault();
})



