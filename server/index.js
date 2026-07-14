import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import clinicInfo from "./clinicinfo.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:free",

      messages: [
        {
          role: "system",
          content: clinicInfo,
        },

        ...history,

        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      reply: "Sorry, something went wrong.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

