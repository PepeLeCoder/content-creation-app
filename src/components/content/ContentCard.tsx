import { ContentItem } from '@/lib/mock-data';
import Link from 'next/link';

interface ContentCardProps {
  content: ContentItem;
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{content.title}</h3>
        <span className={`px-2 py-1 rounded text-sm ${
          content.status === 'published' ? 'bg-green-100 text-green-800' :
          content.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {content.status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{content.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {content.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Type: {content.type}</span>
        <span>Updated: {new Date(content.updatedAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
} 