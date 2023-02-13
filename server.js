const nodemailer=require('nodemailer')
const http=require('http');
let email=nodemailer.createTransport({
    service:"gmail",
    port:587,
    auth:{
        user:"nikhilgehi15@gmail.com",
        pass:"15september"
    }
});
let details={
    from:"nikhilgehi15@gmail.com",
    to:"lavinagehi6@gmail.com",
    subject:"aur padodi",
    text:"lavina padodi!!"
}
email.sendMail(details,(err)=>{
    if(err)
    {
        throw(err);
    }
    else{

        console.log("message sent successfully");
    }
});