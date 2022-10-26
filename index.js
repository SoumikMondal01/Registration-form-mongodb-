const express= require('express');
const mongoose=require('mongoose');
const User=require('./models/index')
const app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017/olympics");
const connection=mongoose.connection;
connection.once('open', () => {
    console.log("connection succesful");
})

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('insert');
})

app.post('/insert', (req,res) =>{
    var user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    user.save(() =>{
        res.send("<h1>Data send...</h1>");
    })
})

var server=app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})