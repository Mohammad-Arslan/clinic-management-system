export type SessionType = "Online" | "In-Clinic";

export interface Patient {
  id: string;
  fullName: string;
  age: number;
  gender: "Female" | "Male" | "Other";
  phone: string;
  email: string;
  concern: string;
  lastVisit: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  sessionType: SessionType;
  date: string;
  time: string;
  status: "Pending" | "Confirmed" | "Completed";
  paymentVerified: boolean;
  meetLink?: string;
}

export interface Payment {
  id: string;
  patientName: string;
  amount: number;
  date: string;
  method: "Bank Transfer";
  status: "Pending" | "Verified";
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
}
