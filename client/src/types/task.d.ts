import { Dispatch, SetStateAction } from "react";

export interface TaskState {
    _id: string; 
    task: [];
    completed: boolean;
}

export interface GetAllTasksParams { 
    setTodolist: Dispatch<SetStateAction<{task: string; }[]>>;
}

export interface AddTaskParams {
    task: string;
    setTask: (task: string) => void;
    setTodolist: any;
}

export interface UpdateTaskParams {
    taskId: string;
    task: string;
    setTask: (task: string) => void;
    setIsUpdating: (isUpdating: boolean) => void;
    setTodolist: any;
}

export interface CompleteTaskParams {
    taskId: string;
    setTodolist: any;
}

export interface DeleteCompletedTasksParams {
    taskId: string;
    setTodolist: any;
}
