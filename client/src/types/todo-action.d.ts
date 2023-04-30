export interface Task {
    id: number;
    text: string;
    completed?: boolean;
}

export interface TodoState {
    tasks: Task[];
}

export interface AddTaskAction {
    type: string;
    payload: Task;
}

export interface RemoveTaskAction {
    type: string;
    payload: number;
}

export interface UpdateTaskAction {
    type: string;
    payload: any;
}

export interface CompleteTaskAction {
    type: string;
    payload: number;
}

export interface DeleteCompletedTasksAction {
    type: string;
    payload: null;
}

export type TodoActionTypes =
    | AddTaskAction
    | RemoveTaskAction
    | UpdateTaskAction
    | CompleteTaskAction
    | DeleteCompletedTasksAction;
