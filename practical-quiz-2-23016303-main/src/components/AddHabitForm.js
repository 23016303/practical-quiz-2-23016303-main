import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName) {
      alert("Please enter a habit name");
      return;
    }
    onAddHabit(habitName);
    setHabitName("");
    // TODO: write code to handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter habit name"
      />
      <button type="submit">Add Habit</button>
    </form>
    //TODO: add a form to add a new habit
  );
}
