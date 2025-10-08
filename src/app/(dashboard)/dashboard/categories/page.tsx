import { getCategories } from '@/services/CategoryServices';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SkillCategory } from '@/types';
import CategoryTable from '@/components/modules/Skill/CategoryTable';
import CategoryModal from '@/components/modules/Skill/CategoryModal';

const CategoriesPage = async () => {
    const { data: categories } = await getCategories();
    return (
        <div>
            <div className="flex items-center justify-between my-5">
                <h1 className="text-xl font-semibold">Total: {categories.length}</h1>
                <CategoryModal/>
            </div>
            <div className="border border-muted">
                <Table>
                    <TableHeader className="bg-accent">
                        <TableRow className="font-bold">
                            <TableHead className="pl-4">Id</TableHead>
                            <TableHead>Category Name</TableHead>
                            <TableHead>CreatedAt</TableHead>
                            <TableHead className="text-center w-[120px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.map((category:SkillCategory) => <CategoryTable key={category.id} category={category}></CategoryTable>)}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
};

export default CategoriesPage;