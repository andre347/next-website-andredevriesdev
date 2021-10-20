import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/helper";

// template for date
import tinytime from "tinytime";
const template = tinytime("{MMMM} {DD}, {YYYY}");
export default function BlogPost({ id, title, description, date, category }) {
  const { data } = useSWR(`/api/views/${id}`, fetcher);
  const parsedValue = data ? JSON.parse(data?.value) : null;
  const viewCount = parsedValue?.count || 0;

  return (
    <li key={id} className="py-9">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-2 xl:items-baseline">
        <dl className="col-span-4">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base leading-6 font-medium text-gray-500">
            <time dateTime={date}>{template.render(new Date(date))}</time>{" "}
            &bull; <span>{category}</span> &bull;{" "}
            {`${viewCount > 0 ? viewCount.toLocaleString() : "--"} ${
              viewCount === 1 ? "view" : "views"
            }`}
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-4">
          <div className="space-y-6">
            <h2 className="text-2xl leading-8 font-bold tracking-tight">
              <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
                <a className="text-gray-800">{title}</a>
              </Link>
            </h2>
            <div className="prose max-w-none text-gray-500 line-clamp-4">
              {description}
            </div>
          </div>
          <div className="text-base leading-6 font-medium">
            <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
              <a
                className="text-orange-500 hover:text-orange-600 transition ease-in-out duration-150 text-base leading-6"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </a>
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}
