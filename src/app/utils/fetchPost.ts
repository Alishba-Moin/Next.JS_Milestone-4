export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
    imageUrl?: string;
  };
  
  
  
  // Number of posts per page
  const LIMIT = 6;
  
  // Array of image URLs for simulation
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
  
  // Function to fetch posts from the API
  export const fetchPosts = async (page: number): Promise<{ posts: Post[]; totalPages: number }> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`);
    const posts = await res.json();
    
    // Calculate total number of pages
    const totalPosts = 100; 
    const totalPages = Math.ceil(totalPosts / LIMIT);
  
    const postsWithImages = posts.map((post: Post, index: number) => ({
      ...post,
      imageUrl: imagePaths[index % imagePaths.length] // Assigning images in a loop
    }));
  
    return { posts: postsWithImages, totalPages };
  };
  