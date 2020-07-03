const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  const result = {}

  salesData.forEach(company => {

    if (!result[company.name]) {
      result[company.name] = {
        totalSales: company.sales.reduce((acc, curr) => acc + curr, 0),
      }
      result[company.name].totalTaxes = result[company.name].totalSales * taxRates[company.province]
    } else {
      const totalSales = company.sales.reduce((acc, curr) => acc + curr, 0)
      result[company.name].totalSales += totalSales
      result[company.name].totalTaxes += totalSales * taxRates[company.province]
    }
  })

  return result
}

console.log(calculateSalesTax(companySalesData, salesTaxRates))