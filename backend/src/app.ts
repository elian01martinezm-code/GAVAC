import Express from "express";
import cors from "cors";

import potreroRoutes from "./modules/potrero/routes/potrero.routes.js";
import fincaRoutes from "./modules/finca/routes/finca.routes.js";

const app = Express();

app.use(cors());
app.use(Express.json());

app.use("/potreros", potreroRoutes);
app.use("/fincas", fincaRoutes);

app.get("/", (req, res) => {
  res.json({
    mensaje: "🚀 Bienvenido a la API de GAVAC",
  });
});

export default app;