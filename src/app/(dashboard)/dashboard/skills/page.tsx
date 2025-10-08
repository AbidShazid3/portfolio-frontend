import { getSkills } from '@/services/SkillServices';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Skill } from '@/types';
import SkillTable from '@/components/modules/Skill/SkillTable';
import SkillModal from '@/components/modules/Skill/SkillModal';
import { getCategories } from '@/services/CategoryServices';

const SkillsPage = async() => {
    const { data: skills } = await getSkills();
    const { data: categories } = await getCategories();
    return (
        <div>
            <div className="flex items-center justify-between my-5">
                <h1 className="text-xl font-semibold">Total: {skills.length}</h1>
                <SkillModal categories={categories} />
            </div>
            <div className="border border-muted">
                <Table>
                    <TableHeader className="bg-accent">
                        <TableRow className="font-bold">
                            <TableHead className="pl-4">Id</TableHead>
                            <TableHead>Skill Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>CreatedAt</TableHead>
                            <TableHead className="text-center w-[120px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {skills.map((skill: Skill) => <SkillTable key={skill.id} skill={skill}></SkillTable>)}
                    </TableBody>

                </Table>
            </div>
        </div>
    );
};

export default SkillsPage;