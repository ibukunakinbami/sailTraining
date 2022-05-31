const form = document.querySelector(#form);
form



// fecth data
fetch("http://httpbin.org/post",{
 method: "POST",
 body: payload,
})
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

})