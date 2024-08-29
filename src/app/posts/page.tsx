"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (page: number): Promise<{ posts: Post[], totalPages: number }> => {
  const res = await fetch(`/api/posts?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPosts(currentPage);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError('Error fetching posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [currentPage]);

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter(post => post.id !== id));
      } else {
        alert('Failed to delete post');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 sm:pt-24 lg:pt-32 p-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-700 mb-14">All Posts</h1>
        <div className="flex justify-center mb-8">
          <Link href="/posts/create">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              Create New Post
            </button>
          </Link>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <p className="text-lg">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-red-600 text-center">
            <p>{error}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.length > 0 ? (
                posts.map(post => (
                  <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">{post.title}</h2>
                    <p className="text-gray-700 mb-6">{post.body}</p>
                    <div className="flex justify-between items-center">
                      <Link href={`/posts/edit/${post.id}`}>
                        <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                          Edit
                        </button>
                      </Link>
                      <Link  href={`/posts/delete/${post.id}`}>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                      >
                        Delete
                      </button>
                        </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">No posts available</p>
              )}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-lg disabled:opacity-50"
              >
                Previous
              </button>
              <span className="mx-4 text-lg font-semibold">{currentPage} / {totalPages}</span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
