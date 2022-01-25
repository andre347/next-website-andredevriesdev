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
            Hi! I am Andre 👋 and I am a Developer & Solutions Engineer. I
            currently work for{" "}
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
            and delivering educational content around data engineering & data visualisation
            on the web. I really enjoy empowering others with modern data skills. I am also involved with our`}{" "}
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
          <Logos />
          <h3>Web Development</h3>
          <p>
            {`I really enjoy building web applications and integrating web technologies in all kinds of ways. You can call me a bit of a 'hybrid' developer - lots of the applications that I built are web based an integrate with other tools in the data analytics space. I mainly use web technologies to help others be successful with BI tools such as Tableau & Alteryx, and I have created many open-source packages to make life easier with these tools. My front-end framework of choice is React (Next.js) but I like writing backend code as much as front-end. Early on in my career as a data analyst I focused on Python but in the last few years I primarily write JavaScript & Typescript. If you want to get a sense of what I create, then head over to my`}{" "}
            <a
              href="https://www.github.com/andre347"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>{" "}
            page.
          </p>
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
          </figure>
          <h3>What I do</h3>
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
