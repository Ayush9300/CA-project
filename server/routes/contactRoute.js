import express from "express";
import { submitContactForm } from "../controller/contactControllers.js";

const router = express.Router();

// POST route for contact form
router.post("/submit", submitContactForm);

export default router;
