"use client";

export const Toast = ({ message }: { message: string }) => (
  <div className="fixed bottom-5 right-5 rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-soft">{message}</div>
);
