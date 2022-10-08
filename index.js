const express= require('express');
const {json}= require('express');
const bookRoute=require('./src/routes/bookroute')
const userRoute =require('./src/routes/userroute')
const logger =require('morgan')

const server = express();

const port=process.env.PORT ||1000;
server.use(
    json(),
    logger("dev")
)

//To test server
server.get('/test',(req,res)=>{
    res.send(`Holle from your second home`);
})
//To test bookRouter
server.use('/book',bookRoute);
server.use('/user',userRoute);

server.listen(port,()=>{
    console.log(`Eshta3'al ya negm el nogom`);
})