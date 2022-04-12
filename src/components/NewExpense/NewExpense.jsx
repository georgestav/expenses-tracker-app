import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = ({ onSaveExpense }) => {
  // useState to control if the form displays or not
  const [toggleNewExpense, setToggleNewExpense] = useState(true);
  const formToggle = () => {
    setToggleNewExpense((prevState) => {
      return !prevState;
    });
  };

  const formSaveHandler = (enteredInputs) => {
    try {
      const expenseData = {
        ...enteredInputs,
        id: Math.random().toString(),
      };
      onSaveExpense(expenseData);
      formToggle(); // if expense is added, trigger form close
    } catch (error) {
      console.error(error);
    }
  };

  //set the default elemet to the button contained in the AddNewExpense component
  let displayElement = <button onClick={formToggle}>Add New Expense</button>;
  //if the state controlled by the button in AddNewExpense is set to false
  //display the ExpenseForm
  if (!toggleNewExpense) {
    displayElement = (
      <ExpenseForm onformSave={formSaveHandler} formToggle={formToggle} />
    );
  }

  // returning JSX element
  return <div className="new-expense">{displayElement}</div>;
};

export default NewExpense;
