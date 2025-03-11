import { users, type User, type InsertUser } from "@shared/schema";
import { resources, metrics, partners } from "@shared/schema";
import type { Resource, Metric, Partner } from "@shared/schema";
import type { InferSelectModel } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getResources(): Promise<Resource[]>;
  createResource(resource: Resource): Promise<Resource>;
  getMetrics(): Promise<Metric[]>;
  createMetric(metric: Metric): Promise<Metric>;
  getPartners(): Promise<Partner[]>;
  createPartner(partner: Partner): Promise<Partner>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private resources: Map<number, Resource>;
  private metrics: Map<number, Metric>;
  private partners: Map<number, Partner>;
  private currentId: { [key: string]: number };
  private currentUserId: number;

  constructor() {
    this.users = new Map();
    this.resources = new Map();
    this.metrics = new Map();
    this.partners = new Map();
    this.currentId = {
      resources: 1,
      metrics: 1,
      partners: 1
    };
    this.currentUserId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }

  async createResource(resource: Omit<Resource, "id">): Promise<Resource> {
    const id = this.currentId.resources++;
    const newResource = { ...resource, id } as Resource;
    this.resources.set(id, newResource);
    return newResource;
  }

  async getMetrics(): Promise<Metric[]> {
    return Array.from(this.metrics.values());
  }

  async createMetric(metric: Omit<Metric, "id">): Promise<Metric> {
    const id = this.currentId.metrics++;
    const newMetric = { ...metric, id } as Metric;
    this.metrics.set(id, newMetric);
    return newMetric;
  }

  async getPartners(): Promise<Partner[]> {
    return Array.from(this.partners.values());
  }

  async createPartner(partner: Omit<Partner, "id">): Promise<Partner> {
    const id = this.currentId.partners++;
    const newPartner = { ...partner, id } as Partner;
    this.partners.set(id, newPartner);
    return newPartner;
  }
}

export const storage = new MemStorage();