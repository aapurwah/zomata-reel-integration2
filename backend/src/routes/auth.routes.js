const express = require('express');
const authController = require("../controller/auth.controller.js");

const router = express.Router();

// user auth APIs
router.post('/user/register', authController.registerUser)
const foodController = require('../controller/food.controller')
router.post('/user/login', authController.loginUser)
router.get('/user/logout', authController.logoutUser)



// food partner auth APIs
const { uploadFile } = require("../services/storage.service");
router.post('/food-partner/register', authController.registerFoodPartner)
router.post('/food-partner/login', authController.loginFoodPartner)
router.get('/food-partner/logout', authController.logoutFoodPartner)



module.exports = router;const authMiddleware = require("../middlewares/auth.middleware")