import {createContext, useState, useEffect} from 'react'
import {tasks as data} from "../data/data.js"


export const MainContext = createContext()

export function MainContextProvider(props) {

    const [isDark, setIsDark] = useState(false);
    const [isModalWindow, setModalWindow] = useState(false)
    const [tasks, setTasks] = useState([])

    const createTask= (task)=>{
      setTasks([...tasks,{
        title: task.title,
        id: tasks.length,
        description: task.description
      }])
    }
    const deleteTask = (taskId)=>{
      setTasks(tasks.filter(task=> task.id !== taskId))
  }
  
    
    useEffect(()=>{
      setTasks(data)
    }, []);
  

  return (
      <MainContext.Provider value={{
        isDark,
        setIsDark,
        isModalWindow,
        setModalWindow,
        tasks,
        createTask,
        deleteTask
      }}>
        {props.children}
      </MainContext.Provider>
  )
}

