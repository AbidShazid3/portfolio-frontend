export const getExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/experience`, {
        next: {
            tags: ["EXPERIENCES"]
        }
    })
    return await res.json();
}