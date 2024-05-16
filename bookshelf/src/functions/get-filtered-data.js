const getFilteredData = (data, categoryBy) => {
  if (categoryBy.length > 0) {
    const categorySortedData = data.filter((product) =>
      categoryBy.some((category) => product.categoryName === category)
    );
    return categorySortedData;
  } else {
    return data;
  }
};

export { getFilteredData };
