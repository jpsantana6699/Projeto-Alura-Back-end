import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);

routes.get("/autores/:id", AutorController.listarAutoresPorId);

routes.post("/autores", AutorController.cadrastarAutores);

routes.put("/autores/:id", AutorController.atualizarAutores);

routes.delete("/autores/:id", AutorController.deletarAutores);

export default routes;