const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('HI EVERYONE GOOD MORNING TO ALL')
})


app.listen(8080,()=>console.log('server running...'))