const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:  {
        user:"premprk5353@gmail.com",
        pass:"prem@5353"
    }
});
const mailoptions = {
    from:"premprk5353@gmail.com",
    to:"prembujji5353@gmail.com",
    subject:"sending email using node.js",
    text:"Hi everyone, good morning to all."
};
transporter.sendMail(mailoptions,function(error, info){
    if (error){
        console.log(error);
        return;
    }
        console.log("email sent: " + info.responce);
    
});
