import { User } from "../models/user.model.js"
import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const generateToken = async (id) => {
    try {
        const user = await User.findById(id)
        const token = user.generateToken()
        user.refreshToken = token
        user.save({ validateBeforeSave: false })

        return { token }
    } catch (error) {
        return next(new ApiError(501, error.message))
    }
}

const registerUser = AsyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        const error = new ApiError(401, "All fields are required")
        return next(error)
    }

    const checkUser = await User.findOne({ email }).select("-password")
    if (checkUser) {
        const error = new ApiError(404, "User already exist!")
        return next(error)
    }

    const newUser = await User.create(
        { username, email, password }
    )

    const { token } = await generateToken(newUser._id)

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(201)
        .cookie("token", token, options)
        .json(
            new ApiResponse(201, { user: newUser, token }, "User registered successfully")
        )

}
)


const loginUser = AsyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        const error = new ApiError(401, "All fields are required")
        return next(error)
    }

    const getUser = await User.findOne({ email })
    if (!getUser) {
        const error = new ApiError(404, "User not found!")
        return next(error)
    }

    const isPasswordCorrect = await getUser.checkPassword(password)
    if (!isPasswordCorrect) {
        const error = new ApiError(404, "Invalid credentials")
        return next(error)
    }

    const { token } = await generateToken(getUser._id)

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("token", token, options)
        .json(
            new ApiResponse(200, { user: getUser, token }, "User registered successfully")
        )

}
)


const logoutUser = AsyncHandler(async (req, res, next) => {

    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $unset: { refreshToken: 1 }
        },
        { new: true }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("token", options)
        .json(new ApiResponse(200, {}, "User logout successfully"))
})


export { registerUser, loginUser, logoutUser, }