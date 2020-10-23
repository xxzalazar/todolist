const Joi = require('joi')

const validator={
    validateNewUser: (req, res, next)=>{
        const schema = Joi.object({
            username: Joi.string().alphanum().min(3).max(30),
            mail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
            password: Joi.string().trim().pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/,'password'),
            name: Joi.string().min(3).max(10),
        })
    const validation = schema.validate(req.body.username, req.body.email, req.body.password, req.body.name, req.body.surname,{abortEarly: false} )
    if(validation.error == undefined){
        console.log(validation.error)
        return res.json({
            success: false,
            error: 'error en la validacion de los datos',
            message: validation.error
        }) 
    }else{
        next()
    }
    }
}
module.exports= validator