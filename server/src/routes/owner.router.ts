import express from "express";
import { OwnerController } from "../controllers/owner.controller.js";

const ownerRouter = express.Router();

ownerRouter.get("/", OwnerController.getAll);
ownerRouter.post("/", OwnerController.insert);
ownerRouter.put("/", OwnerController.update);
ownerRouter.delete("/", OwnerController.delete);


export {ownerRouter};