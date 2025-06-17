"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { User, Bell, Lock, Link2 } from "lucide-react"

export default function Settings() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="space-y-6">
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Profile Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-neutral-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-200">John Doe</h3>
                  <p className="text-neutral-400">john.doe@example.com</p>
                </div>
              </div>
              <Button variant="outline" className="w-full text-neutral-400 hover:text-yellow-400">
                Edit Profile
              </Button>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-neutral-400" />
                  <span className="text-neutral-200">Notifications</span>
                </div>
                <Button variant="outline" size="sm" className="text-neutral-400 hover:text-yellow-400">
                  Configure
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-neutral-400" />
                  <span className="text-neutral-200">Privacy</span>
                </div>
                <Button variant="outline" size="sm" className="text-neutral-400 hover:text-yellow-400">
                  Manage
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Accounts */}
        <div className="space-y-6">
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Connected Accounts</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <span className="text-neutral-200">LinkedIn</span>
                </div>
                <Button variant="outline" size="sm" className="text-neutral-400 hover:text-yellow-400">
                  Connected
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">𝕏</span>
                  </div>
                  <span className="text-neutral-200">Twitter</span>
                </div>
                <Button variant="outline" size="sm" className="text-neutral-400 hover:text-yellow-400">
                  Connect
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Appearance</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 className="h-5 w-5 text-neutral-400" />
                <span className="text-neutral-200">Theme</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 