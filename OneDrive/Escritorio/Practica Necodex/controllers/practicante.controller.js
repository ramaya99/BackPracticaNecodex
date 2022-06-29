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
	// const { limit = 5, desde = 0 } = req.query;
	const condition = { status: true };

	const [total, practicantes] = await Promise.all([
		Practicante.countDocuments(condition),
		Practicante.find(condition),
		// .skip(Number(desde)).limit(Number(limit)),
	]);

	res.json({
		total,
		practicantes,
	});
};

// const statusPracticante = async (req, res = response) => {
// 	const { id } = req.params;
// 	const { status } = req.body;

// 	const practicante = await Practicante.findByIdAndUpdate(id, status, {
// 		new: true,
// 	});
// 	res.json(practicante);
// };

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

export {
	practicantesPost,
	getPracticantes,
	// statusPracticante,
	updatePracticante,
};
