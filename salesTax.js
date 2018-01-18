var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
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

function sum(input) {
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    total += Number(input[i]);
  }
  return total;
}

var calculateSalesTax = function (salesData, taxRates) {
  var object = {};
  for (i in salesData) {
    var companyName = companySalesData[i].name;
    var companySales = sum(companySalesData[i].sales);
    var companyTaxes = sum(companySalesData[i].sales) * salesTaxRates[companySalesData[i].province];
    if (object[companyName]) {
      object[companyName].totalSales += companySales;
      object[companyName].totalTaxes += companyTaxes;
    } else {
      object[companyName] = {totalSales: companySales, totalTaxes: companyTaxes};
    }
  }
  return object;
};

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/