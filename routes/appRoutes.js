const express = require('express');
const router = express.Router();


// ******* /app/

router.get('/', (req,res) => {
    var vars = {
        titulo: "App"
    }

    res.render('app' , vars);

});

module.exports = router;