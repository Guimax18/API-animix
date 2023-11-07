import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/user", UserController.listarUsers);
routes.get("/user/:id", UserController.listarUsersPorId);
routes.post("/user", UserController.cadastrarUser);
routes.put("/user/:id", UserController.atualizarUsers);
routes.delete("/user/:id", UserController.excluirRoupa);

export default routes;