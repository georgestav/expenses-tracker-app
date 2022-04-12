import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const filterSelectHandler = (e) => {
    setSelectedYear(e.target.value);
  };
  // JS vanilla filter method creating a new array
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(selectedYear);
  });

  return (
    <div className="expenses">
      <Card>
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterSelect={filterSelectHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
