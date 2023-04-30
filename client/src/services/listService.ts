import axios from "axios";
import { ListState, GetAllListsParams, CreateListParams, DeleteListParams, UpdateListParams } from '../types/list';

const baseUrl = "http://localhost:8080/api/list";

const getAllLists = ({setListArray}:GetAllListsParams) => {
  axios
    .get(baseUrl)
    .then(({data}) => {
      console.log(data);
      setListArray(data);
    })
    .catch((err) => console.log(err));
};

const createList = ({title, color, setList, setListArray}: CreateListParams) => {
  axios
    .post(baseUrl, { title,color })
    .then((data) => {
      console.log(data);
      setList("");
      getAllLists({setListArray});
    }) 
    .catch((err) => console.log(err));
};

const deleteList = ({listId, setListArray}:DeleteListParams) => {
  axios
    .delete(`${baseUrl}/${listId}`, { data: { _id: listId } })
    .then((data) => {
      console.log(data);
      getAllLists({setListArray});
    })
    .catch((err) => console.log(err));
};

const updateList = ({taskId, task, setTask, setIsUpdating, setTodolist ,getAll}: UpdateListParams) => {
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


export { getAllLists, createList, deleteList, updateList };
