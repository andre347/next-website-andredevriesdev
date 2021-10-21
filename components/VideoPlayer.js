// load vim css
import "@vime/core/themes/default.css";
// load vim player
import { Player, Youtube } from "@vime/react";

import { useEffect } from "react";

export default function VideoPlayer({ videoId, player }) {
  useEffect(() => {
    console.log("Setting new video", videoId);
  }, [videoId, player]);
  return (
    <Player controls ref={player} key={videoId}>
      <Youtube videoId={videoId} />
    </Player>
  );
}
