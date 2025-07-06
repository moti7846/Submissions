import http from "http"

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`method: ${req.method}`);
    console.log(`url: ${req.url}`);
    console.log(`http: ${req.httpVersion}`);
    res.end("hello !")

})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});