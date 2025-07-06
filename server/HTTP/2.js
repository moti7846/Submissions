import http from "http"

const PORT = 3001;

const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.headers['content-type'] === 'application/json'){
        res.end("JSON accepted")
    }
    else{ 
        res.end("Unsupported request")
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});