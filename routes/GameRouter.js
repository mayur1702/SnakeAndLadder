const router = require('express').Router();

router.get('/newGame',(req,res) => {
    console.log("got request");
})

module.exports = router;