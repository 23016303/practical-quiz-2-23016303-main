import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habit, onToggleHabit, onDeleteHabit}) {
    return (
        <li key={habit.id}>
            <div>
                <input type="checkbox" checked={habit.completed} onChange={() => onToggleHabit(habit.id)} />
                <span
          style={{
            textDecoration: habit.completed ? "line-through" : "none", // Strike-through if completed
          }}>{habit.name}</span>
        <button onClick={() => onDeleteHabit(habit.id)}>❌</button>
        </div>
        </li>
    );
}
