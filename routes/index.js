var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ajax',function(req,res){
  var ajaxTest={
    tips:"ajax成功"
  };
  res.send(ajaxTest);
});
router.get("/submit",function(req,res){
     res.render('submit', {
     	name: req.query.name,
     	institute: req.query.institute,
     	department: req.query.department,
     	contact: req.query.contact,
     	introduction: req.query.introduction
     });

});
module.exports = router;
