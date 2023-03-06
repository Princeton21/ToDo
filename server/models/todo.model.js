import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        }
    }
)

export default mongoose.model('Todo', todoSchema);