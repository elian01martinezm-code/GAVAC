import Express from "express";
import cors from "cors";

const app = Express();

app.use(cors());
app.use(Express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "🚀 Bienvenido a la API de GAVAC"
  });
});

export default app;