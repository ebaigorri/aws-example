const express = require('express');
const app =  express();

app.get('/', (req,res) => res.send('Hellos words with express!'))


app.listen(3000);
console.log('server on port 3000')

