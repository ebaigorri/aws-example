const express = require('express');
const app =  express();

app.get('/', (req,res) => res.send('<H1>Express c HTML</H1>'))


app.listen(3000);
console.log('server on port 3000')

