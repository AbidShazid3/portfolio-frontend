export const getCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/category`)
    return await res.json();
}