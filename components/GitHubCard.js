import React from "react";

function GitHubCard(props) {
  const { props: meta } = props;
  const {
    name,
    id,
    url,
    description,
    stars,
    forks,
    created_at,
    updated_at,
  } = meta;
  console.log(meta);
  return (
    <div className="mt-2 flex items-center rounded-md text-gray-800 border border-gray-200 sm:rounded-lg hover:shadow-sm hover:border-gray-300 hover:text-gray-900 ease-in-out duration-150 ">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium">{name}</h3>
        <div>{stars}</div>
        <div>{forks}</div>
        <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500 prose">
          <p>{description}</p>
        </div>
        <div className="mt-3 text-sm leading-5">
          <a
            href={url}
            target="__blank"
            rel="noopener noreferrer"
            className="font-medium text-orange-500 hover:text-orange-600 transition ease-in-out duration-150"
          >
            Learn more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default GitHubCard;
