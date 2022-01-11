"use strict";

var info = [
  { country: "Kazachstanas", size: 2717300, people: 18064470 },
  { country: "Brazilija", size: 8515767, people: 210147125 },
  { country: "Vatikanas", size: 0.44, people: 801 },
  { country: "Vokietija", size: 357022, people: 83190556 },
  { country: "Kroatija", size: 56542, people: 4209815 },
];

function usersPrint(country, size, people) {
  var density = ((size * 1000000) / people).toFixed(2);

  console.log(
    "Salis: " + country + "," + " joje gyvena" + people + " mln. gyventoju"
  );
  console.log(
    "Valstybes plotas: " +
      size +
      " km²," +
      " plotas tenkantis vienam gyventojui " +
      density +
      " m²"
  );
  console.log(
    "============================================================================="
  );
}

for (var x of info) {
  usersPrint(x.country, x.size, x.people);
}
