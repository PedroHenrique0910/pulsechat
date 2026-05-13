import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors())
app.use(express.json())

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/api/login", (req, res) => {
    const { email, senha } = req.body

    const token = jwt.sign(
        { email },
        "minha-chave-secreta",
        { expiresIn: "1d" }
    )

    return res.json({ success: true, token })
});