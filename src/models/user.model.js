import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    }
}, { timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.TOKEN_SECRET,
        { expiresIn: "1d" }
    )
}


export const User = mongoose.model('User', userSchema)