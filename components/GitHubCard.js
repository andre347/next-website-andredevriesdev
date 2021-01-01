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
      <div className="px-4 py-5 sm:p-6 w-full">
        <div className="flex flex-row justify-between w-full">
          <div>
            <p class="text-xs font-medium text-orange-500">Repository</p>
            <h3 className="text-lg leading-6 font-medium mt-2">{name}</h3>
          </div>
          <div className="flex align-middle content-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-gray-500 flex-shrink-0"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm ml-1">{stars}</span>
              <span aria-hidden="true" className="text-gray-500 p-2">
                &bull;
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-gray-500 flex-shrink-0"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span className="text-sm ml-1">{forks}</span>
            </div>
          </div>
        </div>

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
