const express = require('express');
const router = express.Router();



router.get('/', (req,res) => { 

    var info = {
        title: 'Sign up',
    }
    res.render('login/signupView', info); 
});

router.post('/auth', (req,res) => {
    // Consultar info con DB

    res.send('Auth...');
});


module.exports = router;