const mongoose=require('mongoose')

const FoodSchema=new mongoose.Schema({
    foodtype:{
    type:String,
    required:true
    },
    title:{
        type:String,
        required:true
    },
    side:{
        type:String,
        required:true
    },
    imgurl:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Food',FoodSchema)