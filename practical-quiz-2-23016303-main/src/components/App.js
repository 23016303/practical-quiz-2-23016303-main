import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      completed: false,
    };
    setHabits([...habits, newHabit]);
    // TODO: write code to add a new habit here
  };

  const handleToggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
    // TODO: write code to toggle a habit's status
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
    // TODO: write code to delete a habit
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={handleAddHabit} />
      <HabitList
        habits={habits}
        onToggleHabit={handleToggleHabit}
        onDeleteHabit={handleDeleteHabit}
      />

    </div>
  );
}

export default App;
