var express = require('express');
var router = express.Router();


/* ---------------------ROUTES --------------------------*/
router.get('/',function(req,res) // Prihlasenie
{
    //console.log(req.user);
    //res.render('index',{
    //    authenticated: req.isAuthenticated(),
    //    user: req.user
    //});
    res.redirect('/auth');
});


module.exports = router;
