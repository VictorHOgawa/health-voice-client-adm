import Layout from "@/components/Layout";
import React from "react";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
