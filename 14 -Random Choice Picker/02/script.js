const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)

    // add condition for check enter press for random picker
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input){
   // console.log(input)
   const tags = input.split(',').filter(tag =>tag.trim() !== '').map( tag => tag.trim())
   //console.log(tags);

   tagsEl.innerHTML = ''

   tags.forEach( tag => {
       const tagEl = document.createElement('span');
       tagEl.classList.add('tag')
       tagEl.innerHTML = tag 
       tagsEl.appendChild(tagEl)
   })
}

// initialize randomSelect method logic
function randomSelect(){
   // console.log(123)

   const times = 30 //30 times store

   const interval = setInterval(() => {
       const randomTag = pickRandomTag()

       // highlight randomTag
       highLightTag(randomTag)

       // 100 mili secound por por tag gula unhighlist hoye jabe
       setTimeout( ()=>{
        unHighLightTag(randomTag)
       },100)
   }, 100);


   setTimeout( ()=>{
       clearInterval(interval)

       setTimeout( ()=>{
           const randomTag = pickRandomTag();

           highLightTag(randomTag)
       }, 100)

   }, times * 100 )
}

// this function work for select tag calculate
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length )]
}

// highLightTag
function highLightTag(tag) {
    tag.classList.add('highlight')
}

// unHighLightTag
function unHighLightTag(tag) {
    tag.classList.remove('highlight')
}
