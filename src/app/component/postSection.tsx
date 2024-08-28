// app/component/postSection.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../utils/fetchPost';

interface PostsSectionProps {
  posts: Post[];
}

const PostsSection: React.FC<PostsSectionProps> = ({ posts }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
              {post.imageUrl ? (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">No Image</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
                <p className="text-gray-700 mb-3">{post.body.substring(0, 150)}...</p>
                <Link href={`/posts/${post.id}`} className="text-teal-500 hover:text-teal-600">
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </section>
  );
};

export default PostsSection;
