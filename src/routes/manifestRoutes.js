var router = function () {
    var express = require('express');
    var manifestRouter = express.Router();

    var manifestController = require('../controllers/manifestController')();

    manifestRouter.use(manifestController.noCache);

    manifestRouter.route('/')
        .get(manifestController.getIndex);

    return manifestRouter;
};

module.exports = router;