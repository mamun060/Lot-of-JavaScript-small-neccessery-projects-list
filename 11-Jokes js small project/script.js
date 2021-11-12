
// const jokeEl =  document.getElementById('joke');
// const jokeBtn = document.getElementById('jokebtn');

// jokeBtn.addEventListener('click', generateJoke);

// generateJoke();

// function generateJoke(){
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then((response)=> response.json())
//     .then((data)=> console.log(data))
// }


// function generateJoke(){
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then((response)=> response.json())
//     .then((data)=>{
//         jokeEl.innerHTML = data.joke;
//     })
// }


// fetch api syntex

// fetch(url).then(response).then(get data and return).catch( get error here)

const jokes = document.getElementById("joke");
const button = document.getElementById("jokebtn");

function showsJokes(){
    const asset = {
        headers: {
            Accept: 'application/json',
        }
    } 
    fetch('https://icanhazdadjoke.com',asset)
    .then((response)=>response.json())
    .then((data)=>{
        jokes.innerHTML = data.joke; 
    })
    .catch(error=>{console.log(error)});
}

showsJokes();

button.addEventListener("click", showsJokes);