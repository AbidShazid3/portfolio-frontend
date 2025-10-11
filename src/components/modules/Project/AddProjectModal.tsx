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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User } from "@/types";
import { createBlog } from "@/actions/blog";
import { toast } from "sonner";
import { showError } from "@/utils/showError";

const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    thumbnail: z.url("Thumbnail must be a valid URL").optional(),
    liveUrl: z.url("LiveUrl must be a valid URL"),
    frontendRepo: z.url("Frontend Repo must be a valid URL"),
    backendRepo: z.url("Backend Repo must be a valid URL"),
    features: z.string().min(1, "Features is required"),
    techStack: z.string().min(1, "TechStack is required"),
})

const AddProjectModal = ({ user }: { user: User }) => {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof projectSchema>>({
        resolver: zodResolver(projectSchema),
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

    const onSubmit = async (data: z.infer<typeof projectSchema>) => {
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
            authorId: user.id
        }
        try {
            const result = await createBlog(modifiedData);
            toast.success(result?.message || "Blog created successfully!");
            setOpen(false)
            form.reset();
        } catch (error) {
            showError(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant={"secondary"}>Add Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-md lg:max-w-xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form id='add-project' onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                        form="add-project" type="submit" variant="ghost" className="cursor-pointer hover:text-green-500">
                        {/* {isLoading ? ("Submitting...") : ("Submit")} */}
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddProjectModal;