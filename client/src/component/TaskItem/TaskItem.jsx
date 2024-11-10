/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const TaskItem = ({task}) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
    <span>{task.title}</span>
    <div className="flex space-x-2">
      <button
    
        className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
    
        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
  )
}

export default TaskItem
