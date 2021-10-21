import { useState, useRef } from "react";
import courses from "data/courses/courses";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicVideoComponent = dynamic(
  () => import("../../components/VideoPlayer"),
  { ssr: false }
);
export default function Course({ slug, course }) {
  const [videoId, setVideoId] = useState(course.videos[0].url);
  const [videoName, setVideoName] = useState(course.videos[0].title);
  const player = useRef(null);

  const setVideoHandler = (videoId, videoName) => {
    setVideoId(videoId);
    setVideoName(videoName);
    if (window) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className="divide-y-2 divide-orange-100">
      <Head>
        <title>{course.name} - Andre de Vries</title>
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          {course.name}
        </h1>
        <p className="text-lg leading-7 text-gray-500">{course.description}</p>
      </div>

      <div className="mt-4 grid gap-12 border-t-2 border-gray-100 pt-10 lg:grid-cols-1 lg:col-gap-5 lg:row-gap-12">
        <div>
          <DynamicVideoComponent videoId={videoId} player={player} />
          <h2 className="mt-4 text-sm text-gray-600">Watching: {videoName}</h2>
        </div>
        <div className="flow-root">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {course.videos.map((video, idx) => (
              <li
                key={idx}
                className="py-4 group"
                onClick={() => setVideoHandler(video.url, video.title)}
              >
                <div className="flex items-center space-x-4 cursor-pointer  rounded p-2">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 rounded text-gray-500 group-hover:text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate mb-1">
                      {video.title}
                    </p>
                    <p className="text-sm text-gray-500">{video.description}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => setVideoHandler(video.url)}
                      className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Watch
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* {courses.list.map((course, idx) => {
         return (
           <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150">
             <a
               href="https://www.youtube.com/channel/UC6oFbYx6YjE596P-Ty8bVyg"
               target="__blank"
               rel="noopener noreferrer"
             >
               <h3 className="text-xl leading-7 font-semibold text-gray-900">
                 {course.name}
               </h3>
             </a>
             <p className="mt-2 text-base leading-6 text-gray-500">
               {course.description}
             </p>
             <div className="mt-2">
               <Link href={"/courses/[slug]"} as={`/courses/${course.slug}`}>
                 <a
                   className="text-base leading-6 font-semibold text-orange-500 hover:text-orange-600 transition ease-in-out duration-150"
                   aria-label='Read "Partial Types in TypeScript"'
                 >
                   Learn more →
                 </a>
               </Link>
             </div>
           </div>
         );
       })} */}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = courses.list.map((course) => ({
    params: {
      slug: course.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const course = courses.list.filter((course) => course.slug === slug)[0];
  return {
    props: {
      course,
      slug,
    },
  };
}
