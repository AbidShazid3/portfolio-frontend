import { Blog } from "@/types";
import Image from "next/image";


const BlogDetailsCard = ({ blog }: { blog: Blog }) => {
    if (!blog) {
        return (
            <div className="flex items-center justify-center text-5xl font-medium text-red-500 min-h-[calc(100vh-80px)]">Blog not found.</div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>

            <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12">
                    <Image
                        src={"https://i.ibb.co/gMgsqtM9/Abid-Shadat-Noor.jpg"}
                        alt={blog?.author?.name || "Abid Shadat Noor"}
                        fill
                        sizes="48px"
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold">
                        {"Abid Shadat Noor"}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {new Date(blog.createdAt).toLocaleDateString()} • {blog.views} views
                    </p>
                </div>
            </div>

            {blog.thumbnail && (
                <div className="relative h-80 w-full overflow-hidden">
                    <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="rounded-lg object-cover shadow-md"
                    />
                </div>
            )}

            <article className="prose prose-lg max-w-none mt-10">
                <p>{blog.content}</p>
            </article>
        </main>
    );
};

export default BlogDetailsCard;