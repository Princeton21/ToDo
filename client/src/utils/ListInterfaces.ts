export interface List {
    _id: string;
    title: string;
    color: string;
}
import { Dispatch, SetStateAction } from "react";

export interface GetAllListsParams {
    setListArray: Dispatch<SetStateAction<{ _id: string; title: string; color: number; tasks: never[]; }[]>>

}

export interface CreateListParams {
    title: string;
    color: number;
    setList: Dispatch<React.SetStateAction<string>>;
    setListArray: Dispatch<SetStateAction<{ _id: string; title: string; color: number; tasks: never[]; }[]>>
}

export interface DeleteListParams {
    listId: string;
    setListArray: Dispatch<SetStateAction<{ _id: string; title: string; color: number; tasks: never[]; }[]>>

}

export interface UpdateListParams {
    taskId: string;
    task: string;
    setTask: (task: string) => void;
    setIsUpdating: (isUpdating: boolean) => void;
    setListArray: Dispatch<SetStateAction<{ _id: string; title: string; color: number; tasks: never[]; }[]>>
    getAll: any;
    setTodolist: any;
}
