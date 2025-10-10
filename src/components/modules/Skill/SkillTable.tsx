"use client"

import { Skill } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { showError } from "@/utils/showError";

const SkillTable = ({ skill }: { skill: Skill }) => {

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this skill?")) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText || "Failed to delete skill");
            }

            toast.success("Skill deleted successfully");
            
        } catch (error) {
            showError(error)
        }
    };
    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{skill?.id}</TableCell>
            <TableCell>{skill?.name}</TableCell>
            <TableCell>{skill?.category?.name}</TableCell>
            <TableCell>{new Date(skill?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button
                    className="hover:text-red-600 cursor-pointer"
                    size={"sm"}
                    onClick={() => handleDelete(skill.id.toString())}
                ><Trash2 /></Button>
                <Button className="cursor-pointer hover:text-green-600" size={"sm"}><Pencil /></Button>
            </TableCell>
        </TableRow >
    );
};

export default SkillTable;