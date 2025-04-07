import blogs from "@/app/data/blog";
import { NextRequest, NextResponse } from "next/server";

// blog get request
export async function GET( request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query')

  if(query) {
    const filteredBlog = blogs.filter((blog) => blog.title.toLowerCase().includes(query))

    return Response.json(filteredBlog);
  }

  return Response.json(blogs);
}




// blog create request
export async function POST(request: Request) {
  const blog = await request.json();

  const newBlog = {
    id: blogs.length + 1, 
    ...blog
  };

  blogs.push(newBlog);

  return new Response(JSON.stringify(blogs), {
    headers: {
      "Contnet-Type": "application/json",
    },
    status: 201,

  });
  
}
