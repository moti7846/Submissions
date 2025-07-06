//בקשת get
fetch('http://localhost:3000/api/getData').then(res => 
        res.json()
).then(a => {console.log(a);})

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => 
//         res.text()
// ).then(a => {console.log(a);})

// //בקשת post
// fetch('https://jsonplaceholder.typicode.com/todos/1',{
//     headers : {
//         "Content-type" : "application/json"
//     },
//     method : "POST",
//     body : 

// })
// fetch('http://localhost:3000/api/setData', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name: 'moti', age: 22 })
// })
// .then(response => response.json())
// .then(data => console.log('תשובה מהשרת:', data));

// fetch("https://reqres.in/api/users&#39", {
//   method : 'POST',
//   headers : { 'Content-Type': 'application/json'},
//   body: JSON.stringify({ name: 'nisim', job: 'student'})}).then(res => res.json()).then(data => console.log(data));

//דוגמה לפוסט
// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'x-api-key' : 'reqres-free-v1'
//   },
//   body: JSON.stringify({
//     name: 'moti',
//     job: 'student ;-)'
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log(data));