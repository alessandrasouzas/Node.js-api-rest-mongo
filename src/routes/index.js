import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

const routes = (app) => {
    app.route("/").get((res, req) => res.status(200).send("Curso de Node.js"));
    app.use(express.json(), livros, autores);
};

export default routes;
