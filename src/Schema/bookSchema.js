// const connection=require('../databaseconnection');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/bookstore");
const bookSchema=new mongoose.Schema({
    title: 
    {
        type:String,
        require :true,
        trim:true
    },
    author : 
    {
        type : Schema.Types.ObjectId,
        require: true,
        ref:'users' 
    },
    publichYear:{
        type:Date,
        default:Date.now,
        require:true
    },
    updateAt:
    {
        type:Date,
        default:Date.now,
        require:true        
    },
    rating:Number,
    pages:Number,
    genres:[]
})

let book=mongoose.model('books',bookSchema);

module.exports=book;