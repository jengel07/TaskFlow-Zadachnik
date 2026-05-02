import React, { useEffect, useState } from "react";
import "./index.scss";

const ProductionProgramPage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [notifications, setNotifications] = useState([
    "Обновлен список задач (12 января)",
    "Добавлена новая задача (10 января)",
    "Задача №5 выполнена (9 января)",
  ]);

  const allTasks = [
    { name: "Плановые осмотры кровли", deadline: "2025-01-15", status: "✔️" },
    { name: "Заделка продухов в цоколях", deadline: "2025-01-20", status: "Ожидает" },
    { name: "Ремонт системы отопления", deadline: "2025-01-22", status: "Ожидает" },
    { name: "Обновление оконных рам", deadline: "2025-01-25", status: "Ожидает" },
    { name: "Установка новых дверей", deadline: "2025-02-10", status: "Ожидает" },
    { name: "Обновление вентиляции", deadline: "2025-02-15", status: "Ожидает" },
    { name: "Проверка электропроводки", deadline: "2025-03-01", status: "Ожидает" },
    { name: "Ремонт полов", deadline: "2025-03-05", status: "Ожидает" },
    { name: "Планирование работ на май", deadline: "2025-04-10", status: "Ожидает" },
    { name: "Ремонт фасада", deadline: "2025-04-20", status: "Ожидает" },
    { name: "Окраска оконных рам", deadline: "2025-05-05", status: "Ожидает" },
    { name: "Обновление сантехники", deadline: "2025-05-15", status: "Ожидает" },
    { name: "Проведение инвентаризации", deadline: "2025-06-10", status: "Ожидает" },
    { name: "Ремонт крыши", deadline: "2025-07-01", status: "Ожидает" },
    { name: "Строительство новых складов", deadline: "2025-08-15", status: "Ожидает" },
    { name: "Окраска стен", deadline: "2025-09-10", status: "Ожидает" },
    { name: "Заключение контрактов", deadline: "2025-10-15", status: "Ожидает" },
    { name: "Планировка территории", deadline: "2025-11-01", status: "Ожидает" },
    { name: "Проведение обследования", deadline: "2025-12-05", status: "Ожидает" },
  ];

  useEffect(() => {
    filterTasks(selectedMonth);
  }, [selectedMonth]);

  const filterTasks = (month) => {
    if (month === "all") {
      setTasks(allTasks);
    } else {
      const filteredTasks = allTasks.filter((task) => {
        const taskMonth = new Date(task.deadline).getMonth() + 1;
        return taskMonth === parseInt(month);
      });
      setTasks(filteredTasks);
    }
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    const task = updatedTasks[index];
    task.status = task.status === "Ожидает" ? "✔️" : "Ожидает";
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.status === "✔️").length;
  const inProgressTasks = tasks.filter((task) => task.status === "Ожидает").length;
  const totalTasks = tasks.length;

  return (
    <div className="production-program">
      <div className="production-program__task-list card">
        <div className="production-program__task-header">
          <h2 className="production-program__title">Список производственных программ</h2>
          <div className="production-program__month-filter">
            <select onChange={handleMonthChange} value={selectedMonth}>
              {/* <option value="all">Все месяцы</option> */}
              <option value="1">Январь</option>
              <option value="2">Февраль</option>
              <option value="3">Март</option>
              <option value="4">Апрель</option>
              <option value="5">Май</option>
              <option value="6">Июнь</option>
              <option value="7">Июль</option>
              <option value="8">Август</option>
              <option value="9">Сентябрь</option>
              <option value="10">Октябрь</option>
              <option value="11">Ноябрь</option>
              <option value="12">Декабрь</option>
            </select>
          </div>
        </div>
        <div className="production-program__task-table-container">
          <table className="production-program__task-table">
            <thead>
              <tr>
                <th>Производственная программа</th>
                <th>Срок</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <tr key={index}>
                    <td className="production-program__task-name">{task.name}</td>
                    <td className="production-program__task-deadline">{task.deadline}</td>
                    <td className={`production-program__task-status production-program__task-status--${task.status === "✔️" ? "completed" : "pending"}`}>
                      <input
                        type="checkbox"
                        checked={task.status === "✔️"}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      {task.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">Задачи не найдены.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="production-program__status card">
        <h2 className="production-program__title">Статус</h2>
        <p className="production-program__status-text production-program__status-text--completed">Выполнено задач: {completedTasks}</p>
        <p className="production-program__status-text production-program__status-text--pending">Ожидает выполнения: {inProgressTasks}</p>
        <p className="production-program__status-text production-program__status-text--total">Общее количество задач: {totalTasks}</p>
      </div>
      <div className="production-program__notifications card">
        <h2 className="production-program__title">История</h2>
        <div className="production-program__status-bar">
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>
                <span className="production-program__icon">🔔</span>
                {notification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductionProgramPage;