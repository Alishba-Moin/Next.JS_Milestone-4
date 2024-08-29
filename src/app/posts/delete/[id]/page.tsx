"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DeletePostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    // Fetch the post details based on the ID
    if (id) {
      fetch(`/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Redirect to posts list if deletion is successful
          router.push(`/posts/delete/${id}`);
        } else {
          console.error("Failed to delete post:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  const handleCancel = () => {
    // Redirect to posts list without deletion
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
