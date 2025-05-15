const express = require("express"); 
const path = require("path");  
//codigos nuevos
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express(); 
const reservasRoutes = require('./routes/reservas');

app.get("/", (req, res)=>{

res.sendFile(path.join(__dirname + "/index.html/")); 
})   
//codigos nuevos
app.use(cors());
app.use(bodyParser.json());

app.use('/api/reservas', reservasRoutes);

app.use(express.static("public"))

app.listen(3000, ()=>{

    console.log("server listening on port", 3000);
});