import { Item } from "./styles";

type TaskItemProps = {
  task: Task;
  handleClick: (task: Task) => void;
}

export default function TaskItem(props: TaskItemProps) {
  const{ handleClick, task } = props;

  function select() {
    handleClick(task);
  }

  return (
    <Item onClick={select}>
      {task.title}
    </Item>
  );
}