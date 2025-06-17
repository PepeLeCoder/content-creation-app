"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  FileText,
  Settings,
  FileCode,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { icon: LayoutDashboard, label: "New Post", href: "/new-post" },
    { icon: FileText, label: "Recent Posts", href: "/posts" },
    { icon: FileCode, label: "Templates", href: "/templates" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  return (
    <aside
      className={`h-screen bg-neutral-900 border-r border-neutral-800 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-yellow-400">Levercast</h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-neutral-400 hover:text-yellow-400"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-3 py-2 text-neutral-400 hover:text-yellow-400 hover:bg-neutral-800 rounded-md transition-colors"
            >
              <item.icon size={20} />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <Button
            variant="ghost"
            className="w-full flex items-center text-neutral-400 hover:text-yellow-400"
          >
            <User size={20} />
            {!isCollapsed && <span className="ml-3">Profile</span>}
          </Button>
        </div>
      </div>
    </aside>
  )
} 