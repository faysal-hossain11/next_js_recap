import blogs from "@/app/data/blog";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: Request, {params}: {params: {id: string}}) {
    const blog = await request.json();

    const blogId = parseInt(params.id);
    
    const blogIndex = blogs.findIndex((blog) => blog?.id === blogId);

    blogs[blogIndex] = {...blogs[blogIndex], ...blog};
    
    return Response.json(blogs);

}


export async function DELETE(_request: Request, {params}: {params: {id: string}}) {

    const blogId = parseInt(params.id);

    const blogIndex = blogs.findIndex((blog) => blog.id === blogId)

    blogs.splice(blogIndex, 1)

    return Response.json(blogs);
}


export async function GET(request: any) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if(query) {
        const filterBlog = blogs.filter((blog) => blog.title.toLowerCase().includes(query))

        return Response.json(filterBlog)

    }

    return Response.json(blogs)

}