import mongoose from "mongoose"



const AssignmentSchema = mongoose.Schema({
    asset: { type: mongoose.Schema.Types.ObjectId, ref: "asset" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    quantity: { type: Number, required: true },
    base: { type: String, required: true },


}, { timestamps: true })

const Assignment = mongoose.model("assignment", AssignmentSchema)


export default Assignment