const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use('/home', express.static(__dirname + '/index.html'));

app.get("/",(req, res) =>{
    res.json({
        message: "Hello Word"
    })
})

app.listen(port, ()=>{

    console.log("Servidor Iniciado", port)
})