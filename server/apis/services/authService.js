const asyncHandler = require("express-async-handler");
const db = require('../../models/index');

module.exports  = {
    //Login with Google
    loginWithGoogleService: asyncHandler(async (data) => {
        const alreadyUser = await db.User.findOne({
            email: data.email
        })
        return alreadyUser
    }),
}