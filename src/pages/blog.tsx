import { BlogPostList } from "@/components/ui/blogPost";
import { Container } from "../components/ui/container";
import { useBlogStore } from "@/store/likestore";

export function Blog() {
  const blogPosts = useBlogStore((state) => state.posts);

  return (
    <div className="min-h-screen w-full pt-8">
      <Container className="mt-8 w-[calc(100%-2rem)] bg-slate-950 text-neutral-100">
        <h1 className="mb-8 w-full text-end font-mono text-4xl font-bold tracking-wider">
          {"//unser blog"}
        </h1>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostList key={post.id}  />
          ))}
        </ul>
      </Container>
    </div>
  );
}
