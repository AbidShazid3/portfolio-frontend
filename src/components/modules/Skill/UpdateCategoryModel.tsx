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
import { updateCategory } from "@/actions/category";
import { toast } from "sonner";
import { showError } from "@/utils/showError";
import { Pencil } from "lucide-react";
import { SkillCategory } from "@/types";

const updateCategorySchema = z.object({
    name: z.string().min(1, "Category name is required")
})

const UpdateCategoryModel = ({category} : {category: SkillCategory}) => {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof updateCategorySchema>>({
        resolver: zodResolver(updateCategorySchema),
        defaultValues: {
            name: "",
        },
    })

    useEffect(() => {
            if (open && category) {
                form.reset({
                    name: category.name,
                });
            }
        }, [open, category, form]);

    const onSubmit = async (data: z.infer<typeof updateCategorySchema>) => {
        console.log(data);
        try {
            const result = await updateCategory( category.id,data);
            toast.success(result?.message || "Skill Category updated successfully!");
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
                    <form id='update-category' onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Category Name" {...field} />
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
                        form="update-category" type="submit" variant="ghost" className="cursor-pointer hover:text-green-500">
                        {/* {isLoading ? ("Submitting...") : ("Submit")} */}
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateCategoryModel;