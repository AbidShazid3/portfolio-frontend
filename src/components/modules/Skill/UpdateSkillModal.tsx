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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Skill, SkillCategory } from "@/types";
import { updateSkill } from "@/actions/skill";
import { toast } from "sonner";
import { showError } from "@/utils/showError";
import { Pencil } from "lucide-react";

const updateSkillSchema = z.object({
    name: z.string().min(1, "Skill name is required"),
    iconUrl: z.url("Icon Url must be a valid URL"),
    categoryId: z.string().min(1, "Category is required")
})

const UpdateSkillModal = ({ categories, skill }: { categories: SkillCategory[]; skill: Skill }) => {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof updateSkillSchema>>({
        resolver: zodResolver(updateSkillSchema),
        defaultValues: {
            name: "",
            iconUrl: "",
            categoryId: "",
        },
    })

    useEffect(() => {
        if (open && skill) {
            form.reset({
                name: skill.name,
                iconUrl: skill.iconUrl,
                categoryId: skill.categoryId.toString(),
            });
        }
    }, [open, skill, form]);

    const onSubmit = async (data: z.infer<typeof updateSkillSchema>) => {
        const skillData = {
            ...data,
            categoryId: Number(data.categoryId)
        }
        try {
            const result = await updateSkill( skill.id,skillData);
            toast.success(result?.message || "Skill updated successfully!");
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
                    <form id='update-skill' onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Skill Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Skill Name" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="iconUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Icon Url</FormLabel>
                                    <FormControl>
                                        <Input type="url" placeholder="Icon Url" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select a Category</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl className="w-full">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categories.map((item) => <SelectItem key={item.id} value={item.id.toString()}>{item.name}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
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
                        form="update-skill" type="submit" variant="ghost" className="cursor-pointer hover:text-green-500">
                        {/* {isLoading ? ("Submitting...") : ("Submit")} */}
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateSkillModal;