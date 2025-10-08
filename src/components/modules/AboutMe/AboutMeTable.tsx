import { AboutMe } from "@/types";
import { Button } from "@/components/ui/button";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import AddAboutMeModal from "./AddAboutMeModal";

const AboutMeTable = ({aboutMe}: {aboutMe: AboutMe}) => {
    return (
        <TableRow>
            <TableCell className="font-medium pl-4">{aboutMe?.name}</TableCell>
            <TableCell>
                <div className="relative w-10 h-10">
                                    <Image
                                        src={aboutMe?.profileImage ||"https://i.ibb.co/gMgsqtM9/Abid-Shadat-Noor.jpg"}
                                        alt={aboutMe?.name}
                                        fill
                                        sizes="40px"
                                        className="rounded-md object-cover"
                                    />
                                </div>
            </TableCell>
            <TableCell>{aboutMe?.email}</TableCell>
            <TableCell>{new Date(aboutMe?.createdAt).toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-3 text-right">
                <Button className="hover:text-red-600 cursor-pointer" size={"sm"}><Trash2 /></Button>
                <Button className="cursor-pointer hover:text-green-600" size={"sm"}><Pencil /></Button>
                <AddAboutMeModal/>
            </TableCell>
        </TableRow >
    );
};

export default AboutMeTable;