//1st step
const canvas = document.getElementById('canvas');
//10th step
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const ctx = canvas.getContext('2d');

//3rd step
let size = 20;
//11th step
colorEl.value = 'black'
let color = colorEl.value

//6th step
let isPressed = false;
let x;
let y;

//7th step
canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;
    x = e.offsetX
    y = e.offsetY
    //console.log(isPressed, x, y);
})
//8th step
canvas.addEventListener('mouseup', (e)=>{
    isPressed = false;
    x = undefined
    y = undefined
    //console.log(isPressed, x, y);
})
//9th step
canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        //console.log(x2,y2)
        drawCircle(x2 , y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

//2nd step
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
//5th step
function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1 , y1);
    ctx.lineTo(x2 , y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
//4th step 
// drawCircle(100, 200);
// drawLine(300, 300, 200, 300);

//12th step
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))