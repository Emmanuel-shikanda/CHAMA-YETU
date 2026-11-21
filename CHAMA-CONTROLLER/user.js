
let User = require("../model/user");

let bcrypt = require('bcrypt');


module.exports.register_get= function(req,res){

res.render('register');

}

module.exports.register_post= async function(req,res){

let {
 fullname,
 email,
 phonenumber,
 password,
 confirmpassword,
 terms
} = req.body



try{

// terms and condition
if(terms!=='on'){

return res.status(400).render('register',{
    error:'you must accept terms and conditions'
});
}



//password check
if(password !== confirmpassword){

   return res.status(400).render('register',{
     error:'password do not match'
    })
}

//pasword-hashed

let hashedPassword = await bcrypt.hash(password, 12);



//create user 

let newUser = new User({
    fullname:fullname,
    email:email,
    phonenumber:phonenumber,
    password:hashedPassword
})

console.log('trying-to-save-data')

await newUser.save()

console.log("data-saved")

return res.redirect('/login')

}
catch(err){

    if(err.code === 11000){
 return  res.status(400).render('register',{
        error:"Email or phonenumber already exist"
    })
    }

    if(err.name === 'validationError'){
     
        let errors={}

        for(let key in err.errors){
         errors[key]=err.errors[key].message

        }
       return res.status(400).render('register',{
        errors:errors
       })

    }

    res.status(500).render('register',{
       error:'something went wrong'
    })



}



}

module.exports.login_get=function(req,res){

res.render('login');

}

module.exports.login_post=function(req,res){



}