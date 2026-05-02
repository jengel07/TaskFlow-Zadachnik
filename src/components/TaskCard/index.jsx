import './index.scss';

const TaskCard = ({ task, type }) => (
  <div className="task-card">
    <h3 className="task-card__title">{task.title}</h3>
    <p className="task-card__text">
      <strong>Срок:</strong> {task.deadline}
    </p>
    <p className="task-card__text">
      <strong>Статус:</strong> {task.status}
    </p>
    <p className="task-card__text">
      <strong>Бригада:</strong> {task.team}
    </p>
    <p className="task-card__text">
      <strong>Приоритет:</strong> {task.priority}
    </p>
    <div className="task-card__actions">
      <button className="task-card__button task-card__button--in-progress">В процессе</button>
      <button className="task-card__button task-card__button--completed">Завершено</button>
      {
        type === 'applications' ? (
          <button className="task-card__button task-card__button--deferred" style={{
            backgroundColor: "#ff9800"
          }}>Перенесено</button>
        ) : <button className="task-card__button task-card__button--overdue" style={{
          backgroundColor: "#f44336"
        }}>Невыполнено</button>
      }
      {/* <button className="task-card__button task-card__button--deferred">Перенесено</button> */}
      {/* <button className="task-card__button task-card__button--overdue">Невыполнено</button> */}
    </div>
  </div>
);

export default TaskCard;
