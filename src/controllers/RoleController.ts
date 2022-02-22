import { Request, Response } from "express";
import indexData from "./mock/Role/index.json";
import showData from "./mock/Role/show.json";

export class RoleController {
  index(req: Request, res: Response) {
    return res.status(200).send(indexData);
  }

  show(req: Request, res: Response) {
    return res.status(200).send(showData);
  }
}
