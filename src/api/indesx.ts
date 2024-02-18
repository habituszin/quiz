import type { Request, Response, Express, NextFunction } from "express";
import express = require("express");

const PORT = 3001;

export default class API {
  private readonly server: Express;

  constructor() {
    this.server = express();
  }

  async start(): Promise<number> {
    this.setupRoutes();

    return new Promise((res) => {
      this.server.listen(PORT, () => res(PORT));
    });
  }

  private setupRoutes(): void {
    this.server.get("/healthCheck", (req: Request, res: Response) => {
      res.status(200).send();
    });
  }
}
