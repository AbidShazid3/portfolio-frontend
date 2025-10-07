import { Experience } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react";

const ExperienceTable = ({ exp }: { exp: Experience }) => {
    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{exp?.id}</TableCell>
            <TableCell>{exp?.role}</TableCell>
            <TableCell>{exp?.company}</TableCell>
            <TableCell>{exp?.startDate}</TableCell>
            <TableCell>{exp?.endDate}</TableCell>
            <TableCell>{new Date(exp?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <Button className="cursor-pointer hover:text-green-600" size={"sm"}><Pencil /></Button>
            </TableCell>
        </TableRow >
    )
};

export default ExperienceTable;