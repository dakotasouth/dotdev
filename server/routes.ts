import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export function registerRoutes(app: Express): Server {
  // Add resume download endpoint
  app.get('/api/resume', (req, res) => {
    const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
    res.download(resumePath, 'Dakota_South_Resume.pdf', (err) => {
      if (err) {
        res.status(404).send('Resume not found');
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}