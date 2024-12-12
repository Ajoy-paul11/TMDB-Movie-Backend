import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"
import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"


export const verifyUser = AsyncHandler(async (req, res, next) => {
    const token = req.cookies?.token || req.header("Authentication")?.replace("Bearer ", "")

    if (!token) {
        return next(new ApiError(404, "Unauthorized request"))
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)

    const user = await User.findById(decodedToken._id).select("-password -refreshToken")

    if (!user) {
        return next(new ApiError(404, "Invalid token provided"))
    }

    req.user = user

    next()
})