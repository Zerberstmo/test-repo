import { BlogPost } from "@/typs";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialPosts } from "./data";

// interface LikeState {
//   likes: Record<string, boolean>;
//   toggleLike: (id: string) => void;
// }

// export const useLikeStore = create<LikeState>()(
//   persist(
//     (set, get) => ({
//       likes: {},
//       toggleLike: (id) => {
//         const currentLikes = get().likes;
//         set({
//           likes: {
//             ...currentLikes,
//             [id]: !currentLikes[id],
//           },
//         });
//       },
//     }),
//     { name: "like-storage" },
//   ),
// );

interface BlogState {
  posts: BlogPost[];
  addLike(id: number): void;
}

function toggleLikeForPost(post: BlogPost): BlogPost {
  return { ...post, likes: post.likes > 0 ? post.likes - 1 : post.likes + 1 };
}

export const useBlogStore = create<BlogState>()(
  persist(
    (set, get) => ({
      posts: initialPosts,
      addLike(id) {
        const newPosts = get().posts.map((post) =>
          post.id === id ? toggleLikeForPost(post) : post,
        );
        set({ posts: newPosts });
      },
    }),
    { name: "blog-storage" },
  ),
);
