
export const getBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog`, {
    next: {
      revalidate: 30,
      tags: ["BLOGS"],
    }
  })
  return await res.json();
};

export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog/${blogId}`, {
    next: {
      revalidate: 30,
      tags: [`blog-${blogId}`]
    },
  });
  return await res.json();
};