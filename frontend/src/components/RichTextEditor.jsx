import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

export const RichTextEditor = () => {

    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello <strong>World</strong>!</p>',
    });

    return <EditorContent editor={editor} />;
}
