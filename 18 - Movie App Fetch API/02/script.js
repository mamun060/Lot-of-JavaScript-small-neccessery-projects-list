// api path include
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=07f9a167dce6fdef5d0f09dd14658e14&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/"
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=07f9a167dce6fdef5d0f09dd14658e14&query="'

// 4th step
const main =  document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// 3rd step
getMovies(API_URL)

//2nd step
async function getMovies(url){
    const response = await fetch(url)
    const data = await response.json()

   // console.log(data.results)
   showMovies(data.results)
}


//6th step
function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie)=>{
        const {title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <img src="${IMG_PATH+poster_path}" alt="${title}">
        <div class="movie-info">
            <h4>${title}</h4>
            <span class="${VoteRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h4>overview</h4>x
            ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })

}

//7th step
function VoteRate(rate){
    if(rate>=8){
        return 'green'
    }else if(rate>=5){
        return 'orange'
    }else {
        return 'red'
    }
}

//5th step
form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const searchTerm = search.value 

    if( searchTerm && searchTerm !==''){
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }

})