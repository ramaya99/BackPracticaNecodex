import { response, request } from "express";
import mongoose from "mongoose";

import Practicante from "../models/practicante.js";

const { ObjectId } = mongoose.Types;

const filtrarPracticante = async (req = request, res = response) => {
	const { termino } = req.params;
	const esMongoID = ObjectId.isValid(termino);
	if (esMongoID) {
		const practicante = await Practicante.findById(termino);
		return res.json({
			results: practicante ? [practicante] : [],
		});
	}

	if (!isNaN(termino)) {
		const practicante = await Practicante.find({ telefono: termino });
		return res.json({
			results: practicante ? [practicante] : [],
		});
	}

	const regex = new RegExp(termino, "i");

	const practicante = await Practicante.find({
		$or: [{ nombre: regex }, { apellidos: regex }, { correo: regex }],
		$and: [{ status: true }],
	});
	res.json({
		results: practicante ? [practicante] : [],
	});
};

export { filtrarPracticante };
