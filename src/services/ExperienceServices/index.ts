export const getExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/experience`)
    return await res.json();
}