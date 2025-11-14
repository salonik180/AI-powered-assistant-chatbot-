import express from "express";
import { chatWithAI } from "../controllers/chatbotController.js";

const router = express.Router();

// POST endpoint to handle chatbot requests
router.post("/message", chatWithAI);

export default router;
