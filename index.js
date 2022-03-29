const express = require('express');
const app = express();
//const data = require ("./data.json");
const nodemailer = require("nodemailer");
let PORT = process.env.PORT || 8080;

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:  {
        user:"premprk5353@gmail.com",
        pass:"premrathik"
    },
let mailoptions = {
    from:"premprk5353@gmail.com",
    to:"prembujji5353@gmail.com",
    subject:"sending email using node.js",
    text:"Hi everyone, good morning to all."
};
// transporter.sendMail(mailoptions,function(err, succes)){
//    if (err){
//        console.log(err)
//    }else {
//     console.log("email sent successfully");
//    }
// });

transporter.sendMail(mailoptions,function(err, succes)){
    if (err){
                console.log(err)
      }else {
         console.log("email sent successfully");
        }
     });

app.get("/", (req, res) =>{
    res.send('HI EVERYONE');
});
app.get("/api", (req,res) => {
    res.send(data);
});
app.listen(PORT,()=>{
console.log('');
});