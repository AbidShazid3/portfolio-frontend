"use client"

import { SkillCategory } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Trash2 } from "lucide-react";
import { deleteCategory } from "@/actions/category";
import { toast } from "sonner";
import { showError } from "@/utils/showError";
import UpdateCategoryModel from "./UpdateCategoryModel";

const CategoryTable = ({ category }: { category: SkillCategory }) => {

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this skill category?")) return;

        try {
            const result = await deleteCategory(category.id);
            toast.success(result?.message || "Category deleted successfully");
        } catch (error) {
            showError(error)
        }
    };

    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{category?.id}</TableCell>
            <TableCell>{category?.name}</TableCell>
            <TableCell>{new Date(category?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button onClick={handleDelete} className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <UpdateCategoryModel category={category}/>
            </TableCell>
        </TableRow >
    );
};

export default CategoryTable;