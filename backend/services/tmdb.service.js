import axios from "axios";

export const fetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.API_READ_ACCESS_TOKEN,
    },
  };

  const res = await axios.get(url, options);

  if (res.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + res.statusText);
  }

  return res.data;
};
