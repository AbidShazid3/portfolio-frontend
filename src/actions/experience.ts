"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { Experience } from "@/types";

export async function createExperience(formData: Partial<Experience>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/experience`, {
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
        revalidateTag('EXPERIENCES');
        revalidatePath("/experience");
        revalidatePath("/dashboard/experiences");
    }
    return result;
}

export async function deleteExperience(id: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/experience/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
    });

    const result = await res.json();

    if (result?.data?.id) {
        revalidateTag('EXPERIENCES');
        revalidatePath("/experience");
        revalidatePath("/dashboard/experiences");
    }

    return result;
}

export async function updateExperience(id: number, updatedData: Partial<Experience>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/experience/${id}`, {
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
        revalidateTag('EXPERIENCES');
        revalidatePath("/experience");
        revalidatePath("/dashboard/experiences");
    }
    
    return result;
}