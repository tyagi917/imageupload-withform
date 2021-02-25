const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const userRouter = require('./routes/users.js');

mongoose.connect('mongodb://localhost:27017/upload',{
	useNewUrlParser:true
})
mongoose.connection.on('connected',()=>{
    console.log("connection is succesfuuly");
});
mongoose.connection.on('connect',()=>{
    console.log('error');

});
const app=express();
const port=5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.get('/',(req,res)=>{
	res.send("hello");
})
app.use('/users', userRouter);
app.listen(port,console.log(`port running on${port}`));