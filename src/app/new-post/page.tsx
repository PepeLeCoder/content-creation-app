"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Send, Save } from "lucide-react"
import { RichTextEditor } from "@/components/editor/RichTextEditor"
import { MediaUpload } from "@/components/editor/MediaUpload"
import { PlatformSelector } from "@/components/editor/PlatformSelector"

export default function NewPost() {
  const [content, setContent] = useState("")
  const [selectedImage, setSelectedImage] = useState<string>()
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const handleImageSelect = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setSelectedImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleImageRemove = () => {
    setSelectedImage(undefined)
  }

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    )
  }

  const handleSaveDraft = () => {
    // In a real implementation, this would save to a backend
    console.log("Saving draft:", { content, selectedImage, selectedPlatforms })
  }

  const handlePublish = () => {
    // In a real implementation, this would publish to selected platforms
    console.log("Publishing to:", selectedPlatforms)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400">Create New Post</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-neutral-400 hover:text-yellow-400"
            onClick={handleSaveDraft}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button
            className="bg-yellow-400 text-neutral-900 hover:bg-yellow-500"
            onClick={handlePublish}
            disabled={selectedPlatforms.length === 0}
          >
            <Send className="mr-2 h-4 w-4" />
            Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content Input Section */}
        <div className="space-y-6">
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Your Content</h2>
            <div className="space-y-6">
              <RichTextEditor content={content} onChange={setContent} />
              <MediaUpload
                onImageSelect={handleImageSelect}
                onImageRemove={handleImageRemove}
                selectedImage={selectedImage}
              />
              <PlatformSelector
                selectedPlatforms={selectedPlatforms}
                onPlatformToggle={handlePlatformToggle}
              />
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Preview</h2>
            <div className="space-y-4">
              {selectedPlatforms.includes("linkedin") && (
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-neutral-400 mb-2">LinkedIn Preview</h3>
                  <div className="bg-white text-black p-4 rounded">
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                    )}
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>
                </div>
              )}
              {selectedPlatforms.includes("twitter") && (
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-neutral-400 mb-2">Twitter Preview</h3>
                  <div className="bg-white text-black p-4 rounded">
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                    )}
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <p className="text-xs text-neutral-500 mt-2">
                      {content.replace(/<[^>]*>/g, '').length}/280 characters
                    </p>
                  </div>
                </div>
              )}
              {selectedPlatforms.length === 0 && (
                <p className="text-neutral-400 text-center py-8">
                  Select platforms to see previews
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 