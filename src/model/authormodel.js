const author =require('../Schema/authorSchema')
const deleteAuthor =async(req,res)=>{
    try {
        let authors =await author.findOne({_id:req.params.id}).populate('Books')
        let reslute = await authors.remove();
        res.json(reslute);
        
    } catch (error) {
        console.log(`This is a error ${error}`)
        res.status(404);
    }
}
const updateAuthor =async (req,res)=>{
    try {
        let authors =await author.findOne({_id:req.params.id}).populate('Books')
        authors.set(req.body);
        await authors.save()
        res.json(authors);
    } catch (error) {
        console.log(`This a error ${error}`)
        res.status(404);
    }
}
const insertAuthor=async (req,res)=>{
    try {
        let authors =new author(req.body)
        authors =await authors.save()
        authors=await author.findOne({_id: authors._id}).populate('Books');
        res.json(authors);
    } catch (error) {
        console.log(`This a error ${error}`)
        res.status(404);
    }
}
const findAuthor=async(req,res)=>{
    try {
        let authors=await author.findOne({_id:req.params.id}).populate('Books');
        res.status(200).json(authors);
    } catch (error) {
        console.log(`This a error ${error}`)
        res.status(404);
    }
}

module.exports={updateAuthor,deleteAuthor,insertAuthor,findAuthor};

