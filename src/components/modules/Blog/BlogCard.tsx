import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <Link
            href={`/blog/${blog?.id}`}
            className="relative bg-[#18183a] border border-cyan-800/30 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition duration-300  hover:scale-[1.02] hover:shadow-xl">
            <div className="">
                {blog?.thumbnail ? (
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image
                            src={blog?.thumbnail}
                            alt={blog?.title}
                            fill
                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl group-hover:rounded-t-2xl"
                        />
                    </div>
                ) : (
                    <div className="h-56 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                    </div>
                )}

                <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold transition-colors">
                        {blog?.title}
                    </h3>

                    <p className="text-gray-400 line-clamp-2">
                        {blog?.content}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="relative w-10 h-10">
                                <Image
                                    src={"https://i.ibb.co/gMgsqtM9/Abid-Shadat-Noor.jpg"}
                                    alt={blog?.author?.name || "Abid Shadat Noor"}
                                    fill
                                    sizes="40px"
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <span className="text-gray-300 font-medium">
                                {"Abid Shadat Noor"}
                            </span>
                        </div>

                        <span className="text-gray-300">
                            {blog?.views} views
                        </span>
                    </div>

                    <div className="text-right">
                        <span className="text-blue-600 font-semibold text-sm hover:underline">
                            Read More →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;