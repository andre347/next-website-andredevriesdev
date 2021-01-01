import React from "react";
import useSWR from "swr";
import GitHubCard from "../../components/GitHubCard";
import NavTabs from "../../components/NavTabs";
import ProfileHeaderPage from "../../components/ProfileHeaderPage";
import SectionHeader from "../../components/SectionHeader";
import Skeleton from "../../components/Skeleton";

const githubTitle = "Most Popular";
const githubDescription =
  "Explore my most popular work projects, hobby projects and code snippets that I share on Github.";

const fetcher = (url) => fetch(url).then((r) => r.json());

function GithubLayout({ children }) {
  return (
    <ProfileHeaderPage>
      <NavTabs />
      <SectionHeader
        sectionTitle={githubTitle}
        sectionDescription={githubDescription}
      />
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
  if (!data) {
    return (
      <GithubLayout>
        {/* This is the skeleton loader */}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </GithubLayout>
    );
  }
  return (
    <GithubLayout>
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
    </GithubLayout>
  );
}

export default Github;
