import type { Request, Response, Express } from "express";
import express = require("express");
const path = require('path');

const PORT = 3001;

export default class API {
  private readonly server: Express;

  constructor() {
    this.server = express();
  }

  async start(): Promise<number> {
    this.server.use(express.static(path.join(__dirname, '../views')));
    this.setupRoutes();

    return new Promise((res) => {
      this.server.listen(PORT, () => res(PORT));
    });
  }

  private setupRoutes(): void {
    this.server.get("/healthCheck", (req: Request, res: Response) => {
      res.status(200).send();
    });

    this.server.get('/', (req: Request, res: Response) => {
      const filePath = path.join(__dirname, '../views/pages/main', 'index.html');
      res.sendFile(filePath);
    });
  }
}
