//1st step
const body = document.body
const slides =  document.querySelectorAll('.slider');
const leftBtn = document.getElementById('left');
const RightBtn = document.getElementById('right');

// 2nd step
let activeSlide = 1


// 6th step

RightBtn.addEventListener('click', ()=>{
    activeSlide++

    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

// 7th step

leftBtn.addEventListener('click', ()=>{
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})
// 4th step
setBgToBody()

// 3rd step
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

//5th step
function setActiveSlide(){
    slides.forEach((slide)=> {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}