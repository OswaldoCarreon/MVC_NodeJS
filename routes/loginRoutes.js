const express = require('express');
const router = express.Router();


// ******* /login

router.get('/', (req,res) => {
    //if session exists, then redirect to dashboard page.
    //else, go to login view

    //var userSe = session['user'] ? session['user'] : null 
    /* var info = {
        user: userSe
    } */

    var info = {
        title: 'Log in',
    }

    res.render('login/loginView', info);

});


router.post('/auth', (req,res) => {
    // Consultar info con DB
    res.send('Auth...');

});




module.exports = router;