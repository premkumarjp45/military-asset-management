import express from "express"
import { registerUsers, loginUsers } from "../controllers/user.js"

const user = express.Router()


user.post("/sign-up", registerUsers)
user.post("/login", loginUsers)


export default user