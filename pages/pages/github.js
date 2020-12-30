import React from "react";
import useSWR from "swr";
import GitHubCard from "../../components/GitHubCard";
import NavTabs from "../../components/NavTabs";
import ProfileHeaderPage from "../../components/ProfileHeaderPage";
import Skeleton from "../../components/Skeleton";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Github() {
  const { data, error } = useSWR("/api/github", fetcher);
  if (error) {
    return (
      <ProfileHeaderPage>
        <p>There was an error</p>
      </ProfileHeaderPage>
    );
  }
  if (!data) {
    return (
      <ProfileHeaderPage>
        <NavTabs />
        {/* This is the skeleton loader */}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </ProfileHeaderPage>
    );
  }
  return (
    <ProfileHeaderPage>
      <NavTabs />
      <div className="flex flex-col space-y-2 md:items-center md:text-center sm:">
        <h1 className="text-2xl lg:text-3xl leading-9 tracking-normal font-semibold text-gray-900 sm:text-4xl sm:leading-10">
          Most Popular
        </h1>
        <p className="text-lg text-gray-500 font-medium">
          Explore my most popular work projects, hobby projects and code
          snippets that I share on Github.
        </p>
      </div>
      <ul className="flex flex-col space-y-4 py-9">
        {data.map((githubMeta) => {
          return (
            <GitHubCard
              key={githubMeta.id}
              props={githubMeta}
              // props={{ name, id, url, description, created_at, updated_at }}
            />
          );
        })}
      </ul>
    </ProfileHeaderPage>
  );
}

export default Github;
