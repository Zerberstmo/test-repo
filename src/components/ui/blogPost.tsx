import { useBlogStore } from "@/store/likestore";
import { Toggle } from "./toggle";



export function BlogPostList() {
  const posts = useBlogStore((state) => state.posts);
  const addLike = useBlogStore((state) => state.addLike);

  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          className="mb-4 flex flex-col border-t border-neutral-300 p-3"
        >
          <span className="ml-auto w-fit rounded-sm bg-purple-900 px-2 font-mono text-sm font-bold text-neutral-100">
            {post.tag}
          </span>
          <h1 className="1 mb-3 text-balance text-3xl font-bold tracking-tight">
            {post.title}
          </h1>
          <p className="mb-2 text-neutral-200">{post.text}</p>
          <div className="flex items-start justify-between">
            <p className="text-sm text-neutral-200">{post.date}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm italic text-neutral-50">
                {post.likes}
              </span>
              <Toggle
                pressed={post.likes > 0}
                onPressedChange={() => addLike(post.id)}
              >
                ❤️
              </Toggle>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
