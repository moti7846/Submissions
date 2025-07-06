import http from "http"

const PORT = 3002;

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/hello'){
        res.end("Hello from GET")
    }
    else if(req.method === 'POST' && req.url === '/hello'){ 
        res.end("Hello from POST")
    }
    else{ 
        res.end("Not supported")
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});