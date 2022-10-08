const mongoose =require('mongoose');
// const { stringify } = require('querystring');
const Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/bookstore");

const userScema = new Schema({
    name:
    {
        type :String,
        require:true,
    },
    age:Number,
    Books:[{
        type:Schema.Types.ObjectId,
        ref:'books'
    }]
})

let user=mongoose.model('users',userScema);

module.exports=user;