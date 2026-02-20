"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { seedAppointments, seedBlogs, seedPatients, seedPayments } from "@/lib/data";
import { Appointment, BlogPost, Patient, Payment, SessionType } from "@/types";

interface BookingInput {
  fullName: string;
  email: string;
  phone: string;
  sessionType: SessionType;
  date: string;
  time: string;
}

interface AppContextShape {
  patients: Patient[];
  appointments: Appointment[];
  payments: Payment[];
  blogs: BlogPost[];
  isAdminLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addPatient: (patient: Omit<Patient, "id">) => void;
  submitBooking: (booking: BookingInput) => void;
  updateAppointment: (appointmentId: string, patch: Partial<Appointment>) => void;
  verifyPayment: (paymentId: string) => void;
  saveBlog: (post: BlogPost) => void;
  deleteBlog: (id: string) => void;
}

const AppContext = createContext<AppContextShape | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [patients, setPatients] = useState(seedPatients);
  const [appointments, setAppointments] = useState(seedAppointments);
  const [payments, setPayments] = useState(seedPayments);
  const [blogs, setBlogs] = useState(seedBlogs);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const login = (email: string, password: string) => {
    const ok = email === "admin@kainatclinic.com" && password === "123456";
    if (ok) setIsAdminLoggedIn(true);
    return ok;
  };

  const logout = () => setIsAdminLoggedIn(false);

  const addPatient = (patient: Omit<Patient, "id">) => {
    setPatients((prev) => [{ ...patient, id: `P-${1000 + prev.length + 1}` }, ...prev]);
  };

  const submitBooking = (booking: BookingInput) => {
    setAppointments((prev) => [
      {
        id: `A-${2000 + prev.length + 1}`,
        patientId: "N/A",
        patientName: booking.fullName,
        sessionType: booking.sessionType,
        date: booking.date,
        time: booking.time,
        status: "Pending",
        paymentVerified: false
      },
      ...prev
    ]);
  };

  const updateAppointment = (appointmentId: string, patch: Partial<Appointment>) => {
    setAppointments((prev) => prev.map((item) => (item.id === appointmentId ? { ...item, ...patch } : item)));
  };

  const verifyPayment = (paymentId: string) => {
    setPayments((prev) => prev.map((item) => (item.id === paymentId ? { ...item, status: "Verified" } : item)));
  };

  const saveBlog = (post: BlogPost) => {
    setBlogs((prev) => {
      const exists = prev.some((item) => item.id === post.id);
      if (exists) return prev.map((item) => (item.id === post.id ? post : item));
      return [{ ...post, id: `B-${400 + prev.length + 1}` }, ...prev];
    });
  };

  const deleteBlog = (id: string) => setBlogs((prev) => prev.filter((item) => item.id !== id));

  const value = useMemo(
    () => ({
      patients,
      appointments,
      payments,
      blogs,
      isAdminLoggedIn,
      login,
      logout,
      addPatient,
      submitBooking,
      updateAppointment,
      verifyPayment,
      saveBlog,
      deleteBlog
    }),
    [patients, appointments, payments, blogs, isAdminLoggedIn]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
};
