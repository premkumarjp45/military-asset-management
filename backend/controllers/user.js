import bcrypt from "bcrypt"
import validator from "validator"
import User from "../models/user.js"
import { generateToken } from "../utils/generateToken.js"


export const registerUsers = async (req, res) => {

    let { username = "", password = "", role = "" } = req.body

    username = username.trim()
    password = password.trim()
    role = role.trim()

    if (username === "" && password === "" && role === "") {
        return res.status(400).json({ error: "Required fields missing" })
    }

    if (!username || username === "") {
        return res.status(400).json({ error: "username is required" })
    }

    if (!password || password === "") {
        return res.status(400).json({ error: "Password is required" })
    }

    if (!role || role === "") {
        return res.status(400).json({ error: "Role is required" })
    }

    const roles = ["Admin", "Commander", "Officer"];

    if (!roles.includes(role)) {
        return res.status(400).json({ error: "Invalid Role" })
    }




    if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters" })

    }


    const isUser = await User.findOne({ username: username }) || null



    if (isUser) {
        return res.status(409).json({ error: "username already registered" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const createUser = User({
        username: username,
        password: hashedPassword,
        role: role,

    })

    await createUser.save()

    return res.status(201).json({ success: "User registered successfully" })


}






export const loginUsers = async (req, res) => {

    let { username = "", password = "" } = req.body
    username = username.trim()
    password = password.trim()

    console.log(username, password)
    if (!username && !password) {
        return res.status(400).json({ error: "Required fields missing" })
    }

    if (!username || username === "") {
        return res.status(400).json({ error: "Username is required" })
    }


    if (!password || password === "") {
        return res.status(400).json({ error: "Password is required" })
    }

    const isUser = await User.findOne({ username: username })

    if (!isUser) {
        return res.status(400).json({ error: "User not found" })
    }


    const isTruePassword = await bcrypt.compare(password, isUser.password)


    if (!isTruePassword) {
        return res.status(400).json({ error: "Invalid credentials" })
    }

    const jwtToken = generateToken({ username: isUser.username, userId: isUser._id, role: isUser.role })

    return res.status(200).json({
        "jwt_token": jwtToken
    })



}