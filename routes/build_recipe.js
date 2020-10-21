var express = require('express');
var router = express.Router();

router.get('/build_recipe',function(req,res,next){
  res.render('build_recipe');
});

module.exports = router;