"use client"

import { Button } from "@/components/ui/button"
import { Plus, Copy, Star } from "lucide-react"

// Mock data for templates
const mockTemplates = [
  {
    id: 1,
    name: "Thought Leadership",
    description: "Share industry insights and expertise",
    platforms: ["LinkedIn", "Twitter"],
    isFavorite: true,
  },
  {
    id: 2,
    name: "Product Announcement",
    description: "Introduce new features or products",
    platforms: ["LinkedIn"],
    isFavorite: false,
  },
  {
    id: 3,
    name: "Engagement Question",
    description: "Ask questions to spark discussion",
    platforms: ["Twitter"],
    isFavorite: true,
  },
  {
    id: 4,
    name: "Case Study",
    description: "Share success stories and results",
    platforms: ["LinkedIn"],
    isFavorite: false,
  },
]

export default function Templates() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400">Content Templates</h1>
        <Button className="bg-yellow-400 text-neutral-900 hover:bg-yellow-500">
          <Plus className="mr-2 h-4 w-4" />
          New Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-neutral-900 rounded-lg border border-neutral-800 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-yellow-400">{template.name}</h2>
                <p className="text-neutral-400 mt-1">{template.description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  template.isFavorite ? "text-yellow-400" : "text-neutral-400"
                } hover:text-yellow-400`}
              >
                <Star className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {template.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-2 py-1 bg-neutral-800 text-neutral-400 rounded text-xs"
                >
                  {platform}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="outline" className="text-neutral-400 hover:text-yellow-400">
                <Copy className="mr-2 h-4 w-4" />
                Use Template
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 