import { getProjects } from '@/services/ProjectServices';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Project } from '@/types';
import ProjectTable from '@/components/modules/Project/ProjectTable';
import AddProjectModal from '@/components/modules/Project/AddProjectModal';

const ProjectsPage = async() => {
    const { data: projects } = await getProjects();
    return (
        <div>
            <div className="flex items-center justify-between my-5">
                <h1 className="text-xl font-semibold">Total Blogs: {projects.length}</h1>
                <AddProjectModal/>
            </div>
            <div className="border border-muted">
                <Table>
                    <TableHeader className="bg-accent">
                        <TableRow className="font-bold">
                            <TableHead className="pl-4">Id</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>thumbnail</TableHead>
                            <TableHead>published</TableHead>
                            <TableHead>CreatedAt</TableHead>
                            <TableHead className="text-center w-[120px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project: Project) => <ProjectTable key={project.id} project={project}></ProjectTable>)}
                    </TableBody>

                </Table>
            </div>
        </div>
    );
};

export default ProjectsPage;