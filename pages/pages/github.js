import React from "react";
import useSWR from "swr";
import GitHubCard from "@/components/GitHubCard";
import ProfileHeaderPage from "@/components/ProfileHeaderPage";
import Skeleton from "@/components/Skeleton";
import { fetcher } from "@/lib/helper";

const githubTitle = "Most Popular Repos";

function GithubLayout({ children }) {
  return (
    <ProfileHeaderPage>
      <h3
        id="main"
        className="mt-8 text-xl leading-7 font-semibold text-gray-900"
      >
        {githubTitle}
      </h3>
      {children}
    </ProfileHeaderPage>
  );
}

function Github() {
  const { data, error } = useSWR("/api/github", fetcher);
  if (error) {
    return (
      <GithubLayout>
        <p>There was an error</p>
      </GithubLayout>
    );
  }
  if (!data && !error) {
    return (
      <GithubLayout>
        {/* This is the skeleton loader */}
        <ul className="flex flex-col space-y-4 py-9">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </ul>
      </GithubLayout>
    );
  }
  return (
    <GithubLayout>
      <ul className="flex flex-col space-y-4 pt-4 pb-9">
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
    </GithubLayout>
  );
}

export default Github;
