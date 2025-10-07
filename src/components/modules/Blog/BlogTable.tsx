import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Blog } from "@/types";
import { Pencil, Trash2 } from "lucide-react";

const BlogTable = ({ blog }: { blog: Blog }) => {
    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{blog?.id}</TableCell>
            <TableCell>{blog?.title}</TableCell>
            <TableCell>{blog?.isFeatured ? "true" : "false"}</TableCell>
            <TableCell>{blog?.views}</TableCell>
            <TableCell>{new Date(blog?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <Button className="cursor-pointer hover:text-green-600" size={"sm"}><Pencil /></Button>
            </TableCell>
        </TableRow>

    )
}

export default BlogTable;