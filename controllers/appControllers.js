import Task from '../models/Tasks.js';


export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.render('index', { tasks });
  } catch (error) {
    res.status(500).send('Error fetching tasks');
  }
}

export const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
 const newTask =   await Task.create({ title, description });

    res.redirect('/');
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).send('Error adding task');
  }
}

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.destroy({ where: { id: taskId } });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error deleting task');
  }
}
export const editTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
    
    if (!task) {
      return res.status(404).send('Task not found');
    }
    
    res.render('edit', { task });
  } catch (error) {
    res.status(500).send('Error fetching task for edit');
  }
}
export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description } = req.body;
    
    const task = await Task.findByPk(taskId);
    
    if (!task) {
      return res.status(404).send('Task not found');
    }
    
    task.title = title;
    task.description = description;
    await task.save();
    
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error updating task');
  }
}
export const markTaskAsCompleted = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
    
    if (!task) {
      return res.status(404).send('Task not found');
    }
    
    task.isCompleted = !task.isCompleted; 
    await task.save();
    
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error marking task as completed');
  }
}