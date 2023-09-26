const fetchBreed = async (id) => {
  const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;

  console.log("Fetching breed object:", apiUrl);

  const apiRes = await fetch(apiUrl);

  console.log("API response status:", apiRes.status);
  console.log("API response status text:", apiRes.statusText);

  if (!apiRes.ok) {
    throw new Error(`breed/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreed;
