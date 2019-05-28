// import express module
var express = require('express');

// cretate the rest object
var app = express();

// app is the master object to use create the Rest API's

app.get('/', (req, res)=>{
    res.send('Welcome express get default API');
});

app.get('/product', (req, res)=>{
    res.send('Welcome express get product API');
});
app.post('/', (req,res)=>{
    res.send('Welcome express post default API')
});
app.post('/product', (req,res)=>{
    res.send('Welcome express post product API')
});
app.put('/',(req,res)=>{
    res.send('Welcome express put default API');
});

app.put('/employee',()=>{
    res.send('Welcome express put employee API');
});
app.delete('/employee',(req,res)=>{
    res.send('delete successfully employee');
});
app.delete('/product',(req,res)=>{
    res.send('delete successfully product');
});

app.listen(3000);
console.log('server lisrening port 3000');