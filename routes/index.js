import express from "express";
import { getUsers, Register, Login } from "../controllers/Users";

const router = express.Router();
router.get("/users", getUsers);
router.post("/users", Register);
router.post("/login", Login);

export default router;
