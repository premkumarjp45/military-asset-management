import express from "express"
import { transfersBases, allTransforts } from "../controllers/transfers.js"
import { authAdminAndCommander } from "../middleware/auth.js"
const transfers = express.Router()

transfers.post("/transfers", authAdminAndCommander, transfersBases)
transfers.get("/transfers", authAdminAndCommander, allTransforts)

export default transfers