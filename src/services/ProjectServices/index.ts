export const getProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project`, {
        next: {
            tags: ['projects']
        }
    })
    return await res.json();
}