import { useBlogStore } from "@/store/likestore";
import { useParams } from "react-router-dom";

export function BlogPostDetail() {
  const { postId } = useParams();
  const posts = useBlogStore((state) => state.posts);
  if (!postId) {
    return <>Muh</>;
  }
  const requestedPost = posts.find((post) => parseInt(postId) === post.id);

  if (!requestedPost) {
    throw new Error("No Post found!");
  }

  return (
    <div className="grid h-full min-h-screen place-items-center bg-slate-950 text-5xl text-neutral-100">
      {/* <requestedPost post={requestedPost} /> */}
    </div>
  );
}
