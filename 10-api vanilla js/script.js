/** const accessData = () => {

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/users/");

xhr.onload = () => {
  let data = xhr.response;
  console.log(JSON.parse(data))
 }

 xhr.onerror = () => {
   console.log('Sorry we can not find');
  }

  xhr.send();
}

accessData(); */


function fetchData(){
    fetch("https://reqres.in/api/users/")
    .then(response=>{
    if(!response.ok){
    throw Error("Error");
    }
    return response.json();
    })
    .then(data=>{
    const html = data.data
    .map(user=>{
    return `
    <div>
    <h2>${user.first_name}</h2>
    <p>${user.email}</p>
    <p><img src="${user.avatar}" alt="${user.first_name}"></p>
    </div>`;
    })
    .join("");
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(errror=>{
    console.log(error);
    })
    }
    
    fetchData();