var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var manifestRouter = require('./src/routes/manifestRoutes')();

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/manifest', manifestRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Application Cache',
        message: 'OfflineJS prep work',
        headerMessage: 'Application Cache',
        moreInfoMessage: 'jQuery Loaded',
        offline: 'Offline',
        online: 'Online'
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