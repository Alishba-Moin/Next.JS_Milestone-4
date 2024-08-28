"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DeletePostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      router.push('/posts');
    }
  };

  const handleCancel = () => {
    router.push('/posts');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white border border-red-500 rounded-lg shadow-3xl mt-24">
  <h1 className="text-2xl font-bold text-red-600 mb-4">Confirm Deletion</h1>
  <div className="mb-4">
    <h2 className="text-xl font-bold text-gray-800">{post?.title}</h2>
    <p className="mt-2 text-gray-600">{post?.body}</p>
  </div>
  <div className="flex gap-4">
    <button
      onClick={handleDelete}
      className="w-full py-2 px-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition font-extrabold"
    >
      Delete
    </button>
    <button
      onClick={handleCancel}
      className="w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-lg shadow-lg hover:bg-gray-400 transition"
    >
      Cancel
    </button>
  </div>
</div>

  );
}
