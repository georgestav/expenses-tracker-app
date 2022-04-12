import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = ({ onformSave, formToggle }) => {
  const [enteredInputs, setEnteredInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (event) => {
    setEnteredInputs((oldValues) => {
      return {
        ...oldValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      enteredInputs.date = new Date(enteredInputs.date);
      enteredInputs.amount = +enteredInputs.amount;
      onformSave(enteredInputs);
      setEnteredInputs({ title: "", amount: "", date: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={enteredInputs.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            name="amount"
            min="0"
            step="0.01"
            value={enteredInputs.amount}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="date"
            min="2022-01-04"
            max="2025-01-04"
            value={enteredInputs.date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={formToggle}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
