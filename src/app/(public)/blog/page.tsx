import BlogCard from "@/components/modules/Blog/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "All Blogs",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const BlogPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog`)
    if (!res.ok) {
        throw new Error('Failed to fetch blog data');
    }
    const { data: blogs } = await res.json();

    return (
        <div className="text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 pb-10">
                {blogs.map((blog: Blog) => <BlogCard key={blog.id} blog={blog}></BlogCard>)}
            </div>
        </div>
    );
};

export default BlogPage;