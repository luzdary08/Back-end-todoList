import { Router } from "express";
import { addStatus, getStatus } from "../controllers/status.controller";

export const routerStatus = Router()

routerStatus.get('/list', getStatus)
routerStatus.post('/add', addStatus)