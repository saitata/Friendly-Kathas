
const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const bcryptjs=require('bcryptjs')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 6,
        maxlength: 64,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        validate: {
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
    }, 
    password: {
        type: String, 
        required: String,
        minlength: 8,
        maxlength: 128
    },
    phoneNumber:{
               type:Number,
               required:true,
               minlength:10,
               unique:true
           }
})
userSchema.pre('save', function(next){
    bcryptjs
      .genSalt()
      .then((salt) => {
        bcryptjs.hash(this.password, salt).then((encrypted) => {
          this.password = encrypted
          next()
        }).catch(err => res.json(err))
      }).catch((err) => res.json(err))
  })


const User = mongoose.model('User', userSchema)

module.exports = User