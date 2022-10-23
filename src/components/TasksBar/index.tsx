import { SideBar } from "./styles";
import TaskItem from "./TaskItem";

const tasks = [
  { title: 'Tarefa 01' },
  { title: 'Reunião com RH' },
  { title: 'Ajudando Fulano' },
  { title: 'Desenvolvendo NClock' },
];

export function TasksBar() {
  return (  
    <div>
      <SideBar>               
        <ul>
          {tasks.map(({ title }) => (
            <li key={title}>
              <TaskItem title={title}></TaskItem>
            </li>
          ))}
        </ul>
      </SideBar>
    </div>
  );
}
