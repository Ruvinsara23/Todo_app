/* eslint-disable react/prop-types */
import TaskItem from "../TaskItem/TaskItem"

const TaskList = ({taskList}) => {
  return (
    <div className="mt-4 w-full max-w-md">
      {taskList.length === 0 ? (
        <p className="text-gray-500">No tasks added yet!</p>
      ) : (
        taskList.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
          />
        ))
      )}
    </div>

  )
}

export default TaskList
