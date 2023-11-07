import express from "express";
import roupas from "./roupasRoutes.js"
import users from "./userRoutes.js"
import categorias from "./categoriaRoutes.js"
import animes from "./animeRoutes.js"

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send
    ("Bem vindo a Animix"));

    app.use(express.json(), roupas);
};

export default routes;