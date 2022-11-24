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

  const [isRunning, setIsRunning] = useState(false);
  const [runningTask, setRunningTask] = useState<Task | null>(null);
  const [currentPeriod, setCurrentPeriod] = useState<Period>();
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setPeriods(selectedTask?.periods || []);
  }, [selectedTask]);

  useEffect(() => {
    if(!runningTask) return;
    // console.log('runningTask snapshot', runningTask);
    updateTask({
      ...runningTask,
    });

    if(runningTask.id === selectedTask?.id) {

      setPeriods(
        (runningTask.periods ?? []).filter(period => period.finished) 
      );
    }
  }, [runningTask]);

  useEffect(() => {
    console.log('periods', periods);
  }, [periods]);

  useEffect(() => {
    if(!currentPeriod || !runningTask) return;
  
    const runningTaskPeriods = runningTask.periods ? runningTask.periods : [];
    // console.log('periods before', runningTaskPeriods);
    const newPeriods = runningTaskPeriods.map(period => {
      if(currentPeriod.finished && !period.finished) return currentPeriod;
      return period;
    });
    if(isRunning) newPeriods.push(currentPeriod);
    // console.log('periods after', newPeriods);

    setRunningTask({
      ...runningTask,
      periods: newPeriods,
    });
  }, [currentPeriod]);

  function stopTimer() {
    // TODO: update tasks at backend
    if(!currentPeriod || !runningTask) return;

    setCurrentPeriod({
      ...currentPeriod,
      end: new Date(),
      finished: true,
    });

    setCurrentTime(0);
    setIsRunning(false);
  }

  function startTimer() {
    // TODO: update tasks at backend
    // TODO: show error if has no task selected
    if(!selectedTask) return;
    setCurrentPeriod({
      start: new Date(),
      finished: false,
    });
    console.log('selectedTask', selectedTask);
    setRunningTask(selectedTask);
    setIsRunning(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isRunning || !currentPeriod) return;
      setCurrentTime(new Date().getTime() - currentPeriod.start.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);
  
  function formatTime(time: number) {
    const hours = Math.floor(time / msInHour);
    const minutes = Math.floor((time % msInHour) / msInMinute);
    const seconds = Math.floor(((time % msInHour) % msInMinute) / msInSecond);
    const hoursString = hours < 10 ? `0${hours}` : hours;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;

    return `${hoursString}:${minutesString}:${secondsString}`;
  }

  function getRunningPeriod() {
    return {
      start: currentPeriod?.start || new Date(),
      end: new Date(),
      finished: false
    };
  }

  function getFinishedPeriods(){
    return periods.filter(period => period.finished);
  }

  return (
    <MainView>
      <ClockView>
        {/* // TODO: replace ternal operator */}
        <Input placeholder={selectedTask ? `Selected Task<${selectedTask.title}>` : 'Selected Task'} bolder={true} disabled={true}></Input>
        <Input placeholder={runningTask ? `Running Task<${runningTask.title}>` : 'Running Task'} bolder={true} disabled={true}></Input>
        <ClockTimer>
          <h1>{formatTime(currentTime)}</h1>
        </ClockTimer>
        <ButtonsContainer>
          {/* // TODO: replace ternal operator */}
          {isRunning ? <Button onClick={stopTimer}>Stop</Button> : <Button onClick={startTimer}>Start</Button>}
          <Button color='secondary'>Start a pause</Button>
        </ButtonsContainer>
      </ClockView>
      <PeriodsContainer>
        <Title>Periods</Title>
        {getFinishedPeriods().map((period, index) => {
          return (
            <div key={index}>
              {index === 0 && <PeriodItem period={period} first={true}></PeriodItem>}
              {index !== 0 && <PeriodItem period={period}></PeriodItem>}
            </div>
          );
        })}
        {isRunning && selectedTask?.id === runningTask?.id &&
          <PeriodItem
            first={getFinishedPeriods().length === 0}
            period={getRunningPeriod()}
            running={true}
          ></PeriodItem>
        }
      </PeriodsContainer>
    </MainView>
  );
}