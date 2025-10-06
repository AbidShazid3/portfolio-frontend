import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard";
import { getBlogById } from "@/services/BlogServices";
import { Blog } from "@/types";


export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog`);
    const { data: blogs } = await res.json();

    return blogs.slice(0, 3).map((blog: Blog) => ({
        blogId: String(blog.id),
    }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) => {
    const { blogId } = await params;
    const blog = await getBlogById(blogId);

    return {
        title: blog?.title,
        description: blog?.content,
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