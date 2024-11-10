import './index.css'
import './App.css'
// import AddTaskFeild from './component/addTaskFeild/addTaskFeild'
import { useState,useEffect } from 'react';
import axios from 'axios';
import TaskList from './component/TaskList/TaskList';

function App() {
  // const [tasks, setTasks] = useState([]);
  const [taskList,setTaskList] = useState ([])

  // const addTask = (task) => {
  //   setTasks([...tasks, task]);
  // };

  const fetchTasks = async()=>{
    try {
      const response = await axios.get('http://localhost:5000/api');
      setTaskList(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }
  // const deleteTask = (index) => {
  //   const newTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(newTasks);
  // };
  useEffect(() => {
    fetchTasks();
  }, []);
  
  return (
  
     <div className="mt-10 flex flex-col items-center space-x-4">
     
  
     <h1>Welcome Todo App </h1>
     <p >Add your todo list here and manage your taskes</p>
     
     <TaskList taskList={taskList}/>
     
     </div>
  
  )
}

export default App
