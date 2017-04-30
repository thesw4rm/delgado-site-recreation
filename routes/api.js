var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(
    '/coaches',
    function (req, res, next) {
        var Coaches = models.coachesModel;
        Coaches.find(
            {},
            [
                "nsme",
                "gmail",
                "role",
                "about",
                "img",
            ],
            function (err, coaches) {
                res.setHeader("Content-type", "application/json");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
                var count = 0;
                for (var x in coaches) {
                    coaches[x].about = coaches[x].about.replace(/(?:\r\n|\r|\n)/g, '');
                    coaches[x].objId = count;
                    count++;
                }
                res.send(
                    coaches
                );
            }
        );


    }
);

module.exports = router;
