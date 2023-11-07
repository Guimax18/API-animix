import express from "express";
import categoriaController from "../controllers/categoriaController.js";

const routes = express.Router();

routes.get("/categorias", categoriaController.listarCategorias);
routes.get("/categorias/:id", categoriaController.listarCategoriasPorId);
routes.post("/categorias", categoriaController.cadastrarCategoria);
routes.put("/categorias/:id", categoriaController.atualizarCategorias);
routes.delete("/categorias/:id", categoriaController.excluirCategoria);

export default routes;