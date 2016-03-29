var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var manifestRouter = require('./src/routes/manifestRoutes')();
var homeRouter = require('./src/routes/homeRoutes')();
var homesRouter = require('./src/routes/homesRoutes')();

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/manifest', manifestRouter);
app.use('/home', homeRouter);
app.use('/homes', homesRouter);

app.get('/api/time', function (req, res) {
    res.send((new Date()).toLocaleTimeString());
});

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Application Cache',
        message: 'OfflineJS prep work',
        headerMessage: 'Application Cache',
        moreInfoMessage: 'Hello World!',
        dateTimeNow: new Date(),
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