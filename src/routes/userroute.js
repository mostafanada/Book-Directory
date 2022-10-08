const express =require ('express');
const {findAll,deleteUser,updateUser,insert,findUser}=require('../model/usermodel');

const userRoute =express.Router();

userRoute.get('/test',(req,res)=>{
    res.send(`3eb ya ma3alem tesho5 feya`);    
})
userRoute.get('/findAll',findAll);
userRoute.get('/findOne/:id',findUser)
userRoute.post('/insert',insert)
userRoute.put('/update/:id',updateUser)
userRoute.delete('/delete/:id',deleteUser)
module.exports= userRoute;