import Asset from "../models/asset.js"
import Transfer from "../models/transfer.js"

export const transfersBases = async (req, res) => {

    try {
        const { assetId = "", fromBase = "", toBase = "", quantity = "" } = req.body

        if (assetId === "" && fromBase === "" && toBase === "" && quantity === "") {
            return res.status(400).json({ error: "Invalid transfer request" })
        }
        const presentAsset = await Asset.findOne({ _id: assetId })



        if (presentAsset.base !== fromBase) {
            return res.status(400).json({ error: "Asset is not found invaid base" })
        }
        if (quantity > presentAsset.quantity) {
            return res.status(400).json({ error: "Insufficient stock" })
        }

        if (fromBase === toBase) {
            return res.status(400).json({ error: "Invalid toBase" })
        }

        const newAsset = Asset({
            assetName: presentAsset.assetName,
            assetType: presentAsset.assetType,
            quantity: quantity,
            base: toBase
        })
        await newAsset.save()

        await Asset.updateOne({ _id: assetId }, {
            $set: {
                quantity: presentAsset.quantity - quantity
            }
        })

        const newTransfer = Transfer({
            assetId, fromBase, toBase, quantity, datetime: new Date().toString()
        })
        await newTransfer.save()
        return res.status(200).json({ success: "Transfer completed" })
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ error: "Invalid transfer request" })
    }
}



export const allTransforts = async (req, res) => {
    const getAllTransfers = await Transfer.find({})
    const filteredData = getAllTransfers.map((item) => ({
        transferId: item._id,
        assetId: item.assetId,
        fromBase: item.fromBase,
        toBase: item.toBase,
        quantity: item.quantity,
        datetime: item.datetime
    }))


    return res.status(200).json({ transfers: filteredData })
}