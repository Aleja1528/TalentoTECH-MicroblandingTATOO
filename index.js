

const express = require('express');

// Crear una aplicación de Express
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome Talento Tech');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000 EN http://localhost:3000');
});