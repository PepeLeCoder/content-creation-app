export interface ContentItem {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  updatedAt: string;
  type: 'article' | 'video' | 'social';
  tags: string[];
}

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Getting Started with Content Creation',
    description: 'A comprehensive guide for beginners',
    status: 'published',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z',
    type: 'article',
    tags: ['guide', 'beginner', 'content']
  },
  {
    id: '2',
    title: 'Video Production Tips',
    description: 'Essential tips for creating engaging video content',
    status: 'draft',
    createdAt: '2024-03-16T14:30:00Z',
    updatedAt: '2024-03-16T14:30:00Z',
    type: 'video',
    tags: ['video', 'tips', 'production']
  },
  {
    id: '3',
    title: 'Social Media Strategy',
    description: 'How to build an effective social media presence',
    status: 'draft',
    createdAt: '2024-03-17T09:15:00Z',
    updatedAt: '2024-03-17T09:15:00Z',
    type: 'social',
    tags: ['social', 'strategy', 'marketing']
  }
]; 