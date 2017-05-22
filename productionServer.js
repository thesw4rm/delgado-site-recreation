const express = require('express');
const app = express();
var mongoose = require('mongoose');
var compression = require('compression');
mongoose.connect(
    "ds019846.mlab.com:19846/delgado",
    {
        user: 'main',
        pass: '6hb5O6ddtDqX'
    }
);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
global.mongoose = mongoose;

// Start the app by listening on the default
// Heroku port

app.use(compression());

app.use('/', express.static(__dirname + '/dist'))

app.get(
    '/api/coaches',
    function (req, res) {
        var models = require('./models');

        var Coaches = models.coachesModel;
        Coaches.find(
            {},
            [
                "nsme",
                "gmail",
                "role",
                "about",
                "img"
            ],
            function (err, coaches) {
                res.setHeader("Content-type", "application/json");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
                var count = 0;
                for (var x in coaches) {
                    coaches[x].about = coaches[x].about.replace(/(?:\r\n|\r|\n)/g, '');
                    coaches[x]['objId'] = count;
                    count++;
                }
                res.send(
                    coaches
                );
            }
        );
    }
);


app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});
app.listen(process.env.PORT || 80);