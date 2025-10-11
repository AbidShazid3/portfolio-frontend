"use client"

import { Experience } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Trash2 } from "lucide-react";
import { deleteExperience } from "@/actions/experience";
import { toast } from "sonner";
import { showError } from "@/utils/showError";
import UpdateExperienceModal from "./UpdateExperienceModal";

const ExperienceTable = ({ exp }: { exp: Experience }) => {

    const handleDelete = async () => {
            if (!confirm("Are you sure you want to delete this experience?")) return;
    
            try {
                const result = await deleteExperience(exp.id);
                toast.success(result?.message || "Experience deleted successfully");
            } catch (error) {
                showError(error)
            }
        };

    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{exp?.id}</TableCell>
            <TableCell>{exp?.role}</TableCell>
            <TableCell>{exp?.company}</TableCell>
            <TableCell>{exp?.startDate}</TableCell>
            <TableCell>{exp?.endDate}</TableCell>
            <TableCell>{new Date(exp?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button onClick={handleDelete} className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <UpdateExperienceModal exp={exp} />
            </TableCell>
        </TableRow >
    )
};

export default ExperienceTable;