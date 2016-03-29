var homeController = function () {

    var getIndex = function (req, res) {
        res.render('shared/master', {
            title: 'Home',
            copyrightYear: (new Date()).getFullYear(),
            pageBody: '../home'
        });
    };
    return {
        getIndex: getIndex
    };
};

module.exports = homeController;