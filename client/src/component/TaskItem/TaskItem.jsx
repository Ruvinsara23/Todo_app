/* eslint-disable react/prop-types */

import axios from "axios"


// eslint-disable-next-line react/prop-types
const TaskItem = ({task,fetchTasks}) => {
  const id=task._id;
  console.log(id);

const handelDelete=async(id)=>{
  try{
    const response= await axios.delete('http://localhost:5000/api/delete/${id}')
    if(response.status===200){
      fetchTasks()
      console.log("delete successfull")

    }

  }catch(error){
    console.log("Error in delete",error)
  }
  


}




  return (
    <div className="flex justify-between items-center p-2 border-b">
    <span>{task.title}</span><br></br>
    <p>{task.status}</p>
    <p>{task.date}</p>
    <div className="flex space-x-2">
      
      <button
        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600" onClick={handelDelete}
      >
        Delete
      </button>
    </div>
  </div>
  )
}

export default TaskItem
