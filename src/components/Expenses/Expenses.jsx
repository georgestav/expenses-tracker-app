import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.scss";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const filterSelectHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="expenses">
      <Card>
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterSelect={filterSelectHandler}
        />
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
