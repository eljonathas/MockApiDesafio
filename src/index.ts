import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { ColaboratorController } from "./controllers/ColaboratorController";
import { RoleController } from "./controllers/RoleController";

const colaboratorController = new ColaboratorController();
const roleController = new RoleController();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/agents", colaboratorController.index);
app.get("/agent/1", colaboratorController.show);
app.get("/roles", roleController.index);
app.get("/role/1", roleController.show);

app.listen(PORT, () => console.log(`Server running on port ${PORT}..`));
