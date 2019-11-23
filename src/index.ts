import http, { Server } from "http";
import app from "./app";

const port: number = parseInt(process.env.PORT || "") || 3000;

const server: Server = http.createServer(app);

server.listen(port);

console.log(`Server is running now at http://localhost:${port}`);
