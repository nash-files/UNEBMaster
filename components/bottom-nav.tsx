"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Bot, PenTool, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "HOME", href: "/", icon: Home },
  { name: "LEARN", href: "/learn", icon: BookOpen },
  { name: "AI TUTOR", href: "/tutor", icon: Bot },
  { name: "PRACTICE", href: "/practice", icon: PenTool },
  { name: "PROFILE", href: "/profile", icon: UserCircle },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.04)] dark:shadow-none pb-safe">
        <nav className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center w-full h-full space-y-1 relative group"
              >
                <div
                  className={cn(
                    "flex flex-col items-center justify-center w-14 h-12 rounded-[16px] transition-all duration-300",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/50"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-6 h-6 transition-all duration-300",
                      isActive ? "scale-110" : "group-hover:scale-105"
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>
                <span
                  className={cn(
                    "text-[10px] font-bold tracking-wider transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </span>
                
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute top-0 w-8 h-1 bg-primary rounded-b-full shadow-[0_2px_8px_rgba(0,0,0,0.2)] shadow-primary/40" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Desktop Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border h-full p-4">
        <div className="flex items-center space-x-3 px-4 py-6 mb-4">
          <div className="w-8 h-8 rounded-[12px] bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">UNEB Master</span>
        </div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3.5 rounded-[16px] transition-all duration-300 font-medium",
                  isActive
                    ? "bg-primary/10 text-primary font-bold shadow-sm"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                <span className="tracking-wide text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
