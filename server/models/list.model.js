import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,

        },
        color: {
            type: Number,
            default: 0,
            min: 0,
            max: 360
        },
        tasks: {
            type: Array,
            default: [],
        }
       
    }
)

const ListModel = mongoose.model('List', listSchema);

export default ListModel;