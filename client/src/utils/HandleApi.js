import axios from 'axios'

const baseUrl = "http://localhost:8080/api";

const getAllTasks = (setTodolist) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            setTodolist(data)
        })
}

const addTask = (task, setTask, setTodolist) => {
    axios
        .post(`${baseUrl}/add`, { task })
        .then((data) => {
            console.log(data);
            setTask("")
            getAllTasks(setTodolist)
        })
        .catch((err) => console.log(err))

}

const updateTask = (taskId, task, setTask, setIsUpdating,setTodolist) => {
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

const completeTask = (taskId, setTodolist) => {
    axios
        .delete(`${baseUrl}/complete`, { data: { _id: taskId } })
        .then((data) => {
            console.log(data);
            getAllTasks(setTodolist)
        })
        .catch((err) => console.log(err))
}

const deleteCompletedTasks = (taskId,setTodolist) => {
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