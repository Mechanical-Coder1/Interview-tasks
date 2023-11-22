import React, { useState } from "react";

const TodoList = () => {
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const [taskIdx, setTaskIdx] = useState(null);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    setData([...data, task]);
    setTask("");
  };

  const toggleCompleted = (index) => {
    if (taskIdx === index) {
      setCompleted(!completed);
    }
    setTaskIdx(index);
  };

  return (
    <div>
      <input
        type="text"
        className="border border-black m-5 p-2"
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-lg"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <hr className="border border-black" />
      <ul>
        {data.map((each, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={taskIdx === index && completed}
              onChange={() => toggleCompleted(index)}
            />
            {each}
            <p>{taskIdx === index && completed ? "completed" : "Not completed"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
