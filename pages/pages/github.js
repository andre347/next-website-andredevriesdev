import React from "react";
import useSWR from "swr";
import ProfileHeaderPage from "../../components/ProfileHeaderPage";

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
        <div>
          <p>Logo here for skeleton loader</p>
        </div>
        <div>
          <p>Logo here for skeleton loader</p>
        </div>
        <div>
          <p>Logo here for skeleton loader</p>
        </div>
        <div>
          <p>Logo here for skeleton loader</p>
        </div>
        <div>
          <p>Logo here for skeleton loader</p>
        </div>
      </ProfileHeaderPage>
    );
  }
  return (
    <ProfileHeaderPage>
      <ul className="">
        {data.map(({ name, id, url, description, created_at, updated_at }) => {
          return (
            <div key={id} className="py-9">
              {name}
            </div>
          );
        })}
      </ul>
    </ProfileHeaderPage>
  );
}

export default Github;
