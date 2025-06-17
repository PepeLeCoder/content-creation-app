"use client"

import { Button } from "@/components/ui/button"
import { FileText, Image, Send } from "lucide-react"

export default function NewPost() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Create New Post</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content Input Section */}
        <div className="space-y-6">
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Your Content</h2>
            <textarea
              className="w-full h-48 bg-neutral-800 border border-neutral-700 rounded-md p-4 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Start typing your content here..."
            />
            <div className="mt-4 flex gap-4">
              <Button className="bg-yellow-400 text-neutral-900 hover:bg-yellow-500">
                <Image className="mr-2 h-4 w-4" />
                Add Image
              </Button>
              <Button variant="outline" className="text-neutral-400 hover:text-yellow-400">
                <FileText className="mr-2 h-4 w-4" />
                Use Template
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Preview</h2>
            <div className="space-y-4">
              <div className="bg-neutral-800 rounded-lg p-4">
                <h3 className="text-sm font-medium text-neutral-400 mb-2">LinkedIn Preview</h3>
                <div className="bg-white text-black p-4 rounded">
                  <p className="text-sm">Your content will appear here...</p>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4">
                <h3 className="text-sm font-medium text-neutral-400 mb-2">Twitter Preview</h3>
                <div className="bg-white text-black p-4 rounded">
                  <p className="text-sm">Your content will appear here...</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-yellow-400 text-neutral-900 hover:bg-yellow-500">
              <Send className="mr-2 h-4 w-4" />
              Publish to All Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 