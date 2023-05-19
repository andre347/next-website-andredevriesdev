import Logos from "@/components/CompanyLogos";
import Image from "next/image";

function About() {
  return (
    <div className="relative py-8 bg-white overflow-hidden">
      <div className="relative">
        <div className="text-lg max-w-5xl mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Hello!
          </h1>
          <p className="text-xl text-gray-500 leading-8">
            Hi! I am Andre 👋 and I am a Software Engineer & Consultant who has
            a passion for working with data. I currently work in the Success
            Team at{" "}
            <a
              href="https://retool.com/"
              target="_blank"
              className="text-orange-400"
              rel="noreferrer noopener"
            >
              Retool
            </a>{" "}
            in London. My main role there is to help and enable customers to
            successfully deploy, learn and scale Retool.
          </p>
        </div>
        <div className="max-w-7xl prose prose-lg text-gray-500 mx-auto">
          <p>
            I have been working as a consultant and developer for nearly 8 years
            now. I started my career as a data analyst and rolled into
            consulting and software development at{" "}
            <a
              href="https://theinformationlab.co.uk/"
              target="_blank"
              className="text-orange-400"
              rel="noreferrer noopener"
            >
              The Information Lab
            </a>
            . I have worked with many different companies across the globe, from
            small startups to large enterprises. I have a passion for data and I
            love to help others be successful with tools in the data space. I am
            also a big fan of open-source software and I have created several
            open-source tools to help others be successful with data.
          </p>
          <Logos />
          {/* 
          <figure>
            <Image
              className="w-full rounded-lg"
              src="https://res.cloudinary.com/dmim37dbf/image/upload/v1634308213/personal%20blog/IMG_3800.jpg"
              alt="London hackathon winners 2019"
              width={1310}
              height={873}
              layout="intrinsic"
            />
            <figcaption>London DataDev 2019 Hackathon winners!</figcaption>
          </figure> */}
          {/* <h3>What I do</h3>
          <p>
            During my career I have helped hundreds of companies getting into
            the Modern Data Stack, many of those firms in the Fortune 500. I
            have also designed and delivered a whole host of training sessions
            in more than 10 countries across four continents. In 2019 alone I
            taught Tableau and Alteryx to more than a 1000 people in person. The
            training content ranges from introducing Tableau & Alteryx to
            specific topics such as using APIs and web development related
            topics. Currently at The Information Lab I advise customers who want
            to build and architect public-facing data apps and want to monetise
            their BI and data insights.
          </p> */}
          {/* <h3>DataDev Ambassador</h3>
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
            posts and speaker events! And I was even asked to{" "}
            <a
              href="https://www.tableau.com/about/blog/2021/9/congratulations-and-welcome-2021-tableau-ambassadors"
              target="__blank"
              rel="noopener noreferrer"
            >
              {" "}
              come back
            </a>{" "}
            in the 2021 cohort! 🎉
          </p> */}
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
