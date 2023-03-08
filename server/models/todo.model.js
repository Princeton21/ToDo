import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        // tasks: {        
        //     type: Array,
        //     default: [],
        // }

        // isCompleted: {
        //     type: Boolean,
        //     default: false,
        // }       
    }
)

const TodoModel = mongoose.model('Todo', todoSchema);

export default TodoModel;