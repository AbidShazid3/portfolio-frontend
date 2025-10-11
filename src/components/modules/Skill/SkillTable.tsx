"use client"

import { Skill, SkillCategory } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { toast } from "sonner";
import { showError } from "@/utils/showError";
import { deleteSkill } from "@/actions/skill";
import UpdateSkillModal from "./UpdateSkillModal";
import { Trash2 } from "lucide-react";

const SkillTable = ({ skill, categories }: { skill: Skill; categories: SkillCategory[]}) => {

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this skill?")) return;

        try {
            const result = await deleteSkill(skill.id);
            toast.success(result?.message || "Skill deleted successfully");
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
                    onClick={handleDelete}
                ><Trash2 /></Button>
                <UpdateSkillModal categories={categories} skill={skill} />
            </TableCell>
        </TableRow >
    );
};

export default SkillTable;