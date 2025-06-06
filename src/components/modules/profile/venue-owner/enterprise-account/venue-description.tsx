"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";

const fontFamilies = [
  { label: "Inter", value: "Inter" },
  { label: "Georgia", value: "Georgia" },
  { label: "Courier New", value: "Courier New" },
];

const VenueDescription = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      FontFamily.configure({
        types: ["textStyle"],
      }),
    ],
    content: `<p>The Premier Football Field offers a spacious outdoor area, perfect for football matches, with ample seating, parking, and premium amenities such as free Wi-Fi and on-site equipment rental.</p>`,
  });

  if (!editor) return null;

  return (
    <div className="space-y-2">
      <div className="rounded-md shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center flex-wrap border-b px-3 py-2 gap-2">
          {/* Font Family */}
          <select
            onChange={(e) =>
              editor.chain().focus().setFontFamily(e.target.value).run()
            }
            className="text-sm border px-2 py-1 rounded"
            defaultValue="Inter"
          >
            {fontFamilies.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>

          {/* Bold */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`text-sm px-2 py-1 rounded ${
              editor.isActive("bold") ? "" : ""
            }`}
          >
            B
          </button>

          {/* Italic */}
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`text-sm px-2 py-1 rounded ${
              editor.isActive("italic") ? " " : ""
            }`}
          >
            I
          </button>

          {/* Underline */}
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`text-sm px-2 py-1 rounded ${
              editor.isActive("underline") ? "" : ""
            }`}
          >
            U
          </button>

          {/* Align Left */}
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`text-sm px-2 py-1 rounded ${
              editor.isActive({ textAlign: "left" }) ? "" : ""
            }`}
          >
            ⬅️
          </button>

          {/* Center */}
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`text-sm px-2 py-1 rounded ${
              editor.isActive({ textAlign: "center" }) ? "" : ""
            }`}
          >
            ⬅️➡️
          </button>

          {/* Align Right */}
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`text-sm px-2 py-1 rounded ${
              editor.isActive({ textAlign: "right" }) ? "" : ""
            }`}
          >
            ➡️
          </button>

          {/* Bullet List */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`text-sm px-2 py-1 rounded ${
              editor.isActive("bulletList") ? "" : ""
            }`}
          >
            • List
          </button>
        </div>

        {/* Editor */}
        <EditorContent editor={editor} className="min-h-[150px] px-4 py-3" />
      </div>
    </div>
  );
};

export default VenueDescription;
