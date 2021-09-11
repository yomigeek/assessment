export const filterProcessor = (allData, filterVariable) => {
  let filteredResults = [];

  for (let i = 0; i < allData?.length; i++) {
    const results = allData[i]?.categories?.filter(
      (data) => data?.name?.toLowerCase() === filterVariable
    );

    if (results?.length > 0) {
      filteredResults.push(allData[i]);
    }
  }

  return filteredResults;
};
