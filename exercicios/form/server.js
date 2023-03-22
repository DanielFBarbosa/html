const express = require('express')
const app = express()
const bodyParsey = require('body-parser')

app.use(bodyParsey.urlencoded({estendend:true}))
app.post('/usuarios', (req, resp)=>{
    console.log(req.body)
    resp.send('Parabéns!!!')
})

app.listen(3003)