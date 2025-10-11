"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { Skill } from "@/types";


export async function createSkill(formData: Partial<Skill>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill`, {
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
        revalidateTag('SKILLS');
        revalidatePath("/skill");
        revalidatePath("/dashboard/skills");
    }
    return result;
}

export async function deleteSkill(id: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
    });

    const result = await res.json();

    if (result?.data?.id) {
        revalidateTag('SKILLS');
        revalidatePath("/skill");
        revalidatePath("/dashboard/skills");
    }

    return result;
}

export async function updateSkill(id: number, updatedData: Partial<Skill>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/${id}`, {
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
        revalidateTag('SKILLS');
        revalidatePath("/skill");
        revalidatePath("/dashboard/skills");
    }
    
    return result;
}