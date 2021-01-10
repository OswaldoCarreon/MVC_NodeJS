const express = require('express');
const router = express.Router();


// ******* /login

router.get('/', (req,res) => {
    var vars = {
        titulo: "App"
    }

    res.render('loginView');

});

module.exports = router;