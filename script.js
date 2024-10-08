let slides = document.querySelectorAll('.reviews .flex .slides-container .slide');
let index =0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

let monthBtn = document.querySelector('.pricing .toggle-buttons  .month-btn');
let yearBtn = document.querySelector('.pricing .toggle-buttons .year-btn');
let monthlyPlan = document.querySelectorAll('.pricing .box-container .box .price.month');
let yearlyPlan = document.querySelectorAll('.pricing .box-container .box .price.year');

monthBtn.onclick=()=>{
    monthBtn.classList.add('active');
    yearBtn.classList.remove('active');
// display monthly plans and hide yearly plan
    monthlyPlan.forEach(mo =>{mo.style.display='block';});
    yearlyPlan.forEach(yr =>{yr.style.display ='none';});
}
yearBtn.onclick=()=>{
    monthBtn.classList.remove('active');
    yearBtn.classList.add('active');

    monthlyPlan.forEach(mo =>{mo.style.display='none';});
    yearlyPlan.forEach(yr =>{yr.style.display ='block';});
}

