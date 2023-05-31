import React from "react";

function GitHubCard(props) {
  const { props: meta } = props;
  const {
    name,
    id,
    url,
    description,
    language,
    stars,
    forks,
    created_at,
    updated_at,
  } = meta;
  return (
    <div className="mt-2 flex items-center cursor-pointer rounded-md text-gray-800 border border-gray-200 sm:rounded-lg hover:shadow-sm hover:border-gray-300 hover:text-gray-900 ease-in-out duration-150 bg-white/50">
      <div className="px-4 py-5 sm:p-6 w-full">
        <div className="flex flex-row justify-between w-full">
          <div>
            <p className="text-xs font-medium text-orange-500">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {language}
              </span>
            </p>
            {/* on mobile don't concat username, otherwise didnt align nicely */}
            <h3 className="sm:hidden block text-lg leading-6 font-medium mt-2">
              {name}
            </h3>
            <h3 className="sm:block hidden text-lg leading-6 font-medium mt-2">
              andre347/{name}
            </h3>
          </div>
          <div className="flex align-middle content-center">
            <div className="flex items-center">
              <svg
                fill="none"
                className="h-4 w-4 text-gray-500 flex-shrink-0"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="text-sm ml-1">{stars}</span>
              <span aria-hidden="true" className="text-gray-400 p-2">
                &bull;
              </span>
              <svg
                width={24}
                height={24}
                className="h-4 w-4 text-gray-500 flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M7,12 L14.5,12 C16.277025,12 17.7447372,10.6756742 17.970024,8.96013518 C16.2885152,8.7047201 15,7.25283448 15,5.5 C15,3.56700338 16.5670034,2 18.5,2 C20.4329966,2 22,3.56700338 22,5.5 C22,7.27155475 20.6838151,8.73569805 18.9759671,8.96790818 C18.7419236,11.2333126 16.8272778,13 14.5,13 L7,13 L7,15.0354444 C8.69614707,15.2780593 10,16.736764 10,18.5 C10,20.4329966 8.43299662,22 6.5,22 C4.56700338,22 3,20.4329966 3,18.5 C3,16.736764 4.30385293,15.2780593 6,15.0354444 L6,8.96455557 C4.30385293,8.72194074 3,7.26323595 3,5.5 C3,3.56700338 4.56700338,2 6.5,2 C8.43299662,2 10,3.56700338 10,5.5 C10,7.26323595 8.69614707,8.72194074 7,8.96455557 L7,12 Z M4,18.5 C4,19.8807119 5.11928813,21 6.5,21 C7.88071187,21 9,19.8807119 9,18.5 C9,17.1192881 7.88071187,16 6.5,16 C5.11928813,16 4,17.1192881 4,18.5 Z M4,5.5 C4,6.88071187 5.11928813,8 6.5,8 C7.88071187,8 9,6.88071187 9,5.5 C9,4.11928813 7.88071187,3 6.5,3 C5.11928813,3 4,4.11928813 4,5.5 Z M18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 Z" />
              </svg>

              <span className="text-sm ml-1">{forks}</span>
            </div>
          </div>
        </div>

        <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500 prose overflow-clip">
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
