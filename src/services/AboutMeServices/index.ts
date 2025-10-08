export const getAboutMe = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/about`)
    return await res.json();
}