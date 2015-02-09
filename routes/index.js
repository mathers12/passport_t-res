var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var passportLocal = require('passport-local');
var passportHttp = require("passport-http");
var nodemailer = require('nodemailer');
var crypto = require('crypto');

router.use(passport.initialize());
router.use(passport.session());

/* ---------------------NODEMAILER--------------------------*/
var smtpTransport = nodemailer.createTransport("SMTP", {
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
function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}

function getUniqueRandomId() { // Kontrola na jedinecne ID verify email

            var randomId = randomValueHex(20);
            mongoose.model('users').find({emailId: randomId}, function (err, user) {
            if (user.length) {
                console.log("je to tam, musim generovat");
                getUniqueRandomId();
            }
            else {
                console.log("Nie je to tam"+ randomId);


            }
        });

    return randomId;
}

passport.serializeUser(function(user,done)
{
    console.log(user);
    done(null,user);
});
passport.deserializeUser(function(user,done)
{
    console.log("deserialize "+user);
    done(null,{email: user.email,meno: user.meno, priezvisko: user.priezvisko});
});
/* ---------------------PASSPORT LOCAL--------------------------*/
passport.use(new passportLocal.Strategy({usernameField: "email", passwordField: "password"},function(email,password,done)
{
    mongoose.model('users').find({email: email, heslo: password },function(err,user)
    {
    console.log("V PASSPORT LOCAL");
        if (user.length) // Ak je prihlasenie uspesne
        {
            if (user[0].verifiedEmail) // Ak uz presla verifikacia
            {
                console.log("Tu sme");
                 done(null,{email: email, meno: user[0].meno, priezvisko: user[0].priezvisko});

            }
            else
            {
                console.log("NEVERIFIKOVANE");
                return done(null,false);
            }
        }
        else // FAIL
        {
             done(null,false);
        }
    });

}));
/* ---------------------PASSPORT HTTP--------------------------*/
passport.use(new passportHttp.BasicStrategy(function(username,password,done)
{

}));



/* ---------------------ROUTES --------------------------*/
router.get('/',function(req,res) // Prihlasenie
{
    console.log(req.user);
   res.render('index',{
       authenticated: req.isAuthenticated(),
       user: req.user,
       success: false
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
            res.write("<script>alert('Verifikacia prebehla uspesne,mozete sa prihlasit!');window.location='/'</script>");
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
          res.write("<script>alert('E-mailova adresa uz existuje!');window.location='/registration'</script>");
          console.log("E-mail uz je v DB");
      }

      else {

          if (req.body['heslo'] === req.body['heslo2']) // Skontrolujem zhodu hesiel a ukladam do DB
          {

              //var rand = getUniqueRandomId();
              //console.log("Vysledne generovane cislo: "+ rand);
              //var link="http://"+req.get('host')+"/verify?id="+rand;

              //sendEmail(req.body['email'],link,req.body['meno'],req.body['priezvisko']); // Volanie funkcie na posielanie ver. emailu
              var AddUserSchema = mongoose.model('users');
              var addUser = new AddUserSchema({
                    meno: req.body['meno'],
                    priezvisko: req.body['priezvisko'],
                    email: req.body['email'],
                    heslo: req.body['heslo'],
                    verifiedEmail: false
                });
              addUser.save(function (err, data) {
                  if (!err) {
                      var link = "http://" + req.get('host') + "/verify?id=" + data._id;
                      sendEmail(req.body['email'],link,req.body['meno'],req.body['priezvisko']); // Volanie funkcie na posielanie ver. emailu
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
