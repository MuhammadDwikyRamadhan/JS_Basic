// Operasi Function
// function hello(name) {
//     console.log("Hello "+name);
// }
// hello("John");

// Asynchronous
// getting data from api
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(json => console.log(json))
fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => console.log(json))