"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Image, X } from "lucide-react"

interface MediaUploadProps {
  onImageSelect: (file: File) => void
  onImageRemove: () => void
  selectedImage?: string
}

export function MediaUpload({ onImageSelect, onImageRemove, selectedImage }: MediaUploadProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      onImageSelect(file)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onImageSelect(file)
    }
  }

  return (
    <div className="space-y-4">
      {selectedImage ? (
        <div className="relative">
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-neutral-900/50 hover:bg-neutral-900 text-neutral-400 hover:text-red-400"
            onClick={onImageRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging
              ? "border-yellow-400 bg-yellow-400/10"
              : "border-neutral-700 hover:border-yellow-400"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-2">
            <Image className="h-8 w-8 text-neutral-400" />
            <p className="text-neutral-400">
              Drag and drop an image here, or{" "}
              <label className="text-yellow-400 cursor-pointer hover:underline">
                browse
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </label>
            </p>
            <p className="text-sm text-neutral-500">
              Supports JPG, PNG up to 5MB
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 