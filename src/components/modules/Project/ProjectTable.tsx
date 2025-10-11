"use client"

import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { deleteProject } from "@/actions/project";
import { toast } from "sonner";
import { showError } from "@/utils/showError";
import UpdateProjectModal from "./UpdateProjectModal";

const ProjectTable = ({ project }: { project: Project }) => {

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        try {
            const result = await deleteProject(project.id);
            toast.success(result?.message || "Project deleted successfully");
        } catch (error) {
            showError(error)
        }
    };

    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{project?.id}</TableCell>
            <TableCell>{project?.title}</TableCell>
            <TableCell>
                <div className="relative w-10 h-10">
                    <Image
                        src={project?.thumbnail || "https://i.ibb.co/gMgsqtM9/Abid-Shadat-Noor.jpg"}
                        alt={project?.title}
                        fill
                        sizes="40px"
                        className="rounded-md object-cover"
                    />
                </div>
            </TableCell>
            <TableCell>{project?.published ? "true" : "false"}</TableCell>
            <TableCell>{new Date(project?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button onClick={handleDelete} className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <UpdateProjectModal project={project} />
            </TableCell>
        </TableRow >
    );
};

export default ProjectTable;