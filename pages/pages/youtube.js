import React from "react";
import useSWR from "swr";
import ProfileHeaderPage from "../../components/ProfileHeaderPage";
import SectionHeader from "../../components/SectionHeader";

const youtubeTitle = "Most Recent";
const youtubeDescription =
  "Prefer video based learning? Check out my latest videos from my YouTube Channel";

const fetcher = (url) => fetch(url).then((r) => r.json());

function YouTube() {
  const { data: youtubeState, error } = useSWR("/api/youtube", fetcher);
  return (
    <ProfileHeaderPage>
      {/* <SectionHeader
        sectionTitle={youtubeTitle}
        sectionDescription={youtubeDescription}
      /> */}
      <main className="py-9">
        <div className="flex flex-col w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            {youtubeState && !error && (
              <>
                <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150">
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
                <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150">
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
              </>
            )}
            {!youtubeState && !error && (
              <>
                <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer animate-pulse">
                  <h3 className="font-medium h-4 bg-gray-400 w-3/4"></h3>
                  <p className="mt-2 h-4 text-3xl font-bold spacing-sm bg-gray-400 rounded"></p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer ">
                  <h3 className="font-medium h-4 bg-gray-400 w-3/4"></h3>
                  <p className="mt-2 h-4 text-3xl font-bold spacing-sm bg-gray-400 rounded w-5/6"></p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </ProfileHeaderPage>
  );
}

export default YouTube;
