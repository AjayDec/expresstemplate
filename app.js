var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello from Router route');
});

app.listen(port,
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Running express server on port ' + port);
        }

    }
);