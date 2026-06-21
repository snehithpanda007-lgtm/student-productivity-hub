export default function TaskCard({
  task,
  toggleTask,
  deleteTask,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3
          className={`font-semibold text-lg ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>

        <span className="text-sm text-blue-600">
          {task.category}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          ✓
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}