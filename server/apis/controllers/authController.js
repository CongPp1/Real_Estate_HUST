const asyncHandler = require("express-async-handler");
const authService = require("../../apis/services/authService");

module.exports = {
    //Login with Google
    loginWithGoogleController: asyncHandler(async (req, res, next) => {
        const { email, fullName, avatar, password } = req.body;

        if (!email || !fullName || !avatar || !password) {
            return res.status(400).json({
                success: false, 
                message: "Missing required fields",
            })
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false, 
                message: "Password must be at least 6 characters",
            })
        }

        if (!email.includes("@")) {
            return res.status(400).json({
                success: false, 
                message: "Invalid email",
            })
        }
        const alreadyUser = await 
        console.log(req.body);
        return res.json({
            success: true,
            message: "Login with Google success",
        })
    }),
}