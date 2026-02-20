import { ReactNode } from "react";
import { SiteFooter } from "@/components/public/site-footer";
import { SiteHeader } from "@/components/public/site-header";

export const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </div>
);
