const express = require('express')
const app = express()

import {} from 'path'

const port = process.env.PORT || 80

app.use('/', 
    express.static(
        './public'
        )
    
)

app.listen(port, ()=>{
    console.log("Servidor Iniciado", port)
})