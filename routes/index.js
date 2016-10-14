var express = require('express');
var router = express.Router();
var request=require('superagent');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/api/getdata', function (req, res, next) {
    var data = [];
    for (var i = 0; i < 10; i++) {
        data.push(1);
    }
    res.send(data);
})
router.get('/api/getTable', function (req, res, next) {
    var data = [{
      

    res.send(data);
})


router.get('/api/stats/ads/:sqid/:bdate/:edate', function (req, respon, next) {
    var sqid = req.params.sqid;
    var bdate = req.params.bdate;
    var edate = req.params.edate;
    var url = "http://******" + sqid + "/" + bdate + "/" + edate;
    request.get(url).end(function (err, res) {
        if (err || !res.ok) {
        } else {
            respon.send(JSON.stringify(res.body));
        }
    });

});
module.exports = router;
