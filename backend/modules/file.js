const mongoose = require('mongoose');

const fileSchema= new mongoose.Schema({
  files:{
    type:String
  }
})


const fileuploaded=mongoose.model('fileuploaded',fileSchema);

module.exports=fileuploaded;