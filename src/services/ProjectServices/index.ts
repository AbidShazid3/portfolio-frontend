export const getProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/project`, {
        next: {
            revalidate: 3600,
            tags: ['PROJECTS']
        }
    })
    return await res.json();
}