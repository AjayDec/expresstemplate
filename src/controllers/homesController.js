var homesController = function () {

    var getIndex = function (req, res) {
        res.render('shared/master', {
            title: 'Homes List',
            copyrightYear: (new Date()).getFullYear(),
            pageBody: '../home'
        });
    };
    return {
        getIndex: getIndex
    };
};

module.exports = homesController;