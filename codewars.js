// ============Growth of a Population==================

function nbYear(p0, percent, aug, p) {
  let newPop = p0;
  let years = 0;
  while (newPop < p) {
    newPop = calculateNewPop(newPop, percent, aug);
    years += 1;
  }
  return years;
}

function calculateNewPop(pop, percentage, aug) {
  return pop + pop * (percentage / 100) + aug;
}

nbYear(1500000, 2.5, 10000, 2000000);

console.time("algo1");
for (let i = 1; i < 1000000; i++) {
  nbYear(1500000, 2.5, 10000, 2000000);
}
console.timeEnd("algo1");
