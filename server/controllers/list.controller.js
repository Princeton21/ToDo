import listModel from "../models/list.model.js";

const getLists = async (req, res) => {
  const lists = await listModel.find();
  res.json(lists);
};
const getList = async (req, res) => {
  const { listId } = req.params;
  listModel
    .findById(listId)
    .then((data) => {
      console.log("Found the list in the database");
      res.json(data);
    })
    .catch((err) => console.log(err));
}

const createList = async (req, res) => {
  const { title , color } = req.body;
  listModel
    .create({ title ,color })
    .then((data) => {
      console.log("Added a new list to the  database");
      console.log(data);
      res.json({
        message: "Added a new list to the  database",
      }); 
    })
    .catch((err) => console.log(err));
}; 


const deleteList = async (req, res) => {
  const { listId } = req.params;
  listModel
    .findByIdAndDelete(listId)
    .then((data) => {
      console.log("Deleted a list from the database");
      res.json({
        message: "Deleted a list from the database",
      });
    })
    .catch((err) => console.log(err));
}

export { getList ,getLists, createList, deleteList };
