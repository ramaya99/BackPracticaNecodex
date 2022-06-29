import mongoose from "mongoose";

const { Schema, model } = mongoose;

const HorarioSchema = Schema({
	entrada: {
		type: String,
		required: [true, "La hora de entrada es obligatoria"],
	},
	salida: {
		type: String,
		required: [true, "La hora de salida es obligatoria"],
	},
});

export default model("Horario", HorarioSchema);
