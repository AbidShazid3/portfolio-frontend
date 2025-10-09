export const getSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill`, {
        next: {
            tags: ["skills"]
        }
    })
    return await res.json();
}