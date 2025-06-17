import { Header } from '@/components/layout/Header';
import { ContentCard } from '@/components/content/ContentCard';
import { mockContent } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Welcome to Levercast</h1>
      <p className="text-neutral-400 mb-4">
        Transform your ideas into polished social media posts with AI-powered templates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">Create New Post</h2>
          <p className="text-neutral-400">Start crafting your next social media post</p>
        </div>
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">Recent Posts</h2>
          <p className="text-neutral-400">View and manage your published content</p>
        </div>
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">Templates</h2>
          <p className="text-neutral-400">Browse and customize content templates</p>
        </div>
      </div>
    </div>
  );
}
