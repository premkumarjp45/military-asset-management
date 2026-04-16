import express from "express"
import { purchasesAsset, purchasesAssetUpdate, getAllAssets } from "../controllers/purchases.js"
import { authAdmin, authAdminAndCommanderAndOfficer } from "../middleware/auth.js"


const purchases = express.Router()


purchases.post("/purchases", authAdmin, purchasesAsset)
purchases.put("/purchases/:assetId", authAdmin, purchasesAssetUpdate)
purchases.post("/assets", authAdminAndCommanderAndOfficer, getAllAssets)


export default purchases