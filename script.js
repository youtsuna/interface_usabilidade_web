'use strict';

/* Manter hero abaixo da navbar */
document.addEventListener('DOMContentLoaded', function () {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  document.querySelector('.hero').style.paddingTop = navbarHeight + 'px';
});

/* Linkar o botão de explorar */
document.getElementById('exploreButton').addEventListener('click', function () {
  document.getElementById('interface').scrollIntoView();
});

/* Numeração do slide */
let slideCounter = 0;

/* Slides da Interface */
const slides = {
  slide1: [
    document.querySelector('.interface-img'),
    document.querySelector('.interface-texto'),
  ],
  slide2: [
    document.querySelector('.usabilidade-img'),
    document.querySelector('.usabilidade-texto'),
  ],
  slide3: [
    document.querySelector('.responsividade-img'),
    document.querySelector('.responsividade-texto'),
  ],
};

/* Setas do slider */
const setaAnterior = document.querySelector('.icone.anterior');
const setaProximo = document.querySelector('.icone.proximo');
const setaAnteriorMob = document.querySelector('.icone.anterior.mobile');
const setaProximoMob = document.querySelector('.icone.proximo.mobile');
const setas = [setaAnterior, setaProximo];
const setasMob = [setaAnteriorMob, setaProximoMob];

function selecionarSeta() {
  setas.forEach((seta) => {
    seta.addEventListener('click', () => {
      if (seta === setaAnterior && slideCounter > 1) {
        slideCounter -= 1;
        voltarSlide(slideCounter);
      } else if (seta === setaProximo && slideCounter < 3) {
        slideCounter += 1;
        passarSlide(slideCounter);
      }
    });
  });
}

function selecionarSetaMob() {
  setasMob.forEach((seta) => {
    seta.addEventListener('click', () => {
      if (seta === setaAnteriorMob && slideCounter > 1) {
        slideCounter -= 1;
        voltarSlide(slideCounter);
      } else if (seta === setaProximoMob && slideCounter < 3) {
        slideCounter += 1;
        passarSlide(slideCounter);
      }
    });
  });
}

/* Dots do slider */
const sliders = document.querySelectorAll('.slide');

function sliderDots() {
  sliders.forEach((slider, index) => {
    slider.addEventListener('click', () => {
      slideCounter = index + 1; // ajuste para corresponder à contagem iniciando de 1
      mostrarSlide(slideCounter);
    });
  });
}

/* Funções de voltar e passar o slide */
function voltarSlide(num) {
  Object.values(slides).forEach((slide) => {
    slide[0].classList.add('oculto');
    slide[1].classList.add('oculto');
  });
  sliders.forEach((slider) => {
    slider.classList.remove('ativado');
  });

  slides['slide' + num][0].classList.remove('oculto');
  slides['slide' + num][1].classList.remove('oculto');
  sliders[num - 1].classList.add('ativado');
}

function passarSlide(num) {
  Object.values(slides).forEach((slide) => {
    slide[0].classList.add('oculto');
    slide[1].classList.add('oculto');
  });
  sliders.forEach((slider) => {
    slider.classList.remove('ativado');
  });

  slides['slide' + num][0].classList.remove('oculto');
  slides['slide' + num][1].classList.remove('oculto');
  sliders[num - 1].classList.add('ativado');
}

function mostrarSlide(num) {
  Object.values(slides).forEach((slide) => {
    slide[0].classList.add('oculto');
    slide[1].classList.add('oculto');
  });
  sliders.forEach((slider) => {
    slider.classList.remove('ativado');
  });

  slides['slide' + num][0].classList.remove('oculto');
  slides['slide' + num][1].classList.remove('oculto');
  sliders[num - 1].classList.add('ativado');
}

function toggleMobileMenu() {
  var menu = document.getElementById('menuMobileOpcoes');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}

function obsMenuMob() {
  const menu = document.querySelector('.menu-nav-mobile.mobile');
  menu.addEventListener('click', () => {
    toggleMobileMenu();
  });
}

passarSlide(1);
selecionarSeta();
selecionarSetaMob();
sliderDots();
obsMenuMob();
