"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { SkillCategory } from "@/types";


export async function createCategory(formData: Partial<SkillCategory>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/category`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
        body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result?.data?.id) {
        revalidateTag('CATEGORIES');
        revalidatePath("/category");
        revalidatePath("/dashboard/categories");
    }
    return result;
}

export async function deleteCategory(id: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/category/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
    });

    const result = await res.json();

    if (result?.data?.id) {
        revalidateTag('CATEGORIES');
        revalidatePath("/category");
        revalidatePath("/dashboard/categories");
    }

    return result;
}

export async function updateCategory(id: number, updatedData: Partial<SkillCategory>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/category/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
        body: JSON.stringify(updatedData),
    });

    const result = await res.json();

    if (result?.data?.id) {
        revalidateTag('CATEGORIES');
        revalidatePath("/category");
        revalidatePath("/dashboard/categories");
    }
    
    return result;
}