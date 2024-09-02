// types.ts
export type User = {
  user_id: string;
  email: string;
  name: string;
  password_hash: string;
  created_at: string; // ISO 8601 date-time string
  role: string;
  profile_pic: string;
  certifications: string[];
  companies: string[];
  log_drafts: string[];
  signature: string;
  settings: {
    notifications: boolean;
    theme: string;
  };
};

export type Company = {
  company_id: string;
  name: string;
  logo: string;
  description: string;
  employees: string[];
  total_dives: number;
  total_hours: number;
  log_drafts: string[];
  created_at: string; // ISO 8601 date-time string
  verified: boolean;
  contact_info: {
    email: string;
    phone: string;
    address: string;
  };
};

export type LogDraft = {
  log_id: string;
  user_id: string;
  company_id: string;
  logbook_type: string;
  dive_type: string;
  location: string;
  date: string; // ISO 8601 date-time string
  depth: number;
  duration: number;
  equipment: string[];
  decompression_details: Record<string, any>; // Adjust type as needed
  work_description: string;
  incidents: string;
  signatures: {
    url: string;
    signed_by: string;
    signed_at: string; // ISO 8601 date-time string
  }[];
  created_at: string; // ISO 8601 date-time string
  is_verified: boolean;
};

export type Certification = {
  cert_id: string;
  user_id: string;
  name: string;
  issuer: string;
  issued_at: string; // ISO 8601 date-time string
  expires_at?: string; // ISO 8601 date-time string
  certificate_image: string;
};

export type Notification = {
  notif_id: string;
  user_id: string;
  message: string;
  link: string;
  type: string;
  created_at: string; // ISO 8601 date-time string
  read: boolean;
};

export type ActivityFeed = {
  activity_id: string;
  user_id: string;
  timestamp: string; // ISO 8601 date-time string
  activity_type: string;
  details: string;
  related_log_id?: string;
  related_certification_id?: string;
  related_company_id?: string;
};
