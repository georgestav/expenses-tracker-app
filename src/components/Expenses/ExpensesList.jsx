import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses that year</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
