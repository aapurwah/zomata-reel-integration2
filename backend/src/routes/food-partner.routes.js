const express = require('express');
const foodPartnerController = require("../controller/food-partner.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();


/* /api/food-partner/:id */
router.get("/:id",
    authMiddleware.authUserMiddleware,
    foodPartnerController.getFoodPartnerById)

module.exports = router;