import axios from 'axios'

const baseUrl = "http://localhost:8080/api";

const getAllTasks = (setTodolist) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            setTodolist(data)
        })
}

const addTask = (task, setText, setTodolist) => {

    axios
        .post(`${baseUrl}/add`, { task })
        .then((data) => {
            console.log(data);
            setText("")
            getAllTasks(setTodolist)
        })
        .catch((err) => console.log(err))

}




export {
  getAllTasks,addTask
}