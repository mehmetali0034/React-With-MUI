import React, { useEffect, useState } from 'react'
import AppBarr from '../components/AppBarr'
import TaskCreate from '../components/TaskCreate'
import TaskItems from '../components/TaskItems'

export default function Home() {
    const [taskValue, setTaskValue] = useState([])
    const takeTaskValue = (employee,title,content) =>{
      const addToTask = [
        ...taskValue,
        {
          id: Math.round(Math.random() * 999999),
          employee:employee,
          title : title,
          content : content,
          
        }
      ]
      setTaskValue(addToTask)
    }
    const taskDelete = (id)=>{
      const filteredTask = taskValue.filter((f)=>f.id!=id)
      setTaskValue(filteredTask)
    }
    const taskUpdate = (taskId, updatedTitle, updatedContent,updateEmployee) => { 
      const updatedTasks = taskValue.map((task) => { 
        if (task.id === taskId) {
          return {
            ...task,
            title: updatedTitle,
            content: updatedContent,
            employee:updateEmployee,
          };
        }
        return task;
      });
      setTaskValue(updatedTasks);
    };
  return (
    <div>
        <AppBarr/>
        <TaskCreate funckTask={takeTaskValue} />
        <TaskItems taskUpdate={taskUpdate} taskDelete={taskDelete}  taskValue={taskValue}/>
    </div>
  )
}
