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
import { updateExperience } from "@/actions/experience";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import { Experience } from "@/types";
import { showError } from "@/utils/showError";

const updateExperienceSchema = z.object({
    role: z.string().min(1, "Role is required"),
    company: z.string().min(1, "Description is required"),
    startDate: z.string().min(1, "Start Date is required"),
    endDate: z.string().min(1, "End Date is required"),
    description: z.string().min(1, "Description is required"),
})



const UpdateExperienceModal = ({exp}: {exp: Experience}) => {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof updateExperienceSchema>>({
        resolver: zodResolver(updateExperienceSchema),
        defaultValues: {
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    })

    useEffect(() => {
        if (open && exp) {
            form.reset({
                role: exp.role,
                company: exp.company,
                startDate: exp.startDate,
                endDate: exp.endDate,
                description: exp.description
            });
        }
    }, [open, exp, form]);

    const onSubmit = async (data: z.infer<typeof updateExperienceSchema>) => {
        console.log(data);
        try {
            const result = await updateExperience(exp.id,data);
            toast.success(result?.message || "Experience updated successfully!");
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
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form id='update-experience' onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Role" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Company Name" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Date</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Start Date" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>End Date</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="End Date" {...field} />
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
                        form="update-experience" type="submit" variant="ghost" className="cursor-pointer hover:text-green-500">
                        {/* {isLoading ? ("Submitting...") : ("Submit")} */}
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateExperienceModal;