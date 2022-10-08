const user =require('../Schema/userSchema')

const findAll=async(req,res)=>
{
    try {
        let users = await user.find({}).populate('Books')
        res.json(users);    
    } catch (error) {
        console.log(`this is the ${error}`);
    }    
}
const deleteUser =async(req,res)=>{
    try {
        let users =await user.findOne({_id:req.params.id}).populate('Books')
        let reslute = await users.remove();
        res.json(reslute);
        
    } catch (error) {
        console.log(`This is a error ${error}`)
    }
}
const updateUser =async (req,res)=>{
    try {
        let users =await user.findOne({_id:req.params.id}).populate('Books')
        users.set(req.body)
        users =await users.save()
        res.json(users);
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
const insert =async(req,res)=>{
    try {
        let users =new user(req.body)  
        await users.save()
        res.json(users)
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
const findUser=async(req,res)=>{
    try {
        let users =await user.findOne({_id:req.params.id}).populate('Books')
        res.json(users)
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
module.exports={findAll,deleteUser,updateUser,insert,findUser};
