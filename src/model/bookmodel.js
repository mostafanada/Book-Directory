const book =require('../Schema/bookSchema')
const findAll=async(req,res)=>
{
    try {
        let books = await book.find({}).populate('author')
        res.json(books);    
    } catch (error) {
        console.log(`this is the ${error}`);
    }
    
}
const deleteBook =async(req,res)=>{
    try {
        let books =await book.findOne({_id:req.params.id}).populate('author')
        let reslute = await books.remove();
        res.json(reslute);
        
    } catch (error) {
        console.log(`This is a error ${error}`)
    }
}
const updateBook =async (req,res)=>{
    try {
        let books =await book.findOne({_id:req.params.id}).populate('author')
        books.set(req.body)
        await books.save()
        res.json(books);
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
const insert =async(req,res)=>{
    try {
        let books =new book(req.body)  
        await books.save()
        res.json(books)
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
const findBook=async(req,res)=>{
    try {
        let books =await book.findOne({_id:req.params.id}).populate('author')
        res.json(books)
    } catch (error) {
        console.log(`This a error ${error}`)
    }
}
module.exports={findAll,deleteBook,updateBook,insert,findBook};

