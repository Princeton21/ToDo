export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_COMPLETED_TASKS = 'DELETE_COMPLETED_TASKS';

import { AddTaskAction,RemoveTaskAction,UpdateTaskAction,CompleteTaskAction,DeleteCompletedTasksAction, Task } from '../types/todo-action';

export const addTask = (task: Task): AddTaskAction => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const removeTask = (id: number): RemoveTaskAction => {
    return {
        type: REMOVE_TASK,
        payload: id
    };
};

export const updateTask = ({ id, text }: { id: number; text: string }): UpdateTaskAction => {
    return {
        type: UPDATE_TASK,
        payload: {
            id,
            text
        }
    };
};

export const completeTask = (id: number): CompleteTaskAction => {
    return {
        type: COMPLETE_TASK,
        payload: id
    };
};

export const deleteCompletedTasks = (): DeleteCompletedTasksAction => {
    return {
        type: DELETE_COMPLETED_TASKS,
        payload: null
    };
};