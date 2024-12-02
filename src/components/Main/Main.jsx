import { posts } from "../../assets/data/posts";
import PostCards from "../PostCards/PostCards";

export default function () {
  return (
    <>
      {posts.map((post) => (
        <PostCards data={post} />
      ))}
    </>
  );
}
