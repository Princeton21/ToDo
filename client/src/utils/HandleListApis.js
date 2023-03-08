import axios from "axios";

const baseUrl = "http://localhost:8080/api/list";

const getAllLists = (setListArray) => {
  axios
    .get(baseUrl)
    .then(({data}) => {
      console.log(data);
      setListArray(data);
    })
    .catch((err) => console.log(err));
};

const addList = (list, setList, setListArray) => {
  axios
    .post(baseUrl, { list })
    .then((data) => {
      console.log(data);
      setList("");
      getAllLists(setListArray);
    })
    .catch((err) => console.log(err));
};

const deleteList = (listId, setListArray) => {
  axios
    .delete(`${baseUrl}/${listId}`, { data: { _id: taskId } })
    .then((data) => {
      console.log(data);
      getAllLists(setListArray);
    })
    .catch((err) => console.log(err));
};

const updateList = (taskId, task, setTask, setIsUpdating, setTodolist) => {
  axios
    .put(baseUrl, { _id: taskId, task })
    .then((data) => {
      console.log(data);
      setTask("");
      setIsUpdating(false);
      getAll(setTodolist);
    })
    .catch((err) => console.log(err));
};


export { getAllLists, addList, deleteList, updateList };
