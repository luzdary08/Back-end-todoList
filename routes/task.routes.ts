import { Router } from "express";
import { get } from "mongoose";
import { getTasks, updateTask, addTask, deleteTask, getTasksById } from "../controllers/task.controller";

export const routerTask = Router()

routerTask.get('/listById/:id', getTasksById)
routerTask.get('/list', getTasks)
routerTask.post('/add', addTask)
routerTask.put('/update/:id', updateTask)
routerTask.delete('/delete/:id', deleteTask)





