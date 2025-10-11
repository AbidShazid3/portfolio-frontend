"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { Project } from "@/types";


export async function createProject(formData: Partial<Project>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project`, {
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
        revalidateTag('PROJECTS');
        revalidatePath("/project");
        revalidatePath("/dashboard/projects");
    }
    return result;
}

export async function deleteProject(id: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
    });

    const result = await res.json();

    if (result?.data?.id) {
        revalidateTag('PROJECTS');
        revalidatePath("/project");
        revalidatePath("/dashboard/projects");
    }

    return result;
}

export async function updateProject(id: number, updatedData: Partial<Project>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project/${id}`, {
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
        revalidateTag('PROJECTS');
        revalidatePath("/project");
        revalidatePath("/dashboard/projects");
    }
    
    return result;
}