function countryInfo(data) {
  return {
    name: data.name,
    year: data.year,
    area: data.area,
    totalPopulation: data.totalPopulation,
  };
}
module.exports = { countryInfo };
