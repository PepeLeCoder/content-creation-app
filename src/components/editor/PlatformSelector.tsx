"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"

interface PlatformSelectorProps {
  selectedPlatforms: string[]
  onPlatformToggle: (platform: string) => void
}

export function PlatformSelector({ selectedPlatforms, onPlatformToggle }: PlatformSelectorProps) {
  const platforms = [
    { id: "linkedin", name: "LinkedIn", icon: Linkedin },
    { id: "twitter", name: "Twitter", icon: Twitter },
  ]

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-neutral-400">Select Platforms</h3>
      <div className="flex gap-2">
        {platforms.map((platform) => {
          const Icon = platform.icon
          const isSelected = selectedPlatforms.includes(platform.id)
          return (
            <Button
              key={platform.id}
              variant={isSelected ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                isSelected
                  ? "bg-yellow-400 text-neutral-900 hover:bg-yellow-500"
                  : "text-neutral-400 hover:text-yellow-400"
              }`}
              onClick={() => onPlatformToggle(platform.id)}
            >
              <Icon className="h-4 w-4" />
              {platform.name}
            </Button>
          )
        })}
      </div>
    </div>
  )
} 