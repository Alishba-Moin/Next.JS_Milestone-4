"use client";

import { useEffect, useState } from 'react';
import CustomPagination from '../app/component/pagination'; 
import { fetchPosts, Post } from '../app/utils/fetchPost'; 
import HeroSection from '../app/component/heroSection';
import ImageSlider from '../app/component/imageSlider';
import MainLinks from '../app/component/mainLinks';
import PostsSection from '../app/component/postSection';
import Footer from '../app/component/footer';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const { posts, totalPages } = await fetchPosts(currentPage);
        setPosts(posts);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    loadPosts();
  }, [currentPage]);

  return (
    <div className="bg-gradient-to-r from-teal-500 via-blue-700 to-teal-700 text-white">
      <HeroSection />
      <main className="px-4 sm:px-6 lg:px-12">
        <ImageSlider />
        <MainLinks />
        <PostsSection posts={posts} />
        <div className="mt-8">
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
