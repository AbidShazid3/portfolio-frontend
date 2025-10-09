import BlogCard from "@/components/modules/Blog/BlogCard";
import { getBlogs } from "@/services/BlogServices";
import { Blog } from "@/types";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "All Blogs",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

export const revalidate = 30;

const BlogPage = async() => {
    const { data: blogs } = await getBlogs();

    return (
        <div className="text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 pb-10">
                {blogs.map((blog: Blog) => <BlogCard key={blog.id} blog={blog}></BlogCard>)}
            </div>
        </div>
    );
};

export default BlogPage;