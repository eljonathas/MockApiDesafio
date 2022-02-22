import { Request, Response } from "express";
import indexData from "./mock/Colaborator/index.json";
import showData from "./mock/Colaborator/show.json";

export class ColaboratorController {
  index(req: Request, res: Response) {
    return res.status(200).send(indexData);
  }

  show(req: Request, res: Response) {
    return res.status(200).send(showData);
  }
}
