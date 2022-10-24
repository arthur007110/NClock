import { SideBar } from "./styles";
import TaskItem from "./TaskItem";

export type Task = {
  title: string;
}

type TaskBarProps = {
  // tasks: Task[];
  focusTask: (task: Task) => void;
}

// TODO: set Task type in global types file
// TODO: move tasks to global state
const tasks: Task[] = [
  { title: 'Tarefa 01' },
  { title: 'Reunião com RH' },
  { title: 'Ajudando Fulano' },
  { title: 'Desenvolvendo NClock' },
];

export function TasksBar(props: TaskBarProps) {
  const { focusTask } = props;

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
