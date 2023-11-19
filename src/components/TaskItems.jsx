import { Box, Typography } from '@mui/material'
import React from 'react'
import TaskItem from './TaskItem'

export default function TaskItems(props) {
  const {taskValue,taskDelete,taskUpdate} = props
  return (
    <div className='taskItems-div'>
      {taskValue.map((m,index)=>(
        <TaskItem  key={index} taskUpdate={taskUpdate}taskDelete={taskDelete} employee={m.employee} title={m.title} id={m.id} content={m.content}/>
      ))}
    </div>
  )
}
