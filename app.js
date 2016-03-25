var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'ejs sample',
        message: 'Hello from view engine ejs'
    });
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