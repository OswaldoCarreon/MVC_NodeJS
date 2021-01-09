const express = require('express');
const router = express.Router();


// ******* /app/

router.get('/', (req,res) => {
    console.log("I'm in app");
    res.render('app' ,{
        titulo: "App"
    });

});

module.exports = router;