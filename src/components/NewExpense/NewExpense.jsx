import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = ({ onSaveExpense }) => {
  const formSaveHandler = (enteredInputs) => {
    try {
      const expenseData = {
        ...enteredInputs,
        id: Math.random().toString(),
      };
      onSaveExpense(expenseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-expense">
      <ExpenseForm onformSave={formSaveHandler} />
    </div>
  );
};

export default NewExpense;
