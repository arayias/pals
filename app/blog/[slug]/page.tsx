type Post = {
  title: string;
  content: string;
  slug: string;
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: Props) {
  const posts: Post[] = await (
    await fetch("http://localhost:3000/api/content")
  ).json();
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
