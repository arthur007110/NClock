import { useEffect, useState } from "react";
import { Button } from "../Button";
import Input from "../Input";
import PeriodItem from "./PeriodItem/PeriodItem";
import { ClockTimer, ClockView, ButtonsContainer, MainView, PeriodsContainer, Title } from "./styles";

// TODO: set Task type in global types file
type ClockProps = {
  selectedTask: Task | null;
  updateTask: (task: Task) => void;
}

const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;

export default function Clock (props: ClockProps) {
  const { selectedTask, updateTask } = props;

  const [periods, setPeriods] = useState<Period[]>([]);
  const [startTime, setStartTime] = useState<Date>();
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setPeriods(selectedTask?.periods || []);
  }, [selectedTask]);

  useEffect(() => {
    if(!selectedTask) return;
    updateTask({
      ...selectedTask,
      periods,
    });
  }, [periods]);

  function stopTimer() {
    // TODO: stop timer at backend
    if(!startTime) return;
    setPeriods([
      ...periods,
      {
        start: startTime,
        end: new Date(),
      }
    ]);

    setStartTime(undefined);
    setCurrentTime(0);
    setIsRunning(false);
  }

  function startTimer() {
    // TODO: start timer at backend
    // TODO: show error if has no task selected
    if(!selectedTask) return;
    setStartTime(new Date());
    setIsRunning(true);
  }

  function formatTime(time: number) {
    const hours = Math.floor(time / msInHour);
    const minutes = Math.floor((time % msInHour) / msInMinute);
    const seconds = Math.floor(((time % msInHour) % msInMinute) / msInSecond);
    const hoursString = hours < 10 ? `0${hours}` : hours;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;

    return `${hoursString}:${minutesString}:${secondsString}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isRunning || !startTime) return;
      setCurrentTime(new Date().getTime() - startTime.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <MainView>
      <ClockView>
        {/* // TODO: replace ternal operator */}
        <Input placeholder={selectedTask ? selectedTask.title : ''} disabled={true}></Input>
        <ClockTimer>
          <h1>{formatTime(currentTime)}</h1>
        </ClockTimer>
        <ButtonsContainer>
          {/* // TODO: replace ternal operator */}
          {isRunning ? <Button onClick={stopTimer}>Stop</Button> : <Button onClick={startTimer}>Start</Button>}
          <Button>Start a pause</Button>
        </ButtonsContainer>
      </ClockView>
      <PeriodsContainer>
        <Title>Periods</Title>
        {periods.map((period, index) => {
          return (
            <div key={index}>
              {index === 0 && <PeriodItem period={period} first={true}></PeriodItem>}
              {index !== 0 && <PeriodItem period={period}></PeriodItem>}
            </div>
          );
        })}
        {isRunning && <PeriodItem period={{ start: startTime || new Date(), end: new Date() }} running={true}></PeriodItem>}
      </PeriodsContainer>
    </MainView>
  );
}