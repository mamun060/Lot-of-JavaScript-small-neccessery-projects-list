//2nd step
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

//3rd step
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

//4th step
for( const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// 1st step 
function dragStart() {
    //console.log('drag start')
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisible', 0)
    //this.className = 'invisible'
}
function dragEnd() {
    this.className = 'fill'
}
function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave() {
    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}