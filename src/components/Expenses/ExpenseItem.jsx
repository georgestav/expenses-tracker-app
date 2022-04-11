import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

const ExpenseItem = ({ expense }) => {
  const [expenseTitle, setExpenseTitle] = useState(expense.title);
  const expenseAmount = expense.amount;

  const clickHandler = () => {
    setExpenseTitle("test");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expense={expense} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}€</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
