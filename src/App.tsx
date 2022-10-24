import { GlobalStyle } from './styles/GlobalStyle'
// import { Greetings } from './components/Greetings'
import { TasksBar } from './components/TasksBar'
import Inspector from './components/Inspector'
import { MainApp, MainView } from './styles/appStyles'
import Clock from './components/Clock'

export function App() {
  return (
    <MainApp>
      <TasksBar />
      <MainView>
        <Clock />
        <Inspector />
      </MainView>
      <GlobalStyle />
      {/* <Greetings /> */}
    </MainApp>
  )
}