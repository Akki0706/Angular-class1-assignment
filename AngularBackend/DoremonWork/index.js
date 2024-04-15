const express=require('express');
const routes=require('./Routes/MyRoutes')
const routes2=require('./Routes/MyRoutes2')
const PORT=3000;
const app=express();
app.use(express.json());
app.use("/characters",routes);
app.use("/gadgets",routes2);
app.listen(PORT,()=>{
  console.log("Server is running at Port "+PORT);
})