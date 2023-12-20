import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});
    

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: Number,
    default: 0,
    min: 0,
    max: 360,
  },
  tasks: [taskSchema],
});

const ListModel = mongoose.model("List", listSchema);

export default ListModel;
