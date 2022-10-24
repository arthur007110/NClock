import { Task } from "..";
import { Item } from "./styles";

type TaskItemProps = {
  task: Task;
  handleClick: (task: Task) => void;
}

export default function TaskItem(props: TaskItemProps) {
  const{ handleClick, task } = props;

  function openInInspector() {
    handleClick(task);
  }

  return (
    <Item onClick={openInInspector}>
      {task.title}
    </Item>
  );
}