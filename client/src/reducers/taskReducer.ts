import { TodoState, TodoActionTypes } from '../types/todo-action';
import {
    ADD_TASK,
    UPDATE_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
    DELETE_COMPLETED_TASKS,
} from '../actions';

interface Task {
    id: number;
    text: string;
    completed?: boolean;
}

type TaskPayload = Pick<Task, 'id' | 'text'> & { completed?: boolean };

type Payload = number | Task | TaskPayload | null;

const initialState: TodoState = {
    tasks: [],
};

const taskReducer = (
    state = initialState,
    action: TodoActionTypes
): TodoState => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload as Task],
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case UPDATE_TASK:
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, text: action.payload.text } : task
                ),
            };
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: true } : task
                ),
            };
        case DELETE_COMPLETED_TASKS:
            return {
                ...state,
                tasks: state.tasks.filter((task) => !task.completed),
            };
        default:
            return state;
    }
};

export default taskReducer;
