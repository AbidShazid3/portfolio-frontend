import BlogTable from '@/components/modules/Blog/BlogTable';
import { getBlogs } from '@/services/BlogServices';
import { Blog } from '@/types';
import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AddBlogModal from '@/components/modules/Blog/AddBlogModal';

const BlogsPage = async () => {
    const { data: blogs } = await getBlogs();
    return (
        <div>
            <div className="flex items-center justify-between my-5">
                <h1 className="text-xl font-semibold">Total Blogs: {blogs.length}</h1>
                <AddBlogModal/>
            </div>
            <div className="border border-muted">
                <Table>
                    <TableHeader className="bg-accent">
                        <TableRow className="font-bold">
                            <TableHead className="pl-4">Id</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>isFeatured</TableHead>
                            <TableHead>Views</TableHead>
                            <TableHead>CreatedAt</TableHead>
                            <TableHead className="text-center w-[120px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {blogs.map((blog: Blog) => <BlogTable key={blog.id} blog={blog}></BlogTable>)}
                    </TableBody>

                </Table>
            </div>
        </div>
    );
};

export default BlogsPage;