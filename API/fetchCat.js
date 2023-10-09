const fetchCat = async (id) => {
  const apiUrl = `https://api.thecatapi.com/v1/images/${id}`;

  console.log("Fetching cat object:", apiUrl);

  const apiRes = await fetch(apiUrl);

  console.log("API response status:", apiRes.status);
  console.log("API response status text:", apiRes.statusText);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchCat;
