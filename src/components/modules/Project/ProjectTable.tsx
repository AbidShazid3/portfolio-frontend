import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

const ProjectTable = ({ project }: { project: Project }) => {
    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{project?.id}</TableCell>
            <TableCell>{project?.title}</TableCell>
            <TableCell>
                <div className="relative w-10 h-10">
                    <Image
                        src={project?.thumbnail ||"https://i.ibb.co/gMgsqtM9/Abid-Shadat-Noor.jpg"}
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
                <Button className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <Button className="cursor-pointer hover:text-green-600" size={"sm"}><Pencil /></Button>
            </TableCell>
        </TableRow >
    );
};

export default ProjectTable;