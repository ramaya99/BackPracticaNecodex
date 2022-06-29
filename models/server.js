import express from "express";
import cors from "cors";
import "dotenv/config";

import { dbConnection } from "../db/config.db.js";
import { routerFilter } from "../routes/filter.routes.js";
import { routerHorario } from "../routes/horario.routes.js";
import { routerPracticante } from "../routes/practicante.routes.js";

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		//Paths
		this.paths = {
			filter: "/api/filter",
			horarios: "/api/horarios",
			practicantes: "/api/practicantes",
		};

		//Conexion base de datos
		this.connectDatabase();

		//Middlewares
		this.middlewares();

		//Rutas de mi app
		this.routes();
	}
	middlewares() {
		//CORS
		this.app.use(cors());

		//Body parser
		this.app.use(express.json());

		//Directorio publico
		this.app.use(express.static("public"));
	}
	routes() {
		this.app.use(this.paths.filter, routerFilter);
		this.app.use(this.paths.horarios, routerHorario);
		this.app.use(this.paths.practicantes, routerPracticante);
	}
	async connectDatabase() {
		await dbConnection();
	}

	start() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en puerto", this.port);
		});
	}
}

export { Server };
