import { Item } from "./styles";

type TaskItemProps = {
  title: string;
}

export default function TaskItem({ title }: TaskItemProps) {
  function openInInspector() {
    window.Main.sendMessage(title);
  }

  return (
    <Item onClick={openInInspector}>
      {title}
    </Item>
  );
}