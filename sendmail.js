const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:  {
        user:"premprk5353@gmail.com",
        pass:"premrathik"
    }
});
const mailoptions = {
    from:"premprk5353@gmail.com",
    to:"prembujji5353@gmail.com",
    subject:"sending email using node.js",
    text:"Hi everyone, good morning to all."
};
transporter.sendMail(options(error, info){
    if (error){
        console.log(error);
        }
        else{

        console.log("email is sent: " + info.responce);
    
});
