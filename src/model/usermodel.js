const user =require('../Schema/userSchema')
const jwt =require('jsonwebtoken')
const handleError=(err)=>{
    console.log(err.message,err.code)
    let errors={email:'',password:''}
    if(err.code===11000)
    {
        errors.email='That email is already exist'
        return errors
    }
    if(err.message.includes('user validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message
        })
    }
    if(err.message==='incorrect password')
    {
        errors.password='That password incorrect'
    }
    if(err.message==='incorrect email')
    {
        errors.password='That email is not exist'
    }
    return errors
}
const createToken=(id)=>{
    return jwt.sign({id},'Secret salt',{
        expiresIn:3*24*60*60
    })
}
//Before update the project
// const findAll=async(req,res)=>
// {
//     try {
//         let users = await user.find({}).populate('Books')
//         res.json(users);    
//     } catch (error) {
//         console.log(`this is the ${error}`);
//     }    
// }
const deleteUser =async(req,res)=>{
    try {
        let users =await user.findOne({_id:req.params.id})
        let reslute = await users.remove();
        res.json(reslute);
        
    } catch (error) {
        console.log(`This is a error ${error}`)
    }
}
const updateUser =async (req,res)=>{
    try {
        let users =await user.findOne({_id:req.params.id})
        users.set(req.body)
        users =await users.save()
        res.json(users);
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
const signup =async(req,res)=>{
    const {email ,password}=req.body
    try {
        const users=await user.create({email,password})
        const token=createToken(users._id)    
        res.cookie('jwt',token,{httpOnly:true,maxAge:24*60*60*3*1000})
        res.status(200).json({users:users._id})
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
// Before uptade the project
// const findUser=async(req,res)=>{
//     try {
//         let users =await user.findOne({_id:req.params.id}).populate('Books')
//         res.json(users)
//     } catch (error) {
//         console.log(`This a error ${error}`)
//     }
// }
const login=async(req,res)=>{
    const {email,password}=req.body
    try {
        const users=await user.login(email,password)
        const token=createToken(users._id)
        res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000})
        res.status(200).json({users:users._id})
    } catch (err) {
        const error=handleError(err);
        res.status(400).send(error);
    }
}
const logout=(req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.send('Done')
}
module.exports={logout,login,deleteUser,updateUser,signup};
