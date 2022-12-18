const express = require('express')
const app = express()

const port = process.env.PORT || 80

app.use('/', 
    express.static(
        './index.html'
        )
    
)

app.listen(port, ()=>{

    console.log("Servidor Iniciado", port)
})