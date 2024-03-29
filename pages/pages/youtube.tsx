import React from "react";
import useSWR from "swr";
import ProfileHeaderPage from "@/components/ProfileHeaderPage";
import { fetcher } from "@/lib/helper";
import VideoSkeleton from "@/components/VideoSkeleton";

const youtubeTitle = "Channel Stats";
const videoTitle = "Recent Upload View Count";

function YouTube() {
  const { data: youtubeState, error } = useSWR("/api/youtube", fetcher);
  return (
    <ProfileHeaderPage>
      <h3
        id="main"
        className="mt-8 pb-4 text-xl leading-7 font-semibold text-gray-900"
      >
        {youtubeTitle}
      </h3>
      <main className="pt-4 pb-9">
        <div className="flex flex-col w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            {youtubeState && !error && (
              <>
                <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150 bg-white/50">
                  <a
                    href="https://www.youtube.com/channel/UC6oFbYx6YjE596P-Ty8bVyg"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-medium">YouTube Subscribers</h3>
                  </a>
                  <p className="mt-2 text-3xl font-bold spacing-sm text-black">
                    {new Intl.NumberFormat().format(
                      youtubeState.subscriberCount
                    )}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150 bg-white/50">
                  <a
                    href="https://www.youtube.com/channel/UC6oFbYx6YjE596P-Ty8bVyg"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-medium">YouTube Views</h3>
                  </a>
                  <p className="mt-2 text-3xl font-bold spacing-sm text-black">
                    {new Intl.NumberFormat().format(youtubeState.viewCount)}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150 bg-white/50">
                  <a
                    href="https://www.youtube.com/channel/UC6oFbYx6YjE596P-Ty8bVyg"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-medium">YouTube Videos</h3>
                  </a>
                  <p className="mt-2 text-3xl font-bold spacing-sm text-black">
                    {new Intl.NumberFormat().format(youtubeState.videoCount)}
                  </p>
                </div>
              </>
            )}
            {!youtubeState && !error && (
              <>
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
              </>
            )}
            {!youtubeState && error && (
              <p>
                {` Whoops, there's an error. We probably hit the YouTube API rate
                limit. Please come back later`}
              </p>
            )}
          </div>
        </div>
        <h3
          id="main"
          className="mt-8 pb-4 text-xl leading-7 font-semibold text-gray-900"
        >
          {videoTitle}
        </h3>
        <div className="flex flex-col w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            {youtubeState && !error && (
              <>
                {youtubeState.videoStats.map((video) => {
                  return (
                    <a
                      key={video.id}
                      className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150 bg-white/50"
                      href={video.url}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="mt-2 text-3xl font-bold spacing-sm text-black">
                        {new Intl.NumberFormat().format(video.views)}
                      </p>
                      <p className="text-sm font-light pt-4 overflow-ellipsis line-clamp-4">
                        {video.description}
                      </p>
                    </a>
                  );
                })}
              </>
            )}
            {!youtubeState && !error && (
              <>
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
                <VideoSkeleton />
              </>
            )}
            {!youtubeState && error && (
              <p>
                {`Whoops, there's an error. We probably hit the YouTube API rate
                limit. Please come back later`}
              </p>
            )}
          </div>
        </div>
      </main>
    </ProfileHeaderPage>
  );
}

export default YouTube;
