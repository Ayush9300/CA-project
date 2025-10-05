import express from "express";
import { submitContactForm } from "../controller/contactControllers.js";

const router = express.Router();

router.post("/submit", submitContactForm);

export default router;
