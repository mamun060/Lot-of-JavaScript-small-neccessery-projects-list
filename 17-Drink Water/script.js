const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percentage  = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()  // this function work with Big cup for fullfil cup

smallCups.forEach((cup, index)=>{
    // akhon amra console check korle amader sob gula index pabo
    //console.log(index);
    cup.addEventListener('click', ()=>{
        highlightCups(index)
    })
})

function highlightCups(index){
    // akhon ai console a click korle amara amader index no ta pabo 
    //console.log(index)

    // now I check right index click value and remove index value
    if(smallCups[index].classList.contains('full') &&
     !smallCups[index].nextElementSibling.classList.contains('full')
    ){
        index--
    }

    // each forecah loop check right no index click and wrap each index full css classes
    smallCups.forEach( (cup, index2)=>{
        if(index2 <= index){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    // just dorlam sob gula cup ke
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length  // total cup we got here

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerHTML = `${fullCups / totalCups * 100}%`
    }

    if( fullCups ===  totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else {
        remained.style.visibility = 'visible'
        listers.innerHTML = `${ 2 - (250 * fullCups / 1000)}` // when user fullfil big cups the big cup substruct their small cup value
    }
}
