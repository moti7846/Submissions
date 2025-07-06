// promise hell
// fetch('https://jsonplaceholder.typicode.com/users/1&#39;)
//   .then(response => response.json())
//   .then(user => {
//     console.log('User:', user.name);
//     fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//       .then(response => response.json())
//       .then(posts => {
//         console.log('Posts count:', posts.length);
//         fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`)
//           .then(response => response.json())
//           .then(comments => {
//             console.log('Comments count:', comments.length);
//             fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}/albums`)
//               .then(response => response.json())
//               .then(albums => {
//                 console.log('Albums count:', albums.length);

//                 fetch(`https://jsonplaceholder.typicode.com/albums/${albums[0].id}/photos`)
//                   .then(response => response.json())
//                   .then(photos => {
//                     console.log('Photos count:', photos.length);
//                     console.log('First photo:', photos[0].title);
//                   });
//               });
//           });
//       });
//   });
async function fetchData() {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1&#39');
        const user = await userResponse.json();

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        const posts = await postsResponse.json();

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`);
        const comments = await commentsResponse.json();

        const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}/albums`);
        const albums = await albumsResponse.json();

        const photosResponse = await fetch(`https://jsonplaceholder.typicodee.com/albums/${albums[0].id}/photos`);
        const photos = await photosResponse.json();
        console.log('User:', user.name);
        console.log('Posts count:', posts.length);
        console.log('Comments count:', comments.length);
        console.log('Albums count:', albums.length);
        console.log('Photos count:', photos.length);
        console.log('First photo:', photos[0].title);
    } catch (error) {
        console.log(error);
    }
}
// fetchData();
console.log("EndFile")



// example use fetch post method with headers

// fetch("https://jsonplaceholder.typicode.com/todos/1&quot;, {
//     headers: {
//         "Content-type": "application/json"
//     },
//     method: "POST",
//     body: JSON.stringify({
//         username: "moshe7654",
//         password: "lhdflkhdksdcdsc"
//     })
// })
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })