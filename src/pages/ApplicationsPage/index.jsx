import { useState } from "react";
import "./index.scss";

import StatusPanel from "../../components/StatusPanel";
import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList";

const ApplicationsPage = () => {
  const [applicationsTasks, setApplicationsTasks] = useState([
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

  const [newApplicationsTask, setNewApplicationsTask] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Высокий",
    team: "Бригада А",
  });

  const addApplicationsTask = () => {
    setApplicationsTasks([
      ...applicationsTasks,
      {
        id: applicationsTasks.length + 1,
        ...newApplicationsTask,
        status: "Невыполнено",
      },
    ]);
    setNewApplicationsTask({
      title: "",
      description: "",
      deadline: "",
      priority: "Высокий",
      team: "Бригада А",
    });
  };

  const statusCounts = applicationsTasks.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    },
    { "Завершено": 1, "В процессе": 0, "Перенесено": 0 }
  );

  return (
    <div className="applications-page">
      <main className="applications-page__content">
        <section className="applications-page__add-task">
          <h2 className="applications-page__title">Добавить заявку</h2>
          <AddTaskForm
            onAddTask={addApplicationsTask}
            taskTitleInputPlaceholder="Название заявки"
            taskDescriptionInputPlaceholder="Описание заявки"
            addTaskButtonText="Добавить заявку"
          />
        </section>

        <section className="applications-page__task-list">
          <h2 className="applications-page__title">Список заявок</h2>
          <TaskList tasks={applicationsTasks} type="applications" />
        </section>
      </main>

      <StatusPanel
        statusCounts={statusCounts}
        title="Учет статуса заявок"
      />
    </div>
  );
};

export default ApplicationsPage;
