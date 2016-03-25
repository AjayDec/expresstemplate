var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Offline & Offline JS SimulatorUI',
        message: 'OfflineJS prep work',
        headerMessage: 'Offline & Offline JS SimulatorUI Demo',
        moreInfoMessage: 'Using simulator as a devDependency Only',
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