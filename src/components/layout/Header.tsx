import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Content Creator
          </Link>
          <div className="space-x-6">
            <Link href="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/content" className="hover:text-blue-600">
              Content
            </Link>
            <Link href="/analytics" className="hover:text-blue-600">
              Analytics
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 