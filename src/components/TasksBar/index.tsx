import { SideBar } from "./styles";
import TaskItem from "./TaskItem";

type TaskBarProps = {
  tasks: Task[];
  focusTask: (task: Task) => void;
};

export function TasksBar(props: TaskBarProps) {
  const { focusTask, tasks } = props;

  function selectTask(task: Task) {
    focusTask(task);
  }

  return (  
    <div>
      <SideBar>               
        <ul>
          {tasks.map((task) => (
            <li key={task.title}>
              <TaskItem handleClick={selectTask} task={task}></TaskItem>
            </li>
          ))}
        </ul>
      </SideBar>
    </div>
  );
}
