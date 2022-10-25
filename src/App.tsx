import { GlobalStyle } from './styles/GlobalStyle'
import { TasksBar } from './components/TasksBar'
import Inspector from './components/Inspector'
import { MainApp, MainView } from './styles/appStyles'
import Clock from './components/Clock'
import { useState } from 'react'

export function App() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Tarefa 01', periods: [{start: new Date(), end: new Date()}] },
    { id: '2', title: 'Reunião com RH' },
    { id: '3', title: 'Ajudando Fulano' },
    { id: '4', title: 'Desenvolvendo NClock' },
  ]);

  function focusTask(task: Task) {
    setSelectedTask(task);
  }

  function updateTask(task: Task) {
    console.log('updateTask', task)
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    const newTasks = [...tasks];
    newTasks[taskIndex] = task;
    setTasks(newTasks);
    console.log('newTasks', newTasks)
  }

  return (
    <MainApp>
      <TasksBar focusTask={focusTask} tasks={tasks}/>
      <MainView>
        <Clock selectedTask={selectedTask} updateTask={updateTask}/>
        <Inspector />
      </MainView>
      <GlobalStyle />
    </MainApp>
  )
}