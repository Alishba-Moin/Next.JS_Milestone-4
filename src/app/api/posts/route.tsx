// app/api/posts/route.tsx

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') as string) || 1;
  const limit = 10;
  const start = (page - 1) * limit;

  try {
    // Fetch posts from external API with pagination
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();

    // Fetch total number of posts for pagination calculations
    const totalPostsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!totalPostsRes.ok) throw new Error('Failed to fetch total posts');
    const totalPosts = await totalPostsRes.json();

    const totalPages = Math.ceil(totalPosts.length / limit);

    // Return a JSON response with posts and pagination data
    return NextResponse.json({ posts, totalPages });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const title = data.title;
    const body = data.body;
    const author = data.author;

    // Process the data
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Author:', author);

    // Respond with success
    return NextResponse.json(
      { message: 'Post created successfully!' }, 
      { status: 201 }
    );
  } catch (error) {
    // Handle and respond with errors
    return NextResponse.json(
      { error: (error as Error).message }, 
      { status: 500 }
    );
  }
}
