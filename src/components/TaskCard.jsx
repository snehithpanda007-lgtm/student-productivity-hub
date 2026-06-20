function TaskCard({
  task,
  onDelete,
  onToggle,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.title}
      </h3>

      <p>Category: {task.category}</p>

      <p>
        Status:
        {task.completed
          ? " ✅ Completed"
          : " ⏳ Pending"}
      </p>

      <button
        onClick={() => onToggle(task.id)}
      >
        Toggle
      </button>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          marginLeft: "10px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;