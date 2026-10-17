let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  let average = totalExpensesValue / expenseEntries.length;
  return average;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}


let balanceColor = "green";

function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }

 }

function calculateCategoryExpenses(categoryName) {
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === categoryName) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];

  for (let i = 0; i < categories.length; i++) {
    let total = calculateCategoryExpenses(categories[i]);
    categoriesData.push([categories[i], total]);
  }

  let largestCategory = categoriesData[0][0];
  let maxValue = categoriesData[0][1];

  for (let i = 1; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > maxValue) {
      maxValue = categoriesData[i][1];
      largestCategory = categoriesData[i][0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(entry) {
  const amount = entry[1];

  // 1. Guardamos el nuevo gasto en el arreglo de registros
  expenseEntries.push(entry);
  
  // 2. Actualizamos correctamente la suma total acumulada sumando el monto
  totalExpensesValue += amount;
}
