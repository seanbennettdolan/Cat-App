const fetchBreeds = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`https://api.thecatapi.com/v1/breeds`);

  if (!apiRes.ok) {
    throw new Error(`breeds/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreeds;
