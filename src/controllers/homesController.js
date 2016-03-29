var homesController = function () {

    var getIndex = function (req, res) {
        res.render('shared/master', {
            title: 'Homes List',
            copyrightYear: (new Date()).getFullYear(),
            pageBody: '../homes'
        });
    };
    return {
        getIndex: getIndex
    };
};

module.exports = homesController;