import { getExperiences } from '@/services/ExperienceServices';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Experience } from '@/types';
import ExperienceTable from '@/components/modules/Experience/ExperienceTable';
import ExperienceModal from '@/components/modules/Experience/ExperienceModal';

const ExperiencesPage = async() => {
    const {data: experiences} = await getExperiences();
    return (
        <div>
            <div className="flex items-center justify-between my-5">
                <h1 className="text-xl font-semibold">Total: {experiences.length}</h1>
                <ExperienceModal/>
            </div>
            <div className="border border-muted">
                <Table>
                    <TableHeader className="bg-accent">
                        <TableRow className="font-bold">
                            <TableHead className="pl-4">Id</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>End Date</TableHead>
                            <TableHead>CreatedAt</TableHead>
                            <TableHead className="text-center w-[120px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {experiences.map((exp:Experience) => <ExperienceTable key={exp.id} exp={exp}></ExperienceTable>)}
                    </TableBody>

                </Table>
            </div>
        </div>
    );
};

export default ExperiencesPage;