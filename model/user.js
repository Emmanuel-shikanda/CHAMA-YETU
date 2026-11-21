const { Timestamp } = require('mongodb');
let mongoose = require('mongoose');

let validator = require('validator');

const userSchema = new mongoose.Schema({

fullname:{
 type:String,
 required:[true,"please enter your full name"],
 minlength:[3,'full name must be 3 characters'],
 maxlength:[50,"full name is atmost 50"],
 trim:true,
 validate:{
    validator:function(value){
       return /^[a-zA-Z\s'-]+$/.test(value);
    },
    message:'Name only contains letters spaces hyphens and apostrophies'
 }
},

email:{
type:String,
required:true,
unique:true,
lowercase:true,
trim:true,
validate:{
    validator:function(value){
      return validator.isEmail(value) && value === value.toLowerCase();
    },
    message:"Enter valid email using lowercase letter only"

}
},

phonenumber:{
type:String,
required:true,
uniqe:true,
trim:true,
validate:{
    validator:function(value){
        return/^(\+254|0)[17]\d{8}$/.test(value)
    },
    message:" enter valid kenyan mpesa number"
}
},

password:{
    type:String,
    required:[true,'pliz enter your password'],
    minlength:[8,"password must atleast be 8 characters"],
    validate:{
        validator:function(value){
        return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value)
        },
        message:"Password must contain uppercase, lowercase and a number"
    }
},

role:{
 type:String,
 default:'member',
 enum:['admin','member','manager']
}

},
{timestampsimestamp:true})

const user = mongoose.model('user',userSchema);

module.exports = user;










































