var router = function () {
    var express = require('express');
    var homeRouter = express.Router();

    var homeController = require('../controllers/homeController')();

    homeRouter.route('/')
        .get(homeController.getIndex);

    return homeRouter;
};

module.exports = router;