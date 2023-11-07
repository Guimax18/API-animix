import express from "express";
import RoupaController from "../controllers/roupaController.js";

const routes = express.Router();

routes.get("/roupas", RoupaController.listarRoupas);
routes.get("/roupas/:id", RoupaController.listarRoupasPorId);
routes.post("/roupas", RoupaController.cadastrarRoupa);
routes.put("/roupas/:id", RoupaController.atualizarRoupas);
routes.delete("/roupas/:id", RoupaController.excluirRoupa);

export default routes;