export const formatReleaseDate = (date) => {
  return new Date(date).toLocaleTimeString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
