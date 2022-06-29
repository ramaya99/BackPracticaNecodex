import Practicante from "../models/practicante.js";
import Horario from "../models/horario.js";

const existeCorreo = async (correo = "") => {
	const correoExiste = await Practicante.findOne({ correo });
	if (correoExiste) {
		throw new Error(`El correo ${correo} ya existe en la base de datos`);
	}
};

const existeTelefono = async (telefono) => {
	const telefonoExiste = await Practicante.findOne({ telefono });
	if (telefonoExiste) {
		throw new Error(`El telefono ${telefono} ya existe en la base de datos`);
	}
};

const existeCLABE = async (clabe = "") => {
	const clabeExiste = await Practicante.findOne({ clabe });
	if (clabeExiste) {
		throw new Error(`La clabe ${clabe} ya existe en la base de datos`);
	}
};

const existeHorario = async (id) => {
	const horarioExiste = await Horario.findById(id);
	if (!horarioExiste) {
		throw new Error(`El horario no existe en la base de datos`);
	}
};

const existePracticante = async (id) => {
	const practicanteExiste = await Practicante.findById(id);
	if (!practicanteExiste) {
		throw new Error(
			`El practicante con id ${id} no existe en la base de datos`
		);
	}
};

export {
	existeCorreo,
	existeTelefono,
	existeCLABE,
	existeHorario,
	existePracticante,
};
