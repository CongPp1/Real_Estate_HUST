const router = require('express').Router();
const authController = require('../apis/controllers/authController')

router.post('/googleLogin', authController.loginWithGoogleController)

module.exports = router