import { google } from "googleapis";

export default async (_, res) => {
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
  const { subscriberCount, viewCount } = channel.statistics;

  return res.status(200).json({
    subscriberCount,
    viewCount,
  });
};
