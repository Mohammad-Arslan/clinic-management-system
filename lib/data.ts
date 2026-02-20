import appointments from "@/data/appointments.json";
import blogs from "@/data/blogs.json";
import patients from "@/data/patients.json";
import payments from "@/data/payments.json";
import revenue from "@/data/revenue.json";
import testimonials from "@/data/testimonials.json";
import { Appointment, BlogPost, Patient, Payment, RevenuePoint, Testimonial } from "@/types";

export const seedPatients = patients as Patient[];
export const seedAppointments = appointments as Appointment[];
export const seedPayments = payments as Payment[];
export const seedBlogs = blogs as BlogPost[];
export const seedTestimonials = testimonials as Testimonial[];
export const seedRevenue = revenue as RevenuePoint[];
