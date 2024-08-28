"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Post {
  title: string;
  body: string;
  author: string;
  image?: File;
}

const EditPostPage = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error('Failed to fetch post');
        const data: Post = await res.json();
        setPost(data);
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Create a new FormData instance
    const formData = new FormData();

    // Add form data using the `set` method
    formData.set('title', title);
    formData.set('body', body);
    formData.set('author', author);
    if (image) {
      formData.set('image', image);
    }
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: formData,
      });

      const result = await res.json();
      setMessage(result.message || 'Post updated successfully!');
      if (res.ok) {
        router.push('/posts');
      }
    } catch (error) {
      setMessage('Failed to update post.');
    } finally {
      setLoading(false);
    }
  };

  if (!post) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-2 bg-cyan-700 border border-green-500 rounded-lg shadow-2xl mt-24">
  <h1 className="text-3xl font-bold text-cyan-100 mb-4">Edit Your Post</h1>
  <form className="space-y-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-1xl font-medium text-cyan-100">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
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
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-cyan-100">Author</label>
      <input
        id="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="image" className="block text-sm font-medium text-cyan-100">Image (optional)</label>
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
      className=" py-2 px-4 bg-lime-600 text-white rounded-lg shadow-3xl hover:bg-lime-700 transition font-bold"
    >
      {loading ? 'Updating...' : 'Update Post'}
    </button>
    {message && <div className="mt-4 font-bold text-center text-white text-pretty">{message}</div>}
  </form>
</div>
  )

};

export default EditPostPage;
