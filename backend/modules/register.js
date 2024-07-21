const mongoose=require('mongoose');

const registerSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
})


const registerUser=mongoose.model('registerUser',registerSchema);
module.exports=registerUser
