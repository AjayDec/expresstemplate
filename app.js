var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Native Offline & Online Demo',
        message: 'OfflineJS prep work',
        headerMessage: 'Native <code>Offline</code> &amp; <code>Online</code> events Demo',
        moreInfoMessage: 'For more info see <a href="https://developer.mozilla.org/en-US/docs/Online_and_offline_events">MDN',
        offline: 'offline',
        online: 'online'
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