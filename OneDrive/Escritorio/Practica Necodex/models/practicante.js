import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PracticanteSchema = Schema({
	nombre: {
		type: String,
		required: [true, "El nombre es obligatorio"],
	},
	apellidos: {
		type: String,
		required: [true, "El apellido es obligatorio"],
	},
	genero: {
		type: String,
		required: [true, "El genero es obligatorio"],
	},
	correo: {
		type: String,
		required: [true, "El correo es obligatorio"],
		unique: true,
	},
	telefono: {
		type: Number,
		unique: true,
	},
	clabe: {
		type: String,
		unique: true,
	},
	horario: {
		type: Schema.Types.ObjectId,
		ref: "Horarios",
		required: true,
	},
	status: {
		type: Boolean,
		default: true,
	},
});

PracticanteSchema.methods.toJSON = function () {
	const { __v, password, _id, ...practicante } = this.toObject();
	practicante.uid = _id;
	return practicante;
};

export default model("Practicante", PracticanteSchema);
