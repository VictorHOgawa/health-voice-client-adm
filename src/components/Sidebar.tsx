"use client";

import { cn } from "@/lib/utils";
import {
  Bot,
  Building2,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  Users,
  X,
} from "lucide-react";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

type SidebarProps = {
  value: boolean;
  setValue: (value: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
};

const Sidebar = ({
  value,
  setValue,
  mobileOpen,
  setMobileOpen,
}: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const cookies = useCookies();
  // const { setToken } = useApiContext(); // TODO: Implement Context

  // Force light mode on mount
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    cookies.remove("theme");
  }, [cookies]);

  const navigation = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/",
    },
    {
      title: "Contatos",
      icon: Users,
      url: "/contacts",
    },
    {
      title: "Usuários",
      icon: Building2,
      url: "/users",
    },
    {
      title: "Faturamento",
      icon: CreditCard,
      url: "/billing",
    },
    {
      title: "Inteligência Artificial",
      icon: Bot,
      url: "/ai",
    },
  ];

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={twMerge(
          `bg-n-1 border-n-3 fixed top-0 bottom-0 left-0 z-50 flex flex-col border-r px-4 pt-30 transition-all duration-300 lg:z-20`,
          // Mobile classes
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          // Desktop specific width logic
          value ? "lg:w-24" : "lg:w-80",
          // Fixed width on mobile
          "w-80",
        )}
      >
        <div
          className={`absolute top-0 left-0 flex h-30 w-full items-center justify-between px-6 ${
            value ? "lg:justify-center" : "lg:justify-between lg:px-6"
          }`}
        >
          {(!value || mobileOpen) && (
            <div className="flex w-full items-center justify-start lg:w-auto">
              <div
                className={cn(
                  "relative h-10 w-full",
                  value && !mobileOpen && "lg:hidden",
                )}
              >
                <span className="text-primary-1 text-2xl font-bold">
                  Health Voice
                </span>
              </div>
            </div>
          )}

          {/* Desktop Toggle */}
          <button
            className="group tap-highlight-color hidden cursor-pointer lg:block"
            onClick={handleClick}
          >
            <Menu className="text-n-4 group-hover:text-n-6 h-6 w-6 transition-colors" />
          </button>

          {/* Mobile Close */}
          <button
            className="group tap-highlight-color cursor-pointer lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <X className="text-n-4 group-hover:text-n-6 h-6 w-6 transition-colors" />
          </button>
        </div>

        <div className="scrollbar-none mt-6 w-full grow overflow-y-auto scroll-smooth">
          <div className="flex flex-col gap-2">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-n-4 hover:bg-n-2 hover:text-n-6 flex h-12 items-center rounded-lg transition-colors",
                  pathname === item.url && "bg-n-2 text-n-6",
                  value ? "lg:justify-center lg:px-0" : "px-4",
                  "px-4", // Always px-4 on mobile
                )}
              >
                <item.icon
                  className={cn("h-6 w-6", value ? "lg:mr-0" : "mr-4", "mr-4")}
                />
                <span
                  className={cn(
                    "base2 font-semibold",
                    value && "lg:hidden",
                    // !value && "block",
                  )}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-n-1 border-n-3 absolute right-0 bottom-0 left-0 border-t px-4 py-6">
          <button
            className={twMerge(
              `base2 text-n-4 hover:text-n-6 hover:bg-n-2 flex h-12 w-full cursor-pointer items-center rounded-lg font-semibold transition-colors`,
              value ? "lg:justify-center" : "px-5",
              "px-5", // Always px-5 on mobile
            )}
            onClick={() => {
              if (confirm("Tem certeza que deseja sair?")) {
                cookies.remove("token");
                // setToken("");
                router.push("/sign-in");
              }
            }}
          >
            <LogOut className="h-6 w-6" />
            <div className={cn("ml-5", value && "lg:hidden")}>Sair</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
