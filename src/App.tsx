import { GlobalStyle } from './styles/GlobalStyle'
// import { Greetings } from './components/Greetings'
import { TasksBar } from './components/TasksBar'

export function App() {
  return (
    <>
      <TasksBar />
      <GlobalStyle />
      {/* <Greetings /> */}
    </>
  )
}