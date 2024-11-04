import { Request, Response } from "express";
import { Task } from "../models/task";


export async function getTasks(_req: Request, res: Response) {
    try {
        const tasks = await Task.find().populate('status');
        res.json({ message: tasks });

    } catch (error) {
        res.status(404).json({ message: error });

    }
}
export async function getTasksById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        console.log(task)
        res.json({ message: task });

    } catch (error) {
        res.status(404).json({ message: error });

    }
}


export async function addTask(req: Request, res: Response) {
    try {
        const task = new Task({
            description: req.body.description,
            status: req.body.status
        });
        await task.save()

        res.json({ message: "Tarea agragada correctamente" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export async function deleteTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            res.status(404).json({ message: "Tarea no encontrada" });
            return 
        }

        res.json({ message: "Tarea eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea", error });
    }
}

export async function updateTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { description, status, completed } = req.body;

        const updatedTask = await Task.findOne({ _id: id });

        if (!updatedTask) {
            res.status(404).json({ message: "Tarea no encontrada" });
            return;
        }


        updatedTask.description = description ?? updatedTask.description;
        updatedTask.status = status ?? updatedTask.status;
        updatedTask.completed = completed ?? updatedTask.completed;

        await updatedTask.save();
        res.json({ message: "Tarea actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarea", error });
    }
}