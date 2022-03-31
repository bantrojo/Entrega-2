// import mongoose from 'mongoose';
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Bantrojo:15432@codercluster18335.vh3wc.mongodb.net/ecommerce?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},error=>{
    if(error) throw new error ('Cannot connect to mongodb')
    console.log("Base conectada")
})

module.exports={
    connectWithMongo,
};