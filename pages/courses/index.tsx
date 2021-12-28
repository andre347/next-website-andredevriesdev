import React from "react";
import Link from "next/link";
import Head from "next/head";

import courses from "data/courses/courses";
import { msToTime } from "@/lib/helper";

function Courses() {
  return (
    <div className="divide-y-2 divide-orange-100">
      <Head>
        <title>Courses - Andre de Vries</title>
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          All Courses
        </h1>
        <p className="text-lg leading-7 text-gray-500">{courses.subTitle}</p>
      </div>

      <div className="mt-4 grid gap-12 border-t-2 border-gray-100 pt-10 lg:grid-cols-1 lg:col-gap-5 lg:row-gap-12">
        {courses.list.map((course, idx) => {
          // calculate  duration
          const duration = course.videos.reduce((prev, current) => {
            // @ts-ignore
            return prev + current?.length;
            // @ts-ignore
          }, 0);
          return (
            <div key={idx}>
              <Link href={"/courses/[slug]"} as={`/courses/${course.slug}`}>
                <a>
                  <div className="border border-gray-200 rounded-lg p-4 max-w-72 w-full cursor-pointer hover:border-gray-300 ease-in-out duration-150">
                    <p className="text-sm leading-5 text-gray-500">
                      {course.videos.length + ` videos`} &bull;{" "}
                      <span>{msToTime(duration)}</span>
                    </p>
                    <h3 className="text-xl leading-7 font-semibold text-gray-900 mt-2">
                      {course.name}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {course.description}
                    </p>
                    <div className="mt-2">
                      <Link
                        href={"/courses/[slug]"}
                        as={`/courses/${course.slug}`}
                      >
                        <a className="text-base leading-6 font-semibold text-orange-500 hover:text-orange-600 transition ease-in-out duration-150">
                          Learn more →
                        </a>
                      </Link>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
