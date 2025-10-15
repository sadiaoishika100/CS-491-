import { useState } from 'react'

const ToDoList = () =>{
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const addTask = () =>{
    if (task.trim() !== ''){
        setTasks([...tasks, task])
        setTask('')
    }
    }
    const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
    }
    return (
        <div style={{ maxWidth: '400px' }}>
          <h4>My To-Do List</h4>
          <div>
            <input
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>
              +
            </button>
          </div>
           <ul>
            {tasks.map((t, index) => (
              <li key={index}>
                <span>{t}</span>
                <button onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
  )
}
export default ToDoList