// got id from html file
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// focus textarea
textarea.focus();

// add event html textarea with keyup
textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)

    // set time out logic 
     if(e.key === 'Enter'){
         setTimeout( ()=>{
             e.target.value = ''
         }, 100)
         randomSelect();
     }
})

// event listener data will add here to create tags list
function createTags(input){

    // here we got data from plain strings using split()
    const tags =  input.split(',').filter(tag=>tag.trim() !== '')
    .map(tag => tag.trim())

   // console.log(tags);

   // here we include data from js to html
   tagsEl.innerHTML = ''

   // here we make foreach for loop every tags and show the tags
   tags.forEach(tag=>{
       const tagEl = document.createElement('span')
       tagEl.classList.add('tag')
       tagEl.innerHTML = tag
       tagsEl.appendChild(tagEl)
   })
   
}


function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100);

    }, times * 100);
}


function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

