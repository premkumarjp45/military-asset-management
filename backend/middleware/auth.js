import jwt from "jsonwebtoken"
import User from "../models/user.js"
export const authAdmin = async (req, res, next) => {
    try {

        const authHeaders = req.headers['authorization']
        if (!authHeaders) {
            return res.status(401).json({ error: "Invalid JWT Token" })
        }
        const jwtToken = authHeaders.split(" ")[1]
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

        if (payload.role !== "Admin") {
            return res.status(400).json({ error: "Access  denied" })
        }
        req.payload = payload
        next()

    } catch (e) {
        return res.status(401).json({ error: "Invalid JWT Token" })
    }


}



export const authCommander = async (req, res, next) => {
    try {

        const authHeaders = req.headers['authorization']
        if (!authHeaders) {
            return res.status(401).json({ error: "Invalid JWT Token" })
        }
        const jwtToken = authHeaders.split(" ")[1]
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

        if (payload.role !== "Commander") {
            return res.status(400).json({ error: "Access  denied" })
        }
        req.payload = payload
        next()

    } catch (e) {
        return res.status(401).json({ error: "Invalid JWT Token" })
    }

}



export const authOfficer = async (req, res, next) => {
    try {

        const authHeaders = req.headers['authorization']
        if (!authHeaders) {
            return res.status(401).json({ error: "Invalid JWT Token" })
        }
        const jwtToken = authHeaders.split(" ")[1]
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

        if (payload.role !== "Officer") {
            return res.status(400).json({ error: "Access  denied" })
        }
        req.payload = payload
        next()

    } catch (e) {
        return res.status(401).json({ error: "Invalid JWT Token" })
    }

}






export const authAdminAndCommander = async (req, res, next) => {
    try {

        const authHeaders = req.headers['authorization']
        if (!authHeaders) {
            return res.status(401).json({ error: "Invalid JWT Token" })
        }
        const jwtToken = authHeaders.split(" ")[1]
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

        if (payload.role !== "Admin" && payload.role !== "Commander") {
            return res.status(400).json({ error: "Access  denied" })
        }
        req.payload = payload
        next()

    } catch (e) {
        return res.status(401).json({ error: "Invalid JWT Token" })
    }


}



export const authAdminAndCommanderAndOfficer = async (req, res, next) => {
    try {

        const authHeaders = req.headers['authorization']
        if (!authHeaders) {
            return res.status(401).json({ error: "Invalid JWT Token" })
        }
        const jwtToken = authHeaders.split(" ")[1]
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

        if (payload.role !== "Admin" && payload.role !== "Commander" && payload.role !== "Officer") {
            return res.status(400).json({ error: "Access  denied" })
        }
        req.payload = payload
        next()

    } catch (e) {
        return res.status(401).json({ error: "Invalid JWT Token" })
    }


}
