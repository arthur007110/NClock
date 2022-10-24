import { useEffect, useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import { Task } from "../TasksBar";
import { ClockTimer, ClockView, ButtonsContainer } from "./styles";

// TODO: set Task type in global types file
type ClockProps = {
  selectedTask: Task | null;
}

export default function Clock (props: ClockProps) {
  const { selectedTask } = props;

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(false);

  function stopTimer() {
    // TODO: stop timer at backend
    setIsRunning(false);
  }

  function startTimer() {
    // TODO: start timer at backend
    setIsRunning(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("tick", isRunning);
      if(!isRunning) return;
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <ClockView>
      <Input placeholder={selectedTask ? selectedTask.title : ''} disabled={true}></Input>
      <ClockTimer>
        <h1>{time}</h1>
      </ClockTimer>
      <ButtonsContainer>
        {isRunning ? <Button onClick={stopTimer}>Stop</Button> : <Button onClick={startTimer}>Start</Button>}
        <Button>Start a pause</Button>
      </ButtonsContainer>
    </ClockView>
  );
}