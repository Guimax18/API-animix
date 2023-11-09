import express from "express";
import roupas from "./roupasRoutes.js"


const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send
    ("Bem vindo a Animix"));

    app.use(express.json(), roupas);
};

export default routes;