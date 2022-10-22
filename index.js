const express= require('express');
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const {requireAuth,checkUser}=require('./src/middleware/aurhmiddleware')
const badyparser=require('body-parser');
const bookRoute=require('./src/routes/bookroute')
const userRoute =require('./src/routes/userroute')
const authorRoute =require('./src/routes/authorroute')

const logger =require('morgan')

const server = express();

const port=process.env.PORT ||1000;
server.use(
    express.json(),
    logger("dev"),
    badyparser()
)
server.use(cookieParser())
server.get('*',checkUser);
//To test server
server.get('/test',(req,res)=>{
    res.send(`Holle from your second home`);
})
//To test bookRouter
server.use('/book',bookRoute);
server.use('/user',userRoute);
server.use('/author',authorRoute);

let connection=async()=>{
    try {
        await mongoose.connect("mongodb+srv://Mostafa_N:test123@auth.ubi9wmj.mongodb.net/?retryWrites=true&w=majority")
        server.listen(port,()=>{
            console.log('starting ...')
        })
    } catch (error) {
        console.log(`This is a ${error}`);
    }
}
connection();