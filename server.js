const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('HI EVERYONE')
})


app.listen(8080,()=>console.log('server running...'))