import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard";
import { getBlogById } from "@/services/BlogServices";
import { Blog } from "@/types";

export const revalidate = 30;

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog`);
    const { data: blogs } = await res.json();

    return blogs.map((blog: Blog) => ({
        blogId: String(blog.id),
    }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ blogId: string }>
}) => {
    const { blogId } = await params;
    const { data: blog }  = await getBlogById(blogId);

    return {
        title: blog?.title || "Blog",
        description:  typeof blog.content === "string"
        ? blog.content.slice(0, 160)
        : undefined,
    };
};

const BlogDetailsPage = async({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    const {data: blog} = await getBlogById(blogId);

    return (
        <div className="text-white">
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;