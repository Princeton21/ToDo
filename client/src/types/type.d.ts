import { TodoState } from "./todo-action";
export interface AppState {
    TodoState: TodoState;
}

export interface MobileState {
    isMobile: boolean;
}