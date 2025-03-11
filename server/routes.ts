import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertResourceSchema, insertMetricSchema, insertPartnerSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  // Resources endpoints
  app.get("/api/resources", async (_req, res) => {
    try {
      const resources = await storage.getResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });

  app.post("/api/resources", async (req, res) => {
    try {
      const resource = insertResourceSchema.parse(req.body);
      const created = await storage.createResource(resource);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ message: "Invalid resource data" });
    }
  });

  // Metrics endpoints
  app.get("/api/metrics", async (_req, res) => {
    try {
      const metrics = await storage.getMetrics();
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch metrics" });
    }
  });

  app.post("/api/metrics", async (req, res) => {
    try {
      const metric = insertMetricSchema.parse(req.body);
      const created = await storage.createMetric(metric);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ message: "Invalid metric data" });
    }
  });

  // Partners endpoints
  app.get("/api/partners", async (_req, res) => {
    try {
      const partners = await storage.getPartners();
      res.json(partners);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch partners" });
    }
  });

  app.post("/api/partners", async (req, res) => {
    try {
      const partner = insertPartnerSchema.parse(req.body);
      const created = await storage.createPartner(partner);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ message: "Invalid partner data" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        throw new Error("Missing required fields");
      }
      // Here you would typically integrate with an email service
      // For now we'll just return success
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(400).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
