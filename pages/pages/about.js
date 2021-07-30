import React from "react";

function About() {
  return (
    <div className="relative py-8 bg-white overflow-hidden">
      <div className="relative">
        <div className="text-lg max-w-5xl mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Hello!
          </h1>
          <p className="text-xl text-gray-500 leading-8">
            Hi! I am Andre 👋 and I am a Solutions Engineer. I currently work
            for{" "}
            <a
              href="https://theinformationlab.co.uk"
              target="_blank"
              rel="noreferrer noopener"
            >
              The Information Lab
            </a>{" "}
            in London. My main role there is to help people see and understand
            their data by using industry leading data analytics tools.
          </p>
        </div>
        <div className="max-w-7xl prose prose-lg text-gray-500 mx-auto">
          <p>
            {`In the last few years I've been focusing more and more on building
            and delivering educational content around data & data visualisation
            on the web. I am also involved with our`}{" "}
            <a
              className="text-orange-400"
              href="http://www.thedataschool.co.uk"
              target="_blank"
              rel="noreferrer noopener"
            >
              Dataschool
            </a>{" "}
            - this is a 2-year program focused on creating the next batch of
            great data analysts. At the Dataschool I teach various topics,
            ranging from &apos;Working with APIs&apos; to &apos;Introduction to
            Regular Expressions&apos;.
          </p>
          <h3>Web Development</h3>
          <p>
            {`I really enjoy building web applications and integrating web technologies in all kinds of ways. You can call me a bit of a 'hybrid' developer - lots of the applications that I built are web based an integrate with other tools in the data analytics space. I mainly use web technologies to help others be successful with Tableau & Alteryx and I have created many open-source tools to make life easier with these tools. My front-end framework of choice is React (Next.js) and I'm also using D3.js if I feel up for it. Early on in my career I focused on Python but in the last few years I primarily write JavaScript & Typescript. If you want to get a sense of what I create, then head over to my`}{" "}
            <a
              href="https://www.github.com/andre347"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>{" "}
            page.
          </p>
          {/* <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>
              Sagittis scelerisque nulla cursus in enim consectetur quam.
            </figcaption>
          </figure> */}
          <h3>Teaching</h3>
          <p>
            During my career I have helped hundreds of companies, many of those
            firms in the Fortune 500. I have also designed and delivered a whole
            host of training sessions in more than 10 countries across four
            continents. In 2019 alone I taught Tableau and Alteryx to more than
            a 1000 people in person. The training content ranges from
            introducing Tableau & Alteryx to specific topics such as using APIs
            and web development related topics.
          </p>
          <h3>DataDev Ambassador</h3>
          <p>
            In 2020 I was elected as one of the first{" "}
            <a
              href="https://www.tableau.com/about/blog/2020/9/please-welcome-2020-tableau-ambassadors"
              target="_blank"
              rel="noreferrer noopener"
            >
              Tableau DataDev Ambassadors
            </a>
            . A huge honour and a confirmation that I was helping people in the
            community with all the content I delivered through videos, blog
            posts and speaker events!
          </p>
          <h3>Certifications</h3>
          <ul>
            <li>Tableau Certified Trainer</li>
            <li>Tableau Desktop Certified</li>
            <li>Tableau Server Associate</li>
            <li>AWS Cloud Practitioner</li>
            <li>AWS Certified Developer - Associate</li>
            <li>AWS Certified Data Analytics - Specialty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
