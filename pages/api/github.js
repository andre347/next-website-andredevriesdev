// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const data = await fetchdataFromGithub();
  res.statusCode = 200;
  //   return only the 5 most recently updated repos
  res.json(data.slice(0, 5));
};

const fetchdataFromGithub = async () => {
  // 1. fetch all the repos
  const url = `https://api.github.com/search/repositories?q=user:andre347&sort=updated&order=desc`;
  const apiResponse = await fetch(url);
  const jsonResponse = await apiResponse.json();
  //   2. destructure and parse all the items
  const { items } = jsonResponse;
  const mappedResponse = items.map((repo) => {
    return {
      name: repo.name,
      id: repo.id,
      url: repo.html_url,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
    };
  });
  //   3. Return the new mappedResponse to the handler
  return mappedResponse;
};
