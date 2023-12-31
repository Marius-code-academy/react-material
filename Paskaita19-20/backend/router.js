import express from "express";
import { getUsers, login, register } from "./controllers.js";
import { validateJwt } from "./middleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/users", validateJwt, getUsers);

// router.get("/users/:id", validateJwt, getUsers);

export default router;
