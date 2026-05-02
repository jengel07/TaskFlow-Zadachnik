import "./index.scss";

import completedIconSvg from "../../assets/icons/completed.svg";
import completedIconPng from "../../assets/icons/completed.png";
import inProgressIconPng from "../../assets/icons/in-progress.png";
import deferredIconPng from "../../assets/icons/deffered.png";
import overdueIconPng from "../../assets/icons/overdue.png";

const statusData = {
  "Завершено": { icon: completedIconPng, className: "completed" },
  "В процессе": { icon: inProgressIconPng, className: "in-progress" },
  "Перенесено": { icon: deferredIconPng, className: "deferred" },
  "Невыполнено": { icon: overdueIconPng, className: "overdue" },
};

const StatusPanel = ({ statusCounts, title }) => (
  <section className="status-panel">
    <h2 className="status-panel__title">
      <img src={completedIconSvg} alt="Task Icon" className="status-panel__icon" />
      {title}
    </h2>
    <ul className="status-panel__list">
      {Object.entries(statusCounts).map(([status, count]) => {
        const { icon, className } = statusData[status];
        return (
          <li key={status} className={`status-panel__item status-panel__item--${className}`}>
            <img src={icon} alt={`${status} icon`} className="status-panel__icon" />
            <span>{`${status}: ${count}`}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

export default StatusPanel;
