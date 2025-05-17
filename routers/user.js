const express = require('express')

const router =  express.Router();

router.get('/',(req,res)=>{
    // res.send('Home Router');
    res.render('signup');
})

module.exports = router;