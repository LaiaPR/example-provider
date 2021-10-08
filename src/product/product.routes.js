const router = require('express').Router();
const controller = require('./product.controller');

router.get("/product/:id", controller.getById);
router.get("/productos", controller.getAll);

module.exports = router;