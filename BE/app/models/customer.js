const mongoose=require('mongoose')
const Schema=mongoose.Schema
const customerSchema=new Schema({
    name:{
        type: String, 
        required: true, 
        minlength: 6,
        maxlength: 64,
        unique: true
    },
    phoneNumber:{
        type:Number,
        required:true,
        minlength:10,
        unique:true
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User',
    }
    
})
const Customer=mongoose.model('Customer',customerSchema)

module.exports=Customer