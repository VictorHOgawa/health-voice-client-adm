"use client";

import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <div
      className={`bg-n-2 min-h-screen transition-all duration-300 ${
        visibleSidebar ? "lg:pl-24" : "lg:pl-80"
      }`}
    >
      <Sidebar
        value={visibleSidebar}
        setValue={setVisibleSidebar}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="bg-n-2 flex min-h-screen flex-col px-4 py-6 transition-all duration-300">
        {/* Mobile Header */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <div className="text-primary-1 text-2xl font-bold">Health Voice</div>
          <button
            onClick={() => setMobileOpen(true)}
            className="text-n-6 hover:bg-n-3 rounded-lg p-2 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="bg-n-1 relative flex max-w-full grow rounded-[1.25rem] p-6 md:rounded-lg">
          <div className="relative flex h-full w-full flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
