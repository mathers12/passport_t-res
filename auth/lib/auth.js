var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var passportLocal = require('passport-local');
var nodemailer = require('nodemailer');
var bcrypt = require("bcrypt");
var params = require('./params.js');

router.use(passport.initialize());
router.use(passport.session());

console.log(params.SMTP.user);

/* ---------------------NODEMAILER--------------------------*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: params.SMTP.user,
        pass: params.SMTP.pass
    }
});


/* ---------------------FUNCTIONS--------------------------*/

function saveToDB(meno,priezvisko,email,heslo,req,res)
{

    var AddUserSchema = mongoose.model('users');
    var addUser = new AddUserSchema({
        meno: meno,
        priezvisko: priezvisko,
        email: email,
        heslo: heslo,
        verifiedEmail: false
    });


    addUser.save(function (err, data) {
        if (!err) {
            var link = "http://" + req.get('host') + "/verify?id=" + data._id;

            var htmlData = {
                link: link,
                htmlBody: params.email.html,
                meno: req.body['meno'],
                priezvisko: req.body['priezvisko'],
                footer: params.email.footer
            };

            //RENDEROVANIE
            res.render('registrationApproving',htmlData,function(err,html)
            {
                sendEmail(req.body['email'],html); // Volanie funkcie na posielanie ver. emailu

                res.redirect("/");


            });


        }
    });
}

function comparePassword(password,hash,verifiedEmail,meno,priezvisko,email,done)
{
    bcrypt.compare(password, hash, function (err, res) {
        if (res) // Ak suhlasi heslo
        {
            if (verifiedEmail) // Ak uz presla verifikacia
            {

                console.log("Tu sme");
                done(null,{email: email, meno: meno, priezvisko: priezvisko});

            }
            else // Verifikacia este neprebehla
            {
                console.log("NEVERIFIKOVANE");
                done(null,false);
            }
        }
    });

}
function sendEmail (email,html)
{

    smtpTransport.sendMail({  //email options
        from: params.email.from,
        to: email,
        subject: params.email.subject,
        html: html,
        attachments:[

            {
                fileName: "top-shadow-right.gif",
                cid: "top-shadow-right",
                filePath: "images/top-shadow-right.gif"
            },
            {

                fileName: "footer-shadow.gif",
                cid: "footer-shadow",
                filePath: "images/footer-shadow.gif"

            }
        ]

    }, function(error, response){  //callback
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
    });


}

passport.serializeUser(function(user,done)
{
    done(null,user);
});
passport.deserializeUser(function(user,done)
{
    done(null,user);
});

/* ---------------------PASSPORT LOCAL--------------------------*/
passport.use(new passportLocal.Strategy({usernameField: "email", passwordField: "password"},function(email,password,done)
{
    mongoose.model('users').find({email: email},function(err,user)
    {

        if (user.length) // Ak je v DB dany uzivatel
        {
            comparePassword(password,user[0].heslo,user[0].verifiedEmail,user[0].meno,user[0].priezvisko,email,done);
        }
        else // Ak je neplatne meno a heslo
        {
            done(null,false);
        }

    });

}));

/* ---------------------ROUTES --------------------------*/
router.get('/',function(req,res) // Prihlasenie
{
    console.log(req.user);
    res.render('index',{
        authenticated: req.isAuthenticated(),
        user: req.user
    });
});

/* ---------------------GET-REGISTRATION--------------------------*/
router.get('/registration',function(req,res) // Registracia
{
    res.render('registration');
});

/* ---------------------GET-VERIFY-EMAIL--------------------------*/
router.get('/verify',function(req,res)
{

    //mongoose.model('uzivatelia').find({emailId: req.query.id},function(err,users)
    mongoose.model('users').findById(req.query.id,{}, function(err, user)
    {
        if (user)
        {
            user.verifiedEmail = true;
            user.save();
            res.redirect('/');
        }
        else res.send(404);
    });

});

/* ---------------------POST-REGISTRATION--------------------------*/
router.post('/registration',function(req, res) // Spracovanie registracie
{

    mongoose.model('users').find({email: req.body['email']}, function(err, users)
    {

        if (users.length)//Ak uz je v DB
        {
            console.log("E-mail uz je v DB");
        }

        else {

            if (req.body['heslo'] === req.body['heslo2']) // Skontrolujem zhodu hesiel a ukladam do DB
            {
                //HASH PASSWORD
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(req.body['heslo'], salt, function(err, hash) {

                        saveToDB(req.body['meno'],req.body['priezvisko'],req.body['email'],hash,req,res);
                    });
                });
            }
            else
                console.log("hesla sa nezhoduju!");
        }



    });

});

/*--------------------GET-LOGOUT--------------------------*/
router.get('/logout',function(req,res)
{
    req.logout();
    res.redirect("/");
})
/* ---------------------POST-LOGIN--------------------------*/
router.post('/',passport.authenticate("local"),function(req,res)
{
    res.redirect('/');
});


module.exports = router;