const express = require('express');
const { get } = require('http');
const app = express();
const path = require('path');



app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.post('/', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/register', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.post('/registro', (require, response) => {
    response.send("Información recibida");
});

app.get('/login', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.use(express.static('public'));






