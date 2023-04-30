import axios from 'axios'
import {GetAllTasksParams, AddTaskParams, UpdateTaskParams, CompleteTaskParams, DeleteCompletedTasksParams } from '../types/task'

const baseUrl = "http://localhost:8080/api";

const getAllTasks = ({setTodolist}:GetAllTasksParams) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            setTodolist(data)
        })
}

const addTask = ({task, setTask, setTodolist}:AddTaskParams) => {
    axios
        .post(`${baseUrl}/add`, { task })
        .then((data) => {
            console.log(data);
            setTask("")
            getAllTasks(setTodolist)
        })
        .catch((err) => console.log(err))

}


const updateTask = ({taskId, task, setTask, setIsUpdating,setTodolist}: UpdateTaskParams) => {
  axios
    .put(`${baseUrl}/update`, { _id: taskId, task })
      .then((data) => {
          console.log(data);
          setTask("");
          setIsUpdating(false);
          getAllTasks(setTodolist);

    })
    .catch((err) => console.log(err));
};

const completeTask = ({taskId, setTodolist}:CompleteTaskParams) => {
    axios
        .delete(`${baseUrl}/complete`, { data: { _id: taskId } })
        .then((data) => {
            console.log(data);
            getAllTasks(setTodolist)
        })
        .catch((err) => console.log(err))
}

const deleteCompletedTasks = ({taskId, setTodolist}:DeleteCompletedTasksParams) => {
    axios
        .delete(`${baseUrl}/delete` , { data: { _id: taskId } })
        .then((data) => {
            console.log(data);
            getAllTasks(setTodolist)// will try later to do optimistic updates rather than refetching all tasks
        })
        .catch((err) => console.log(err))
}

export {
  getAllTasks,addTask,updateTask,completeTask ,deleteCompletedTasks
}