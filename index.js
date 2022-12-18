const express = require('express')
const app = express()

app.use('/home', express.static(__dirname + '/index.html'));

app.listen(8080, ()=>{
    console.log("Servidor Iniciado")
})