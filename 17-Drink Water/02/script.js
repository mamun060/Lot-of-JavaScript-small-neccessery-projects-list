// step-1
const smallCups =  document.querySelectorAll('.cup-small');
const liters =  document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


//step-2
smallCups.forEach((cup, index) => {
    //console.log(index)
    cup.addEventListener('click', ()=>hightlightCups(index))
})

//step-3
function hightlightCups(index){
    //console.log(index)
    smallCups.forEach((cup, index2)=>{
        
    })
}




