import ListModel from "../models/list.model.js";

const getLists = async (req, res) => {
  const lists = await ListModel.find();
  res.json(lists);
};

const getList = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await ListModel.findById(listId);

    if (!list) {
      return res
        .status(404)
        .json({ error: "List not found in the database" });
    } else {
      res.json(list);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const createList = async (req, res) => {
  const { title, color } = req.body;
  ListModel
    .create({ title, color })
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
  ListModel
    .findByIdAndDelete(listId)
    .then((data) => {
      console.log("Deleted a list from the database");
      res.json({
        message: "Deleted a list from the database",
      });
    })
    .catch((err) => console.log(err));
};

const deleteAllLists = async (req, res) => {
  try {
    const lists = await ListModel.deleteMany({});
    res.json(lists);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export { getList, getLists, createList, deleteList , deleteAllLists };
