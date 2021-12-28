import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/helper";

export default function BlogViews({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const parsedValue = data ? JSON.parse(data?.value) : null;
  const viewCount = parsedValue?.count || 0;

  useEffect(() => {
    const updateCount = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    updateCount();
  }, [slug]);
  return (
    <>
      `${viewCount > 0 ? viewCount.toLocaleString() : "0"} $
      {viewCount === 1 ? "view" : "views"}`
    </>
  );
}
