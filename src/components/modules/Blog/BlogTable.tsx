"use client"

import { deleteBlog } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Blog } from "@/types";
import { showError } from "@/utils/showError";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import UpdateBlogModal from "./UpdateBlogModal";

const BlogTable = ({ blog }: { blog: Blog }) => {

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        try {
            const result = await deleteBlog(blog.id);
            toast.success(result?.message || "Blog deleted successfully");
        } catch (error) {
            showError(error)
        }
    };

    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{blog?.id}</TableCell>
            <TableCell>{blog?.title}</TableCell>
            <TableCell>{blog?.isFeatured ? "true" : "false"}</TableCell>
            <TableCell>{blog?.views}</TableCell>
            <TableCell>{new Date(blog?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button
                    className="hover:text-red-600 cursor-pointer"
                    size={"sm"}
                    onClick={handleDelete}
                >
                    <Trash2 />
                </Button>

                <UpdateBlogModal blog={blog} />
            </TableCell>
        </TableRow>

    )
}

export default BlogTable;