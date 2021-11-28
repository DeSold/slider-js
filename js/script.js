
const  prev = document.getElementById('btn-prev'),
       next = document.getElementById('btn-next'),
       slides = document.querySelectorAll('.project-slide'),
       cityes = document.querySelectorAll('.projects-item'),
       information = document.querySelectorAll('.projects-block-info'),
       dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeCity = n => {
    for(city of cityes) {
        city.classList.remove('active');
    }
    cityes[n].classList.add('active');
}

const activeInfo = n => {
    for(info of information) {
        info.classList.remove('active');
    }
    information[n].classList.add('active');
}

const nextSlide = () => {
    if(index ==slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
        activeCity(index);
        activeInfo(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
        activeCity(index);
        activeInfo(index);
    }
}

next.addEventListener('click', nextSlide);

const prevSlide = () => {
    if(index == 0) {
        index = (slides.length -1);
        activeSlide(index);
        activeDot(index);
        activeCity(index);
        activeInfo(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
        activeCity(index);
        activeInfo(index);
    }
}

prev.addEventListener('click', prevSlide);

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
        activeCity(index);
        activeInfo(index);
    })
})

cityes.forEach((item, indexCity) => {
    item.addEventListener('click', () => {
        index = indexCity;
        activeSlide(index);
        activeDot(index);
        activeCity(index);
        activeInfo(index);
    })
})