const mongoose=require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/katha',{
        useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
    })
    .then(()=>{
        console.log('connected to DB')
    })
    .catch((err)=>{
        console.log(err)
    })

}

module.exports=configureDB