import "./ExpenseDate.scss";
const ExpenseDate = ({ expense }) => {
  const month = expense.date.toLocaleString("en-US", { month: "long" }),
    day = expense.date.toLocaleString("en-US", { day: "2-digit" }),
    year = expense.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
};

export default ExpenseDate;
