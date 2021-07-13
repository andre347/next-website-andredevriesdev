import redis from "@/lib/redis";
export default async function handler(_, res) {
  const allViews = await redis.hvals("views");
  return res.status(200).json({ allViews });
}
