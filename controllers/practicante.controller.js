import { response } from "express";
import Practicante from "../models/practicante.js";

const practicantesPost = async (req, res) => {
	const data = req.body;
	const practicante = new Practicante(data);

	//Guardar en BD
	await practicante.save();

	res.json({
		practicante,
	});
};

const getPracticantes = async (req, res = response) => {
	const { limit = 5, skip = 0 } = req.query;
	const [total, practicantes] = await Promise.all([
		Practicante.countDocuments(),
		Practicante.find()
			.skip(Number(skip))
			.limit(Number(limit))
			.populate("horario", ["entrada", "salida"]),
	]);
	res.json({
		total,
		practicantes,
	});
};

const updatePracticante = async (req, res = response) => {
	const { id } = req.params;
	const { _id, ...user } = req.body;
	const practicante = await Practicante.findByIdAndUpdate(id, user, {
		new: true,
	});

	res.json({
		msg: "Practicante actualizado con exito",
		practicante,
	});
};

export { practicantesPost, getPracticantes, updatePracticante };
