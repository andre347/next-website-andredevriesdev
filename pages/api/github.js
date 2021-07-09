// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const data = await fetchdataFromGithub();
  // set the cache control to max cache for 60 seconds
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  res.statusCode = 200;
  //   return only the 5 most recently updated repos
  res.json(data.slice(0, 5));
}

const fetchdataFromGithub = async () => {
  // 1. fetch all the repos
  const url = `https://api.github.com/search/repositories?q=user:andre347&sort=starred&order=desc`;
  const apiResponse = await fetch(url);
  const jsonResponse = await apiResponse.json();
  //   2. destructure and parse all the items
  const { items } = jsonResponse;

  //  3. Map over each item and get the items we're interested in, and filter out all the forks
  const mappedResponse = items
    .filter((filteredRepo) => {
      return filteredRepo.fork === false;
    })
    .map((repo) => {
      return {
        name: repo.name,
        id: repo.id,
        url: repo.html_url,
        description: repo.description,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        stars: repo.stargazers_count,
        forks: repo.forks,
        language: repo.language,
      };
    });
  //   3. Return the new mappedResponse to the handler
  return mappedResponse;
};
