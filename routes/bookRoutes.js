const express = require('express')
const router = express.Router()
const books = require('../books')

// /books 
router.get('/',(req,res)=>{
    //res.send("Get all products")
   
   try {

    res.status(200).json(books)
   }catch (error){
    res.status(404).json({error:error.message})

   }

})
//get book by id
router.get('/:id',(req,res)=>{
    try{
        const bookID = parseInt(req.params.id)
        const book= books.find(bo=>bo.id===bookID)
        if (!book) {
            // Return 404 if the book is not found
            return res.status(404).json({ error: `Book with ID ${bookID} not found` });
        }
        res.status(200).json(book);
    }catch(error){
        res.status(404).json({error:error.message})

        
    }
})


module.exports = router 