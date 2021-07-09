import { google } from "googleapis";
import xml2js from "xml2js";

async function getLatestVideos() {
  const response = await fetch(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC6oFbYx6YjE596P-Ty8bVyg"
  );
  const parsedResponse = await response.text();
  const result = await xml2js.parseStringPromise(parsedResponse, {
    mergeAttrs: true,
  });
  const entry = result.feed.entry.slice(0, 4);
  const mappedEntries = entry.map((video) => {
    return {
      id: video.id[0],
      title: video.title[0],
      url: video.link[0].href[0],
      published: video.published[0],
      thumbnail: video["media:group"][0]["media:thumbnail"][0]["url"][0],
      description: video["media:group"][0]["media:description"][0],
      views:
        video["media:group"][0]["media:community"][0]["media:statistics"][0][
          "views"
        ][0],
    };
  });
  // convert it to a JSON string
  return mappedEntries;
}

export default async function handler(_, res) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  });

  const youtube = google.youtube({
    auth,
    version: "v3",
  });

  const response = await youtube.channels.list({
    id: "UC6oFbYx6YjE596P-Ty8bVyg",
    part: "statistics",
  });

  const channel = response.data.items[0];
  const { subscriberCount, viewCount, videoCount } = channel.statistics;
  const videoStats = await getLatestVideos();

  // set the cache control to max cache for 5 minutes
  res.setHeader("Cache-Control", "s-maxage=300000, stale-while-revalidate");

  return res.status(200).json({
    subscriberCount,
    viewCount,
    videoCount,
    videoStats,
  });
}
