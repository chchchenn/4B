var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { id: '404411885',name:'Yu-Cheng' });
    res.json([{
        id: 1,
        username: "蔡尙洲"
    }, {
        id: 2,
        username: "黃宜展"
    }, {
        id: 3,
        username: "陳昱成"
    }]);
});

module.exports = router;