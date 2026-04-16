import mongoose from "mongoose"



const transferSchema = mongoose.Schema({
    assetId: { type: mongoose.Schema.Types.ObjectId, ref: "asset" },
    fromBase: { type: String, required: true },
    toBase: { type: String, required: true },
    quantity: { type: Number, required: true },
    datetime: { type: String, required: true }

}, { timestamps: true })

const Transfer = mongoose.model("transfer", transferSchema)


export default Transfer