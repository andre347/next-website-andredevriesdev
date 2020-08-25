export function Layout({ children, pageMeta }) {
  const meta = {
    title: "Andre de Vries",
    description:
      "My writings about data, data analytics, web developement and the Cloud. I'm a Solutions Engineer who works predominantly with Tableau, Alteryx and AWS.",
    cardImage:
      "https://res.cloudinary.com/dmim37dbf/image/upload/v1548761374/image_andre.png",
    keywords: [
      "technology",
      "aws",
      "software",
      "web",
      "development",
      "alteryx",
      "tableau",
      "youtube",
    ],
    ...pageMeta,
  };
  return <div className="divide-y-2 divide-orange-100">{children}</div>;
}

export default Layout;
