"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Project} from "@/types";
import { toast } from "sonner";
import { showError } from "@/utils/showError";
import { Pencil } from "lucide-react";
import { updateProject } from "@/actions/project";

const updateProjectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    thumbnail: z.url("Thumbnail must be a valid URL").optional(),
    liveUrl: z.url("LiveUrl must be a valid URL"),
    frontendRepo: z.url("Frontend Repo must be a valid URL"),
    backendRepo: z.url("Backend Repo must be a valid URL"),
    features: z.string().min(1, "Features is required"),
    techStack: z.string().min(1, "TechStack is required"),
})

const UpdateProjectModal = ({project} : {project: Project}) => {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof updateProjectSchema>>({
        resolver: zodResolver(updateProjectSchema),
        defaultValues: {
            title: "",
            description: "",
            thumbnail: "",
            liveUrl: "",
            frontendRepo: "",
            backendRepo: "",
            features: "",
            techStack: "",
        },
    })

    useEffect(() => {
        if (open && project) {
            form.reset({
                title: project.title,
                description: project.description,
                thumbnail: project.thumbnail || "",
                liveUrl: project.liveUrl,
                frontendRepo: project.frontendRepo,
                backendRepo: project.backendRepo,
                features: project.features?.join(", ") || "",
                techStack: project.techStack?.join(", ") || "",
            });
        }
    }, [open, project, form]);

    const onSubmit = async (data: z.infer<typeof updateProjectSchema>) => {
        const modifiedData = {
            ...data,
            features: data.features
                .toString()
                .split(",")
                .map((feature) => feature.trim()),
            techStack: data.techStack
                .toString()
                .split(",")
                .map((tech) => tech.trim()),
        }
        try {
            const result = await updateProject(project.id ,modifiedData);
            toast.success(result?.message || "Blog updated successfully!");
            setOpen(false)
        } catch (error) {
            showError(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer hover:text-yellow-500" size={"sm"}><Pencil /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-md lg:max-w-xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form id='update-project' onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Blog Title</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Blog Title" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea className="h-full" placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="thumbnail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Thumbnail</FormLabel>
                                    <FormControl>
                                        <Input type="url" placeholder="Thumbnail" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="liveUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>LiveUrl</FormLabel>
                                    <FormControl>
                                        <Input type="url" placeholder="LiveUrl" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="frontendRepo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Frontend Repo</FormLabel>
                                    <FormControl>
                                        <Input type="url" placeholder="Frontend Repo" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="backendRepo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>BackendRepo</FormLabel>
                                    <FormControl>
                                        <Input type="url" placeholder="BackendRepo" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="features"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Features (comma separated)</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Features" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="techStack"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>TechStack (comma separated)</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="TechStack" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            className="cursor-pointer hover:text-red-600"
                            // disabled={isLoading}
                            variant="ghost">Cancel</Button>
                    </DialogClose>
                    <Button
                        // disabled={isLoading}
                        form="update-project" type="submit" variant="ghost" className="cursor-pointer hover:text-green-500">
                        {/* {isLoading ? ("Submitting...") : ("Submit")} */}
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProjectModal;