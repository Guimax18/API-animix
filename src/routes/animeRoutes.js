import express from "express";
import AnimeController from "../controllers/animeController.js";

const routes = express.Router();

routes.get("/animes", AnimeController.listarAnimes);
routes.get("/animes/:id", AnimeController.listarAnimesPorId);
routes.post("/animes", AnimeController.cadastrarAnime);
routes.put("/animes/:id", AnimeController.atualizarAnimes);
routes.delete("/animes/:id", AnimeController.excluirAnime);

export default routes;