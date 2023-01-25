const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./movie-notes.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/movie_notes", notesRouter);

module.exports = routes;