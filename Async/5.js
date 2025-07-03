function fetchData(url){
    fetch(url).then(resolve => resolve.json()).then(data => {
        console.log(`Received data from ${url}`);
        console.log(data);
    })
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")