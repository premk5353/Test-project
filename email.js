var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user:'premprk5353@gmail.com',
        pass:'premrathik'
    }
})

var options ={
    from : 'premprk5353@gmail.com',
    to : 'premkumar.k@fssglobal.in',
    subject : 'sending mail using nodejs',
    text : 'Hi Good Morning ',
}
transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email is sent'+info.responce)
    }
});








