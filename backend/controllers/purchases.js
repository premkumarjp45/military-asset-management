import Asset from "../models/asset.js"



export const purchasesAsset = async (req, res) => {

    let { assetName = "", assetType = "", quantity = "", base = "" } = req.body
    assetName = assetName.trim()
    assetType = assetType.trim()
    base = base.trim()


    if (assetName === "" && assetType === "" && base === "" && quantity === "") {
        return res.status(400).json({ error: "Required fields missing" })
    }

    if (!assetName || assetName === "") {
        return res.status(400).json({ error: "assetName is required" })
    }

    if (!assetType || assetType === "") {
        return res.status(400).json({ error: "assetType is required" })
    }
    if (!quantity || quantity === "") {
        return res.status(400).json({ error: "quantity is required" })
    }
    if (!base || base === "") {
        return res.status(400).json({ error: "base is required" })
    }


    const newAsset = Asset({
        assetName,
        assetType,
        quantity: Number(quantity),
        base
    })

    await newAsset.save()
    return res.status(201).json({ success: "asset is purchased" })
}




export const purchasesAssetUpdate = async (req, res) => {
    try {


        let { assetName = "", assetType = "", quantity = "", base = "" } = req.body
        const { assetId } = req.params
        assetName = assetName.trim()
        assetType = assetType.trim()
        base = base.trim()


        if (assetName === "" && assetType === "" && base === "" && quantity === "") {
            return res.status(400).json({ error: "Required fields missing" })
        }

        if (!assetName || assetName === "") {
            return res.status(400).json({ error: "assetName is required" })
        }

        if (!assetType || assetType === "") {
            return res.status(400).json({ error: "assetType is required" })
        }
        if (!quantity || quantity === "") {
            return res.status(400).json({ error: "quantity is required" })
        }
        if (!base || base === "") {
            return res.status(400).json({ error: "base is required" })
        }

        const isAsset = await Asset.findOne({ _id: assetId })

        if (!isAsset) {
            return res.status(400).json({ error: "Invalid Asset Id" })
            await Asset.updateOne({
                _id: assetId,
                assetName: assetName,
                assetType: assetType,
                quantity: quantity,
                base: base
            })
            return res.status(200).json({ success: "Asset is updated" })

        }


    } catch (e) {
        return res.status(400).json({ error: e.message })
    }

}


export const getAllAssets = async (req, res) => {

    const allAssets = await Asset.find({})

    const filterAssets = allAssets.map((item) => ({
        assetId: item._id,
        assetName: item.assetName,
        assetType: item.assetType,
        quantity: item.quantity,
        base: item.base
    }))

    return res.status(200).json({ assets: filterAssets })
}