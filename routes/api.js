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
                "id"
            ],
            function (err, coaches) {
                res.setHeader("Content-type", "application/json");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
                for (var x in coaches) {
                    coaches[x].about = coaches[x].about.replace(/(?:\r\n|\r|\n)/g, '');
                }
                res.send(
                    coaches
                );
            }
        );


    }
);

module.exports = router;
