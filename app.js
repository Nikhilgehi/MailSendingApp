const express=require('express');
const nodemailer=require('nodemailer');
const crd=require('./credn');
const port=5500;
const app=express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html');
})
app.use(express.static('public'));
app.get('/send',(req,res)=>{
    let email1=req.query.email1;
    let email2=req.query.email2;
    let Subject=req.query.Subject;
    let message=req.query.message;
    const mail=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:
        {
            user:crd.user,
            pass:crd.pass
        }
       
    });
        mail.sendMail({
            from:'nikhilgehi15@gmail.com',
            to:email2,
            Subject:Subject,
            html:message
        },(err)=>{
            if(err) throw err;
    res.send('mail has been send');
        

        });
    });
app.listen(port,(err)=>{
    if (err) {
        throw(err);
    }
    console.log('server is running at port %d',port);
});