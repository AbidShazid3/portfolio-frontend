export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog/${blogId}`);
  return await res.json();
};