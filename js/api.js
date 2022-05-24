// GET DATA
const getBtn = document.querySelector("#getReq")

const getData =() => {
    fetch("https://reqres.in/api/users?page=2").then (b => {
    //  return b.json;
     console.log(b);
    })
}

getBtn.addEventListener("click",getData)

// POST DATA
const postBtn = document.querySelector("#postReq")

const postData =() => {
    fetch("https://reqres.in/api/users?page=2").then (b => {
    //  return b.json;
     console.log(b);
    })
}

postBtn.addEventListener("click",postData)

