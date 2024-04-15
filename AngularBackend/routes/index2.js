const express = require('express');
const routes = require('./myroutes2')
const app = express();
const PORT = 4000;
app.use(express.json());
app.use("/members",routes)
app.listen(PORT , ()=>{
    console.log("Server is running at port "+PORT)
})