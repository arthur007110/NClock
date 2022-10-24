import { Period } from "..";
import { Badge, Item } from "./styles";

type PeriodItemProps = {
  period: Period;
}

const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;

export default function PeriodItem(props: PeriodItemProps) {
  const { period } = props;
  const { start, end } = period;

  // recive time in milliseconds and return a string with format 00h00m00s
  function formatTime(time: number) {
    const hours = Math.floor(time / msInHour);
    const minutes = Math.floor((time % msInHour) / msInMinute);
    const seconds = Math.floor(((time % msInHour) % msInMinute) / msInSecond);

    return `${hours}h${minutes}m${seconds}s`;
  }

  return (
    <Item>
      {start.toLocaleTimeString()} - {end.toLocaleTimeString()}
      <Badge>{formatTime(end.getTime() - start.getTime())}</Badge>
    </Item>
  );
}