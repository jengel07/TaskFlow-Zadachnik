import "./index.scss";

import { useState } from "react";

const AddTaskForm = ({
  onAddTask,
  taskTitleInputPlaceholder,
  taskDescriptionInputPlaceholder,
  addTaskButtonText,
}) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Без приоритета",
    team: "Бригада А",
  });

  const handleAddTask = () => {
    onAddTask(task);
    setTask({
      title: "",
      description: "",
      deadline: "",
      priority: "Высокий",
      team: "Бригада А",
    });
  };

  return (
    <div className="add-task__form">
      <input
        type="text"
        className="add-task__input"
        placeholder={taskTitleInputPlaceholder}
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        className="add-task__textarea"
        placeholder={taskDescriptionInputPlaceholder}
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="datetime-local"
        className="add-task__input"
        value={task.deadline}
        onChange={(e) => setTask({ ...task, deadline: e.target.value })}
      />
      <select
        className="add-task__select"
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="Без приоритета">Без приоритета</option>
        <option value="Высокий">Высокий</option>
        {/* <option value="Средний">Средний</option>
        <option value="Низкий">Низкий</option> */}
      </select>
      <select
        className="add-task__select"
        value={task.team}
        onChange={(e) => setTask({ ...task, team: e.target.value })}
      >
        <option value="Бригада А">Бригада А</option>
        <option value="Бригада Б">Бригада Б</option>
        <option value="Бригада В">Бригада В</option>
      </select>
      <button className="add-task__button" onClick={handleAddTask}>
        {addTaskButtonText}
      </button>
    </div>
  );
};

export default AddTaskForm;
