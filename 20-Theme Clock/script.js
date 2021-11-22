// 1st step
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

// 2nd step
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//3rd step
toggle.addEventListener('click', (event)=>{
    const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        event.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        event.target.innerHTML = 'Light Mode'
    }
})

//4th step
function setTime(){
    const time = new Date();
    //console.log(time);

    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    //10th step
    const ampm =  hours >= 12 ? 'PM' : 'AM';

    //main functionality and 7th step work
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    //9th step 
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    dateEl.innerHTML = `${daysInWeek[day]}, ${months[month]} <span class="circle">${date}</span>`

}

//6th step
// got it from stack overflow
const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min ;
}

// 5th step
setTime();

//8th step
setInterval(setTime, 1000);