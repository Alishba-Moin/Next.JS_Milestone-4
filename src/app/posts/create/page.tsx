"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create a FormData object
    const formData = new FormData();

    // Add form data using the `set` method
    formData.set('title', title);
    formData.set('body', body);
    formData.set('author', author);
    if (image) {
      formData.set('image', image);
    }

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to create post');

      await res.json();
      router.push('/posts');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-cyan-700 border border-cyan-500 rounded-lg shadow-lg mt-24">
  <h1 className="text-2xl font-bold text-cyan-100 mb-4">Create a New Post</h1>
  <form className="space-y-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-sm font-medium text-cyan-100">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-cyan-100">Body</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        rows={4}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="author" className="block text-sm font-medium text-cyan-100">Author</label>
      <input
        id="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-cyan-100">Image (optional)</label>
      <input
        id="image"
        type="file"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        className="w-full border border-gray-300 rounded-lg"
      />
    </div>
    <button
      type="submit"
      disabled={loading}
      className="w-full py-2 px-4 bg-cyan-200 text-cyan-700 rounded-lg shadow-3xl hover:bg-stone-300 transition font-extrabold "
    >
      {loading ? 'Creating...' : 'Create Post'}
    </button>
  </form>
</div>
  );
}
