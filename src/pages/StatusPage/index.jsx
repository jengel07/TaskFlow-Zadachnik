import "./index.scss";

// Импорты всех иконок
import completedIconPng from "../../assets/icons/completed.png";
import inProgressIcon from "../../assets/icons/in-progress.png"; 
import deferredIcon from "../../assets/icons/deffered.png";
import overdueIcon from "../../assets/icons/overdue.png";

const StatusPage = () => {
  const statusCounts = { "Выполнено": 1, "Поступило": 0, "Перенесено": 0, "Невыполнено": 0 };

  return (
    <div className="status-page">
      <section className="status-panel">
        <h2>Производственная программа</h2>
        <ul className="panel-list">
          <li className="task-item status-поступило">
            <img src={inProgressIcon} alt="status icon" className="status-icon" />
            <span>Поступило: {statusCounts["Поступило"]}</span>
          </li>
          <li className="task-item status-completed">
            <img src={completedIconPng} alt="status icon" className="status-icon" />
            <span>Выполнено: {statusCounts["Выполнено"]}</span>
          </li>
          <li className="task-item status-deferred">
            <img src={deferredIcon} alt="status icon" className="status-icon" />
            <span>Перенесено: {statusCounts["Перенесено"]}</span>
          </li>
        </ul>
      </section>

      <section className="status-panel">
        <h2>Заявки за месяц</h2>
        <ul className="panel-list">
          <li className="task-item status-поступило">
            <img src={inProgressIcon} alt="status icon" className="status-icon" />
            <span>Поступило: {statusCounts["Поступило"]}</span>
          </li>
          <li className="task-item status-completed">
            <img src={completedIconPng} alt="status icon" className="status-icon" />
            <span>Выполнено: {statusCounts["Выполнено"]}</span>
          </li>
          <li className="task-item status-deferred">
            <img src={deferredIcon} alt="status icon" className="status-icon" />
            <span>Перенесено: {statusCounts["Перенесено"]}</span>
          </li>
        </ul>
      </section>

      <section className="status-panel">
        <h2>Ежедневные поручения за месяц</h2>
        <ul className="panel-list">
          <li className="task-item status-поступило">
            <img src={inProgressIcon} alt="status icon" className="status-icon" />
            <span>Поступило: {statusCounts["Поступило"]}</span>
          </li>
          <li className="task-item status-completed">
            <img src={completedIconPng} alt="status icon" className="status-icon" />
            <span>Выполнено: {statusCounts["Выполнено"]}</span>
          </li>
          <li className="task-item status-deferred">
            <img src={deferredIcon} alt="status icon" className="status-icon" />
            <span>Перенесено: {statusCounts["Перенесено"]}</span>
          </li>
        </ul>
      </section>

      <section className="status-panel">
        <h2>Статистика за месяц</h2>
        <div className="filter-container">
          <label htmlFor="month-select" className="filter-label">Выберите месяц:</label>
          <select id="month-select" className="filter-select">
            <option value="all">Все</option>
            <option value="january">Январь</option>
            <option value="february">Февраль</option>
            <option value="march">Март</option>
            {/* Добавьте остальные месяцы */}
          </select>
        </div>
        <div className="filter-container">
          <label htmlFor="month-select" className="filter-label">Городок:</label>
          <select id="month-select" className="filter-select">
            <option value="all">Все</option>
            <option value="january">1</option>
            <option value="february">2</option>
            <option value="march">3</option>
            {/* Добавьте остальные городки */}
          </select>
        </div>
        <div className="filter-container">
          <label htmlFor="month-select" className="filter-label">Тип задачи:</label>
          <select id="month-select" className="filter-select">
            <option value="all">Производственная программа</option>
            <option value="january">Заявки</option>
            <option value="february">Ежедневные поручения</option>
          </select>
        </div>
        <ul className="panel-list">
          <li className="task-item status-поступило">
            <img src={inProgressIcon} alt="status icon" className="status-icon" />
            <span>Поступило: {statusCounts["Поступило"]}</span>
          </li>
          <li className="task-item status-completed">
            <img src={completedIconPng} alt="status icon" className="status-icon" />
            <span>Выполнено: {statusCounts["Выполнено"]}</span>
          </li>
          <li className="task-item status-deferred">
            <img src={deferredIcon} alt="status icon" className="status-icon" />
            <span>Перенесено: {statusCounts["Перенесено"]}</span>
          </li>
          <li className="task-item status-overdue">
            <img src={overdueIcon} alt="status icon" className="status-icon" />
            <span>Невыполнено: {statusCounts["Невыполнено"]}</span>
          </li>
        </ul>
      </section>

      <section className="status-panel">
        <h2>Статистика за год</h2>
        <div className="filter-container">
          <label htmlFor="year-select" className="filter-label">Выберите год:</label>
          <select id="year-select" className="filter-select">
            <option value="current">Текущий год</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            {/* Добавьте другие года */}
          </select>
        </div>
        <div className="filter-container">
          <label htmlFor="month-select" className="filter-label">Городок:</label>
          <select id="month-select" className="filter-select">
            <option value="all">Все</option>
            <option value="january">1</option>
            <option value="february">2</option>
            <option value="march">3</option>
            {/* Добавьте остальные городки */}
          </select>
        </div>
        <div className="filter-container">
          <label htmlFor="month-select" className="filter-label">Тип задачи:</label>
          <select id="month-select" className="filter-select">
            <option value="all">Производственная программа</option>
            <option value="january">Заявки</option>
            <option value="february">Ежедневные поручения</option>
          </select>
        </div>

        <ul className="panel-list">
          <li className="task-item status-поступило">
            <img src={inProgressIcon} alt="status icon" className="status-icon" />
            <span>Поступило: {statusCounts["Поступило"]}</span>
          </li>
          <li className="task-item status-completed">
            <img src={completedIconPng} alt="status icon" className="status-icon" />
            <span>Выполнено: {statusCounts["Выполнено"]}</span>
          </li>
          <li className="task-item status-deferred">
            <img src={deferredIcon} alt="status icon" className="status-icon" />
            <span>Перенесено: {statusCounts["Перенесено"]}</span>
          </li>
          <li className="task-item status-overdue">
            <img src={overdueIcon} alt="status icon" className="status-icon" />
            <span>Невыполнено: {statusCounts["Невыполнено"]}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StatusPage;
