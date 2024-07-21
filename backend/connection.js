const mongoose=require('mongoose');

async function mongoshConnection(url){
  mongoose.connect(url)
  .then(reuslt=> {`<p>server started</p>`})
}

module.exports={
  mongoshConnection,
}