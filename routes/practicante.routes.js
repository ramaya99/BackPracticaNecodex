import { Router } from "express";
import { check } from "express-validator";

import {
	practicantesPost,
	getPracticantes,
	// statusPracticante,
	updatePracticante,
} from "../controllers/practicante.controller.js";
import {
	existeCorreo,
	existeTelefono,
	existeCLABE,
	existeHorario,
	existePracticante,
} from "../helpers/validaciones-bd.js";
import { validaciones } from "../middlewares/validaciones.js";

const routerPracticante = Router();

routerPracticante.post(
	"/",
	[
		check("nombre", "El nombre es obligatorio").not().isEmpty(),
		check("apellidos", "Los apellidos son obligatorios").not().isEmpty(),
		check("genero", "El genero es obligatorio").not().isEmpty(),
		check("correo", "El correo es obligatorio").not().isEmpty(),
		check("correo", "Correo no valido").isEmail(),
		check("correo").custom(existeCorreo),
		check("nacimiento", "La fecha de nacimiento es obligatoria")
			.not()
			.isEmpty(),
		check("nacimiento", "La fecha no es valida").isDate(),
		check("telefono", "El telefono debe de ser un numero").isNumeric(),
		check("telefono").custom(existeTelefono),
		check("clabe").custom(existeCLABE),
		check("horario", "El horario no es id de mongo").isMongoId(),
		check("horario").custom(existeHorario),
		validaciones,
	],
	practicantesPost
);

routerPracticante.get("/", getPracticantes);

routerPracticante.put(
	"/status/:id",
	[
		check("id", "El id proporcionado no es un id valido").isMongoId(),
		check("id").custom(existePracticante),
		check("status", "El nuevo estatus del practicante es obligatorio")
			.not()
			.isEmpty(),
		validaciones,
	],
	updatePracticante
);

routerPracticante.put(
	"/:id",
	[
		check("id", "El id proporcionado no es un id valido").isMongoId(),
		check("id").custom(existePracticante),
		validaciones,
	],
	updatePracticante
);

export { routerPracticante };
