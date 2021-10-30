// new player
import ReactPlayer from "react-player/youtube";

import { useEffect } from "react";

export default function VideoPlayer({ videoId, player }) {
  useEffect(() => {
    console.log("Setting new video", videoId);
  }, [videoId, player]);
  return (
    <ReactPlayer
      ref={player}
      key={videoId}
      width="100%"
      height="100%"
      controls
      url={`https://www.youtube.com/watch?v=${videoId}`}
    />
  );
}
