"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { AboutMe } from "@/types";


export async function createAboutMe(formData: Partial<AboutMe>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/about`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
        body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (!res.ok) {
        throw new Error(result?.message || "Action not permitted");
    }

    if (result?.id) {
        revalidateTag('ABOUT');
        revalidatePath("/about-me");
        revalidatePath("/dashboard/me");
    }
    return result;
}

export async function deleteAboutMe(id: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/about/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: `accessToken=${token}`,
        },
        credentials: "include",
    });

    const result = await res.json();

    if (result?.data?.id) {
        revalidateTag('ABOUT');
        revalidatePath("/about-me");
        revalidatePath("/dashboard/me");
    }

    return result;
}

export async function updateAboutMe(id: number, updatedData: Partial<AboutMe>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Unauthorized");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/about/${id}`, {
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
        revalidateTag('ABOUT');
        revalidatePath("/about-me");
        revalidatePath("/dashboard/me");
    }

    return result;
}