import { GlobalStyle } from './styles/GlobalStyle'
import { TasksBar } from './components/TasksBar'
import Inspector from './components/Inspector'
import { MainApp, MainView } from './styles/appStyles'
import Clock from './components/Clock'
import { useState } from 'react'

export function App() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [tasks, setTasks] = useState<Task[]>([
    { title: 'Tarefa 01', periods: [{start: new Date(), end: new Date()}] },
    { title: 'Reunião com RH' },
    { title: 'Ajudando Fulano' },
    { title: 'Desenvolvendo NClock' },
  ]);

  function focusTask(task: Task) {
    setSelectedTask(task);
  }

  return (
    <MainApp>
      <TasksBar focusTask={focusTask} tasks={tasks}/>
      <MainView>
        <Clock selectedTask={selectedTask}/>
        <Inspector />
      </MainView>
      <GlobalStyle />
    </MainApp>
  )
}