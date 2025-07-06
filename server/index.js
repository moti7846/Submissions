import http from "http"
import { buffer } from "stream/consumers";

const PORT = 3001;

const server = http.createServer((req, res) => {
    const body = [];
    req.on("data", (chunk => {
        console.log(chunk);
        body.push(chunk);
    }))
    req.on("end", () => {
        const data = JSON.parse(Buffer.concat(body).toString())
        console.log(data);
        res.end(JSON.stringify(data))
    })
    req.on("error", err => {
        console.log(`Request error: `, err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});