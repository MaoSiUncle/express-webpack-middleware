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
router.get('/api/getTable',function (req,res,next) {
    var data = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    }, {
        key: '3',
        name: '李大嘴',
        age: 32,
        address: '西湖区湖底公园1号',
    }];
    for(var i=0;i<100;i++){
        data.push({
            key: i+'1',
            name: '胡彦斌',
            age: 32+Math.ceil(Math.random()*10)+20,
            address: '西湖区湖底公园1号',
        })
    }

    res.send(data);
})
module.exports = router;
