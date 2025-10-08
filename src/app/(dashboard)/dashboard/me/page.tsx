import { getAboutMe } from '@/services/AboutMeServices';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AboutMeTable from '@/components/modules/AboutMe/AboutMeTable';

const MePage = async () => {
    const {data: aboutMe} = await getAboutMe();
    return (
            <div className="border border-muted">
                <Table>
                    <TableHeader className="bg-accent">
                        <TableRow className="font-bold">
                            <TableHead className="pl-4">Name</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>CreatedAt</TableHead>
                            <TableHead className="text-center w-[120px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <AboutMeTable aboutMe={aboutMe}/>
                    </TableBody>

                </Table>
            </div>
    );
};

export default MePage;