export const sortByNameYear = (a, b, sortBy) => {
  switch (sortBy) {
    case "name_asc":
      return a.name.localeCompare(b.name);
    case "name_desc":
      return b.name.localeCompare(a.name);
    case "year_asc":
      return a.publishedYear - b.publishedYear;
    case "year_desc":
      return b.publishedYear - a.publishedYear;
    default:
      return 0;
  }
};
