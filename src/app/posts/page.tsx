"use client"

import { Button } from "@/components/ui/button"
import { Edit, Trash2, Share2 } from "lucide-react"

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    title: "The Future of AI in Business",
    content: "Exploring how artificial intelligence is transforming modern business operations...",
    status: "published",
    platforms: ["LinkedIn", "Twitter"],
    date: "2024-03-20",
  },
  {
    id: 2,
    title: "5 Tips for Remote Team Management",
    content: "Essential strategies for leading distributed teams effectively...",
    status: "draft",
    platforms: ["LinkedIn"],
    date: "2024-03-19",
  },
  {
    id: 3,
    title: "Digital Marketing Trends 2024",
    content: "Key trends shaping the future of digital marketing...",
    status: "published",
    platforms: ["Twitter"],
    date: "2024-03-18",
  },
]

export default function Posts() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400">Recent Posts</h1>
        <Button className="bg-yellow-400 text-neutral-900 hover:bg-yellow-500">
          New Post
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="bg-neutral-900 rounded-lg border border-neutral-800 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-yellow-400">{post.title}</h2>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  post.status === "published"
                    ? "bg-green-900 text-green-400"
                    : "bg-yellow-900 text-yellow-400"
                }`}
              >
                {post.status}
              </span>
            </div>
            <p className="text-neutral-400 mb-4 line-clamp-2">{post.content}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-2 py-1 bg-neutral-800 text-neutral-400 rounded text-xs"
                >
                  {platform}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center text-sm text-neutral-500">
              <span>{post.date}</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-yellow-400">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-yellow-400">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-red-400">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 