const express = require('express');
const { get } = require('http');
const app = express();
const path = require('path');



app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/home.html'));
});
app.use(express.static('public'));