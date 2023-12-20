import ListModel from "../models/list.model.js";

const addTask = async (req, res) => {
  try {
    const { listId } = req.params;
    const { task } = req.body;
    const list = await ListModel.findById(listId);

    if (!list) {
      return res.status(404).json({ error: "List not found in the database" });
    }

    const newTask = { task, completed: false };
    list.tasks.push(newTask);
    const updatedList = await list.save();
    res.json(updatedList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { _id, task } = req.body;
    const list = await ListModel.findOneAndUpdate(
      { "tasks._id": _id },
      { $set: { "tasks.$": task } },
      { new: true }
    );
    res.json(list);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const completeTask = async (req, res) => {
  try {
    const { listId } = req.params;
    const { _id } = req.body;
    const list = await ListModel.findOneAndUpdate(
      { _id: listId, "tasks._id": _id },
      { $set: { "tasks.$.completed": true } },
      { new: true }
    );
    res.json(list);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteCompletedTasks = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await ListModel.findById(listId);
    if (!list) {
      return res.status(404).json({ error: "List not found in the database" });
    }
    list.tasks = list.tasks.filter((task) => !task.completed);
    const updatedList = await list.save();
    res.json(updatedList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { addTask, updateTask, completeTask, deleteCompletedTasks };
