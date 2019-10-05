const express = require('express');
const app = express();
const fs = require('fs')

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/login',(req,res)=>{
    var user={
        name : req.body.name,
        password :req.body.password,
        Email : req.body.Email,
        mobileNo : req.body.mobileNo
     }
    
    var data = fs.readFileSync('Authentic.json')
    data = data.toString();
    var Data = JSON.parse(data)
  
    if(user.password.length>15 || user.password.length<6){
        return res.end("Week password")
    }

    for(let i=0;i<Data.length;i++){
        if(Data[i]["Email"] == user["Email"]){
            return res.end("Email is already exists")

    }
}
    user.id=Data.length+1
    Data.push(user)
    console.log(Data)
    fs.writeFileSync("Authentic.json",JSON.stringify(Data,null,3))
    console.log(Data)
    return res.json(Data)
});

app.listen(8000,function(){
    console.log("8000 port pr shunta hai")
});