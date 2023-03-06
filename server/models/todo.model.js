import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        color: {
            type: Number,
            required: true
        }
    }
)

export default mongoose.model('Todo', todoSchema);