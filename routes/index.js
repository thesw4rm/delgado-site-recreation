var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(
    '/',
    function (req, res, next) {
        var result_options = {
            title: "eLearning Homepage string",
            username: req.query.username,
        };


        res.render(
            'index',
            result_options
        );
    }
);

module.exports = router;
