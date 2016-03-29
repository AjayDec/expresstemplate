var router = function () {
    var express = require('express');
    var homesRouter = express.Router();

    var homesController = require('../controllers/homesController')();

    homesRouter.route('/')
        .get(homesController.getIndex);

    return homesRouter;
};

module.exports = router;