// const jwt = require('jsonwebtoken')
// const User = require('../models/user')
// const authenticateUser = (req, res, next) => {
//     console.log(req.header('Authorization'),'auth header')
//     const token = req.header('Authorization')
//     let tokenData 
//     try {
//         tokenData = jwt.verify(token, 'welcome')
         
//         User.findById(tokenData._id)
//             .then((user) => {
//                 // console.log(user,'user auth')
//                 req.user = user 
//                 next()
//             })
//             .catch((err) => {
//                 res.json(err)
//             })
       
//     } catch(e) {
//         res.json(e.message)
//     }
// }



// module.exports = {
//     authenticateUser
// }



const jwt = require('jsonwebtoken')
const User = require('../models/user')
const authenticateUser = (req, res, next) => {
    //console.log(req.header('Authorization'),'auth header')
    if(req.header('Authorization')){
    const token = req.header('Authorization')
    let tokenData 
    try {
        tokenData = jwt.verify(token, 'welcome')
        User.findById(tokenData._id)
            .then((user) => {
                req.user = user 
                next()
            })
            .catch((err) => {
                res.json(err)
            })
       
    } catch(e) {
        res.json(e.message)
    }
}

else{
    res.json({
        errors:'token not provided'
    })
}
// const authorizeUser = () => {

// }
}
module.exports = {
    authenticateUser
}