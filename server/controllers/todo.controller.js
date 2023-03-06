import TodoModel from "../models/todo.model.js";

const getTask= async (req, res) => {
  const todo = await TodoModel.find();
  res.json(todo);
};

const addTask = async (req, res) => {
  const { task } = req.body;
  TodoModel.create({ task }).then((data) => {
    console.log("Added task to database");
    console.log(data);
    res.send(data);
  });
};

const updateTask = async (req, res) => {
	const { _id, task } = req.body;
	TodoModel
		.findByIdAndUpdate(_id, { task })
		.then((data) => {
			console.log("Updated task in database");
			console.log(data);
			res.send("Updated task in database");
		}
	)
		.catch((err) => {
			console.log(err);
		})	
}

const deleteTask = async (req, res) => {
	const { _id } = req.body;
	TodoModel
		.findByIdAndDelete(_id)
		.then((data) => {
			console.log("Deleted task from database");
			console.log(data);
			res.send("Deleted task from database");
		}
	)	
		.catch((err) => {
			console.log(err);
		})
}

export { getTask, addTask, updateTask, deleteTask };