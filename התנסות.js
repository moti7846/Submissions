// fetch('https://api-kodkod.onrender.com/api/data').then(res => 
//     res.json()
// ).then(a => {console.log(a);})

// fetch('https://api-kodkod.onrender.com/api/data?limit=5').then(res => 
//     res.json()
// ).then(a => {console.log(a);})

fetch('https://api-kodkod.onrender.com/api/data?limit=50&api_key=d38974bf-8100-496a-9e27-2a5d96889716').then(res => 
    res.json()
).then(a => {console.log(a);})

// הוצאת API
// fetch('https://api-kodkod.onrender.com/api/generate-key', {
//   method: 'POST'
// })
//   .then(res => res.json())
//   .then(data => console.log(data));