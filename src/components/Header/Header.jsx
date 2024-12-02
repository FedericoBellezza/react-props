import { labelColor } from "../PostCards/PostCards";
import { posts } from "../../assets/data/posts";

const tagList = [];
posts.forEach((e) => {
  e.tags.forEach((tag) => {
    if (!tagList.includes(tag)) {
      tagList.push(tag);
    }
  });
});

export default function () {
  return (
    <>
      <header className="text-center">
        <h1 className="mt-5">Il mio blog</h1>

        {tagList.map((e) => (
          <span className={labelColor(e) + " badge mt-5"}>{e}</span>
        ))}
      </header>
    </>
  );
}
