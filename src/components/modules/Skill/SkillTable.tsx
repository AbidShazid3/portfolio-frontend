import { Skill } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react";

const SkillTable = ({skill} : {skill: Skill}) => {
    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{skill?.id}</TableCell>
            <TableCell>{skill?.name}</TableCell>
            <TableCell>{skill?.category?.name}</TableCell>
            <TableCell>{new Date(skill?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <Button className="cursor-pointer hover:text-green-600" size={"sm"}><Pencil /></Button>
            </TableCell>
        </TableRow >
    );
};

export default SkillTable;