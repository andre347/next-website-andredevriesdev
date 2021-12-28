import redis from "@/lib/redis";

export default async function handler(req, res) {
  const slug = req.query.slug;

  if (req.method === "POST") {
    let currentViewCount;
    // get current view via slug
    const viewCount = await redis.hget("views", slug);
    if (viewCount === null) {
      // if no current view set it to 1
      const payload = { slug, count: 1 };
      currentViewCount = payload;
      await redis.hset("views", slug, JSON.stringify(payload));
    } else {
      // else return the current view + 1 and write to Redis
      const entry = JSON.parse((await redis.hget("views", slug)) || null);
      currentViewCount = {
        ...entry,
        count: entry.count + 1,
      };
      await redis.hset("views", slug, JSON.stringify(currentViewCount));
    }

    return res.status(200).json(currentViewCount);
  }

  if (req.method === "GET") {
    //    get single value via slug and return
    const value = await redis.hget("views", slug);
    return res.status(200).json({ value });
  }
}
