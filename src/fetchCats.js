const fetchCat = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );

  if (!apiRes.ok) {
    throw new Error(`cat/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchCat;
