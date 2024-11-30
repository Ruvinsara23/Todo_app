import axios from "axios";
import { useState } from "react"



// eslint-disable-next-line react/prop-types
const AddTaskFeild = ({fetchTasks}) => {
    const [task,setTask] = useState('');


    const handleAddTask=async(e)=>{
      e.preventDefault();
        if (task.trim()) {
          try{
            const response = await axios.post('http://localhost:5000/api/add',{
            title:task})
            console.log(response.data)

            if(response.status ===201){
              console.log("Data sent successfully");
              setTask("");
              fetchTasks();

            }
               
          }catch(error){
            console.log("Error sending data",error)
          }
          }
    }

  return (
    <div className="mt-10 flex items-center space-x-4">
    <input  
      onChange={(e) => setTask(e.target.value)}
      className="h-11 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      type="text"
      value={task}
      placeholder="Add your task here"
    />
    
    <button onClick={handleAddTask} className="h-11 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
      Add Task
    </button>
  </div>
  )
}

export default AddTaskFeild
