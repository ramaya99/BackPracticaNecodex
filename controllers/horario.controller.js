import { response } from "express";
import Horario from "../models/horario.js";

const getHorarios = async (req, res = response) => {
	// const { limit = 5, desde = 0 } = req.query;
	const condition = { status: true };

	const [total, horarios] = await Promise.all([
		Horario.countDocuments(),
		Horario.find(),
		// .skip(Number(desde)).limit(Number(limit)),
	]);

	res.json({
		total,
		horarios,
	});
};

const getHorarioById = async (req, res = response) => {
	const { id } = req.params;
	const horario = await Horario.findById(id);

	res.json({ horario });
};

export { getHorarios, getHorarioById };
