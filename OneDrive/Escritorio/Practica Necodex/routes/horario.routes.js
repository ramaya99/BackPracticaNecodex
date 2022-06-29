import { Router } from "express";
import { check } from "express-validator";

import {
	getHorarioById,
	getHorarios,
} from "../controllers/horario.controller.js";
import { existeHorario } from "../helpers/validaciones-bd.js";
import { validaciones } from "../middlewares/validaciones.js";
// import { validaciones } from "../middlewares/validaciones.js";

const routerHorario = Router();

routerHorario.get("/", getHorarios);
routerHorario.get(
	"/:id",
	[
		check("id", "El id proporcionado no es un id valido").isMongoId(),
		check("id", "El id no existe en la base de datos").custom(existeHorario),
		validaciones,
	],
	getHorarioById
);

export { routerHorario };
