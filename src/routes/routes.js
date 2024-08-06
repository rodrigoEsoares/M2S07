const { Router } = require("express");

const cursosRoutes = require("./cursos.routes");
const laboratoriosRoutes = require("./laboratorios.routes");


const routes = new Router();

routes.use("/cursos", cursosRoutes);
routes.use("/laboratorios", laboratoriosRoutes);

module.exports = routes;
