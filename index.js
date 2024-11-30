import express from "express";
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get('/produtos', (req, res) => {
    res.sendFile(__dirname+"/produtos.html");
})

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname+"/sobre.html");
})

app.listen(8080, function (){
    console.log("Servidor rodando em http://localhost:8080");
});