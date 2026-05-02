import TaskCard from "../TaskCard";

const TaskList = ({ tasks, type }) => (
  <div className="task-list">
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} type={type} />
    ))}
  </div>
);

export default TaskList;
