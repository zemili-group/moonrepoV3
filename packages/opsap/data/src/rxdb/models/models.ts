// models.ts
import type { RxCollection, RxJsonSchema } from "npm:rxdb"

import type {
  ActivityFeed,
  Certification,
  Company,
  LogDraft,
  Notification,
  User,
} from "../types/types.ts"

// Define schemas using the imported types

export const userSchema: RxJsonSchema<User> = {
  title: "users schema",
  version: 0,
  description: "stores user profiles",
  type: "object",
  primaryKey: "user_id",
  properties: {
    user_id: { type: "string" },
    email: { type: "string" },
    name: { type: "string" },
    password_hash: { type: "string" },
    created_at: { type: "string", format: "date-time" },
    role: { type: "string" },
    profile_pic: { type: "string" },
    certifications: { type: "array", items: { type: "string" } },
    companies: { type: "array", items: { type: "string" } },
    log_drafts: { type: "array", items: { type: "string" } },
    signature: { type: "string" },
    settings: {
      type: "object",
      properties: {
        notifications: { type: "boolean" },
        theme: { type: "string" },
      },
    },
  },
  required: ["user_id", "email", "name", "password_hash", "created_at"],
}

export const companySchema: RxJsonSchema<Company> = {
  title: "companies schema",
  version: 0,
  description: "stores company profiles",
  type: "object",
  primaryKey: "company_id",
  properties: {
    company_id: { type: "string" },
    name: { type: "string" },
    logo: { type: "string" },
    description: { type: "string" },
    employees: { type: "array", items: { type: "string" } },
    total_dives: { type: "number" },
    total_hours: { type: "number" },
    log_drafts: { type: "array", items: { type: "string" } },
    created_at: { type: "string", format: "date-time" },
    verified: { type: "boolean" },
    contact_info: {
      type: "object",
      properties: {
        email: { type: "string" },
        phone: { type: "string" },
        address: { type: "string" },
      },
    },
  },
  required: ["company_id", "name", "created_at"],
}

export const logDraftSchema: RxJsonSchema<LogDraft> = {
  title: "log draft schema",
  version: 0,
  description: "stores log drafts",
  type: "object",
  primaryKey: "log_id",
  properties: {
    log_id: { type: "string" },
    user_id: { type: "string" },
    company_id: { type: "string" },
    logbook_type: { type: "string" },
    dive_type: { type: "string" },
    location: { type: "string" },
    date: { type: "string", format: "date-time" },
    depth: { type: "number" },
    duration: { type: "number" },
    equipment: { type: "array", items: { type: "string" } },
    decompression_details: { type: "object" }, // Adjust type as needed
    work_description: { type: "string" },
    incidents: { type: "string" },
    signatures: {
      type: "array",
      items: {
        type: "object",
        properties: {
          url: { type: "string" },
          signed_by: { type: "string" },
          signed_at: { type: "string", format: "date-time" },
        },
      },
    },
    created_at: { type: "string", format: "date-time" },
    is_verified: { type: "boolean" },
  },
  required: [
    "log_id",
    "user_id",
    "company_id",
    "logbook_type",
    "dive_type",
    "location",
    "date",
    "created_at",
  ],
}

export const certificationSchema: RxJsonSchema<Certification> = {
  title: "certification schema",
  version: 0,
  description: "stores certifications",
  type: "object",
  primaryKey: "cert_id",
  properties: {
    cert_id: { type: "string" },
    user_id: { type: "string" },
    name: { type: "string" },
    issuer: { type: "string" },
    issued_at: { type: "string", format: "date-time" },
    expires_at: { type: "string", format: "date-time" },
    certificate_image: { type: "string" },
  },
  required: [
    "cert_id",
    "user_id",
    "name",
    "issuer",
    "issued_at",
    "certificate_image",
  ],
}

export const notificationSchema: RxJsonSchema<Notification> = {
  title: "notifications schema",
  version: 0,
  description: "stores notifications",
  type: "object",
  primaryKey: "notif_id",
  properties: {
    notif_id: { type: "string" },
    user_id: { type: "string" },
    message: { type: "string" },
    link: { type: "string" },
    type: { type: "string" },
    created_at: { type: "string", format: "date-time" },
    read: { type: "boolean" },
  },
  required: ["notif_id", "user_id", "message", "created_at"],
}

export const activityFeedSchema: RxJsonSchema<ActivityFeed> = {
  title: "activity feed schema",
  version: 0,
  description: "stores user activity feed",
  type: "object",
  primaryKey: "activity_id",
  properties: {
    activity_id: { type: "string" },
    user_id: { type: "string" },
    timestamp: { type: "string", format: "date-time" },
    activity_type: { type: "string" },
    details: { type: "string" },
    related_log_id: { type: "string" },
    related_certification_id: { type: "string" },
    related_company_id: { type: "string" },
  },
  required: [
    "activity_id",
    "user_id",
    "timestamp",
    "activity_type",
    "details",
  ],
}

export const schemas = {
  users: {
    schema: userSchema,
  },
  companies: {
    schema: companySchema,
  },
  log_drafts: {
    schema: logDraftSchema,
  },
  certifications: {
    schema: certificationSchema,
  },
  notifications: {
    schema: notificationSchema,
  },
  activity_feed: {
    schema: activityFeedSchema,
  },
}

export type CollectionName = keyof typeof schemas

export type UserCollection = RxCollection<User>
export type CompanyCollection = RxCollection<Company>
export type LogDraftCollection = RxCollection<LogDraft>
export type CertificationCollection = RxCollection<Certification>
export type NotificationCollection = RxCollection<Notification>
export type ActivityFeedCollection = RxCollection<ActivityFeed>

// Define the database with the typed collections
export interface OPSAPDatabaseCollections {
  users: UserCollection
  companies: CompanyCollection
  log_drafts: LogDraftCollection
  certifications: CertificationCollection
  notifications: NotificationCollection
  activity_feed: ActivityFeedCollection
}
