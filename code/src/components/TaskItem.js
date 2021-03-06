import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const TaskItem = (props) => {
  // Instead of props we can use {task}

  const dispatch = useDispatch()
  const taskStatus = props.task.completed

  const handleToggleTask = () => {
    dispatch(tasks.actions.toggleTask(props.task.id))
  }

  const handleRemoveTask = () => {
    dispatch(tasks.actions.removeTask(props.task.id))
  }

  return (
    <TaskWrapper>
      <Task>
        <TaskToggleButton taskStatus={taskStatus} onClick={handleToggleTask} />
        <TaskText taskStatus={taskStatus}>{props.task.text}</TaskText>
        <TaskRemoveButton onClick={handleRemoveTask} aria-label="remove">🗑</TaskRemoveButton>
      </Task>
    </TaskWrapper>
  )

}

const TaskWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
const Task = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid #EBEEEF;
`
const TaskToggleButton = styled.button`
  background: ${props => (props.taskStatus ? "#1E2D2F" : "transparent")};
  color: #1E2D2F;
  border: 2px solid #1E2D2F;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: '';
    display: ${props => (props.taskStatus ? "block" : "none")};
 
    /*Create white L-shape turned 45 degrees*/
    width: 3px;
    height: 6px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`
const TaskText = styled.article`
  font-size: 16px;
  overflow-wrap: break-word;
  word-break: break-word;
  color: ${props => (props.taskStatus ? "#d9d9d9" : "#333")};
`
const TaskRemoveButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`