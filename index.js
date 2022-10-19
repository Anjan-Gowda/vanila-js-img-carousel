// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const _allSlides  = document.querySelectorAll(".slide");

_allSlides.forEach((value,index)=>{
  value.style.transform= `translateX(${index * 100}%)`;
  })


const nextSlide= document.querySelector('.btn-next')
let currSlide=0;
let maxSlide=_allSlides.length-1;

nextSlide.addEventListener("click", function () {
  if(currSlide===maxSlide){
    currSlide=0;
  }else{
    currSlide++;
  }
  //   move slide by -100%
  _allSlides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
  });
})


const prevSlide= document.querySelector('.btn-prev')

prevSlide.addEventListener("click", function () {
  if(currSlide===0){
    currSlide=maxSlide;
  }else{
    currSlide--;
  }
  //   move slide by 100%
  _allSlides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
  });
})