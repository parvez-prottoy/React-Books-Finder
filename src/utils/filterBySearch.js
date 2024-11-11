export const filterBySearch = (book, searchQuery) => {
  if (searchQuery !== "") {
    return book?.name.toLowerCase().includes(searchQuery.toLowerCase());
  } else {
    return book;
  }
};
