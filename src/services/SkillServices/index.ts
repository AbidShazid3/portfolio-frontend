export const getSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill`, {
        next: {
            tags: ["SKILLS"]
        }
    })
    return await res.json();
}