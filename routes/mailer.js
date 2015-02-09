var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/**
 * Created by ubuntu on 2/9/15.
 */
var mongoose = require('mongoose');


/* ---------------------NODEMAILER--------------------------*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    //service: "Gmail",  // sets automatically host, port and connection security settings
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "dsoft.tesla@gmail.com",
        pass: "something001"
    }
});


/* ---------------------FUNCTIONS--------------------------*/
function sendEmail (email,link,meno,priezvisko)
{

    smtpTransport.sendMail({  //email options
        from: "dSoft Solutions s.r.o<dsoft.tesla@gmail.com>",
        to: email,
        subject: "Prosím, potvrďte tento e-mail!",
        html: "Dobrý deň pán <b>"+meno+" "+priezvisko+"</b><br><br>Prosím potvrďte tento verifikačný e-mail!<br><a href="+link+">Potvrdiť kliknutím tu!</a>"

    }, function(error, response){  //callback
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
    });


}


/* ---------------------POST-REGISTRATION--------------------------*/
router.get('/registration',function(req, res) // Spracovanie registracie
{

    mongoose.model('uzivatelia').find({email: req.body['email']},function(err, users)
    {

        if (users.length)//Ak uz je v DB
        {
            res.write("<script>alert('E-mailova adresa uz existuje!');window.location='/registration'</script>");
            console.log("E-mail uz je v DB");
        }

        else {

            if (req.body['heslo'] === req.body['heslo2']) // Skontrolujem zhodu hesiel a ukladam do DB
            {

                var rand = getUniqueRandomId();
                console.log("Vysledne generovane cislo: "+ rand);
                var link="http://"+req.get('host')+"/verify?id="+rand;

                sendEmail(req.body['email'],link,req.body['meno'],req.body['priezvisko']); // Volanie funkcie na posielanie ver. emailu

                var data = new Users();
                data.meno = req.body['meno'];
                data.priezvisko = req.body['priezvisko'];
                data.email = req.body['email'];
                data.heslo = req.body['heslo'];
                data.emailId = rand;
                data.verifiedEmail = false;
                data.save(function (err) {
                    if (!err) {
                        console.log("Saved");
                        // res.write("<script>alert('Registraciu dokoncite potvrdenim verifikacneho e-mailu!');window.location='/';</script>");

                        res.redirect("/");

                    }
                    else console.log("Error");
                });
            }
            else
            {

                res.write("<script>alert('Hesla sa nezhoduju!');window.location='/registration';</script>");
            }
        }
    });

});