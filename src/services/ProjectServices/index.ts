export const getProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project`, {
        next: {
            tags: ['PROJECTS']
        }
    })
    return await res.json();
}