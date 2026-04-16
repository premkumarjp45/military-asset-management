import mongoose from "mongoose"


const assetSchama = mongoose.Schema({
    assetName: { type: String, required: true },
    assetType: { type: String, required: true },
    quantity: { type: Number, required: true },
    base: { type: String, required: true }
}, { timestamp: true })


const Asset = mongoose.model("asset", assetSchama)

export default Asset