import { GlobalStyle } from './styles/GlobalStyle'
import { TasksBar } from './components/TasksBar'
import Inspector from './components/Inspector'
import { MainApp, MainView } from './styles/appStyles'
import Clock from './components/Clock'
import { useState } from 'react'

export function App() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  function focusTask(task: Task) {
    setSelectedTask(task);
  }

  return (
    <MainApp>
      <TasksBar focusTask={focusTask}/>
      <MainView>
        <Clock selectedTask={selectedTask}/>
        <Inspector />
      </MainView>
      <GlobalStyle />
    </MainApp>
  )
}