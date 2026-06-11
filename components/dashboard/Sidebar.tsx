"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  PhoneCall,
  FileBarChart,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Leads",
    href: "/dashboard/leads",
    icon: PhoneCall,
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: UserCheck,
  },
  {
    name: "Staff",
    href: "/dashboard/staff",
    icon: Users,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileBarChart,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 text-white">
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-2xl font-bold">
          ACS CRM
        </h2>

        <p className="text-slate-400 text-sm">
          Consultancy Dashboard
        </p>
      </div>

      <div className="p-4 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              {menu.name}
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-5 left-4">
        <button className="flex items-center gap-2 text-red-400">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}