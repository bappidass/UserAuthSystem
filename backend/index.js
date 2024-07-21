const express=require('express');
const {mongoshConnection}=require('./connection');
const app=express();
const cors=require('cors')
const port =8010;
// const mongoshURL='mongodb://127.0.0.1:27017/mern_02';
const mongoshURL='mongodb+srv://bappi_01:bappi_01@bappi.cjcngsb.mongodb.net/?retryWrites=true&w=majority&appName=bappi';
mongoshConnection(mongoshURL);
app.use(cors())
app.use(express.json())
const UserRouter=require('./routs/register')
app.use('/',UserRouter);


app.listen(port,()=>{
  console.log('server started')
})