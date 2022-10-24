import { useEffect, useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import { ClockTimer, ClockView, ButtonsContainer } from "./styles";

export default function Clock () {
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
      <Input placeholder="Task name" disabled={true}></Input>
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