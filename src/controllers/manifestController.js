var manifestController = function () {
    var middlewareNoCache = function (req, res, next) {
        res.header('Cache-Control', 'no-cache');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.header('Content-Type', 'text/cache-manifest');
        next();
    };
    var getIndex = function (req, res) {
        res.render('manifest', {});
    };
    return {
        getIndex: getIndex,
        noCache: middlewareNoCache
    };
};

module.exports = manifestController;