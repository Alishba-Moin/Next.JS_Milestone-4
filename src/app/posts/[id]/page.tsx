import Image from 'next/image';
import { cache } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
};

const imagePaths = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpeg",
  "/images/img13.jpg",
  "/images/img14.jpg",
  "/images/img15.jpg",
  "/images/img16.jpg",
  "/images/img17.jpg",
  "/images/img18.jpg",
  "/images/img19.jpg",
  "/images/img20.jpg",
];

// Function to select an image based on index
function getImageUrl(index: number): string {
  return imagePaths[index % imagePaths.length];
}

// Function to fetch posts (can be cached to make it static)
const fetchPosts = cache(async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();

  return posts.map((post: Post, index: number) => ({
    ...post,
    imageUrl: getImageUrl(index),
  }));
});

// Static component to display posts
export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-lg p-4">
            <div className="relative h-64 mb-4">
              <Image
                src={post.imageUrl || '/images/placeholder.jpg'}
                alt={post.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
