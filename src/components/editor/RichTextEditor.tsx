"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, Link as LinkIcon, Image as ImageIcon } from "lucide-react"

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 hover:underline',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full rounded-lg',
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2 p-2 bg-neutral-800 rounded-t-lg border border-neutral-700 border-b-0">
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            editor.isActive('bold') ? 'text-yellow-400' : 'text-neutral-400 hover:text-yellow-400'
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            editor.isActive('italic') ? 'text-yellow-400' : 'text-neutral-400 hover:text-yellow-400'
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            editor.isActive('bulletList') ? 'text-yellow-400' : 'text-neutral-400 hover:text-yellow-400'
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            editor.isActive('orderedList') ? 'text-yellow-400' : 'text-neutral-400 hover:text-yellow-400'
          }`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            editor.isActive('link') ? 'text-yellow-400' : 'text-neutral-400 hover:text-yellow-400'
          }`}
          onClick={() => {
            const url = window.prompt('Enter URL')
            if (url) {
              editor.chain().focus().setLink({ href: url }).run()
            }
          }}
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>
      <EditorContent
        editor={editor}
        className="prose prose-invert max-w-none bg-neutral-800 border border-neutral-700 rounded-b-lg p-4 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[12rem]"
      />
    </div>
  )
} 