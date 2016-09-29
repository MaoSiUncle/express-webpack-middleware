var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/getdata',function (req,res,next) {
    var data=[];
    for(var i=0;i<10;i++){
        data.push(1);
    }
  res.send(data);
})
module.exports = router;
