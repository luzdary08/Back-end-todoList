import { Request, Response } from "express";
import { Status } from "../models/status";

export async function getStatus(_req: Request, res: Response) {
    try {
        const statuses = await Status.find();
        res.json({ message: statuses });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

 export async function addStatus(req: Request, res: Response) {
     try {
         const status = new Status({
             name: req.body.name
         });
         await status.save();
         res.json({ message: "Status agregado correctamente" });
     } catch (error) {
         res.status(404).json({ message: error });
     }
 }    