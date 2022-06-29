import Router from "express";
import { filtrarPracticante } from "../controllers/filter.controller.js";

const routerFilter = Router();

routerFilter.get("/:termino", filtrarPracticante);

export { routerFilter };
