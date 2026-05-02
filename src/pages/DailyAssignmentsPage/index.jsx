import { useState } from "react";
import "./index.scss";

import StatusPanel from "../../components/StatusPanel";
import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList";

const DailyAssignmentsPage = () => {
  const [dailyAssignmentsTasks, setDailyAssignmentsTasks] = useState([
    {
      id: 1,
      title: "Проверить проводку",
      deadline: "2025-01-25 17:00",
      status: "В процессе",
      team: "Бригада А",
      priority: "Высокий",
    },
    {
      id: 2,
      title: "Окрасить стены",
      deadline: "2025-01-30 12:00",
      status: "Перенесено",
      team: "Бригада Б",
      priority: "Средний",
    },
  ]);

  const [newDailyAssignmentsTask, setNewDailyAssignmentsTask] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Высокий",
    team: "Бригада А",
  });

  const addDailyAssignmentsTask = () => {
    setDailyAssignmentsTasks([
      ...dailyAssignmentsTasks,
      {
        id: dailyAssignmentsTasks.length + 1,
        ...newDailyAssignmentsTask,
        status: "Невыполнено",
      },
    ]);
    setNewDailyAssignmentsTask({
      title: "",
      description: "",
      deadline: "",
      priority: "Высокий",
      team: "Бригада А",
    });
  };

  // const statusCounts = dailyAssignmentsTasks.reduce(
  //   (acc, task) => {
  //     acc[task.status] = (acc[task.status] || 0) + 1;
  //     return acc;
  //   },
  //   { "Завершено": 1, "В процессе": 0, "Невыполнено": 0 }
  // );

  const statusCounts = { "Завершено": 1, "В процессе": 0, "Невыполнено": 0 };

  return (
    <div className="daily-assignments-page">
      <main className="daily-assignments-page__content">
        <section className="daily-assignments-page__add-task">
          <h2 className="daily-assignments-page__title">Добавить задачу</h2>
          <AddTaskForm
            onAddTask={addDailyAssignmentsTask}
            taskTitleInputPlaceholder="Название задачи"
            taskDescriptionInputPlaceholder="Описание задачи"
            addTaskButtonText="Добавить задачу"
          />
        </section>

        <section className="daily-assignments-page__task-list">
          <h2 className="daily-assignments-page__title">Список задач</h2>
          <TaskList tasks={dailyAssignmentsTasks} type="dailyAssignments" />
        </section>
      </main>

      <StatusPanel
        statusCounts={statusCounts}
        title="Учет статуса задач"
      />
    </div>
  );
};

export default DailyAssignmentsPage;
