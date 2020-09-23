import React from "react";

function about() {
  return (
    <div className="relative py-8 bg-white overflow-hidden">
      <div className="relative">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Hello!
          </h1>
          <p className="text-xl text-gray-500 leading-8">
            Hi! I am Andre 👋 and I am a Solutions Engineer. I currently work
            for{" "}
            <a
              href="https://theinformationlab.co.uk"
              target="_blank"
              rel="noopener"
            >
              The Information Lab
            </a>{" "}
            in London. My main role there is to help people see and understand
            their data by using these two industry leading data analytics tools.
          </p>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p>
            In the last few years I've been focusing more and more on building
            and delivering educational content around data & data visualisation.
            I am also involved with our{" "}
            <a
              className="text-orange-400"
              href="http://www.thedataschool.co.uk"
              target="_blank"
              rel="noopener"
            >
              Dataschool
            </a>{" "}
            - this is a 2-year program focused on creating the next batch of
            great data analysts. At the Dataschool I teach various topics,
            ranging from 'Working with APIs' to 'Introduction to Regular
            Expressions'.
          </p>
          <h3>Web Development</h3>
          <p>
            I also regularly blog and work on web development and creative
            coding projects. This is often in relation to Tableau and Alteryx.
            Although I don't really like to use the word 'developer'. To me this
            sounds a bit like I'm stuck in a basement coding all day 🤓. That's
            not really what I do. I mainly use web technologies to help others
            be successful with Tableau & Alteryx. My front-end framework of
            choice is React and I'm also using D3.js if I feel up for it. Early
            on in my career I focused on Python but in the last few years I
            primarily write JavaScript. If you want to get a sense of what I
            create, then head over to my{" "}
            <a
              href="https://www.github.com/andre347"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>{" "}
            page.
          </p>
          <h3>Teaching</h3>
          <p>
            I have designed and delivered a whole host of training sessions in
            more than 10 countries across four continents. In 2019 alone I
            taught Tableau and Alteryx to more than a 1000 people. The training
            content ranges from introducing Tableau & Alteryx to specific topics
            such as using APIs and web development related topics.
          </p>
          <h3>Certifications: </h3>
          <ul>
            <li>Tableau Certified Trainer</li>
            <li>Tableau Desktop Certified</li>
            <li>Tableau Server Associate</li>
            <li>AWS Cloud Practitioner</li>
            <li>AWS Certified Developer - Associate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default about;
