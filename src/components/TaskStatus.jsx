const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-3">Task Status</h2>

      {tasks.length === 0 && (
        <p className="text-gray-600">No tasks in progress yet.</p>
      )}

      {tasks.map((t) => (
        <div key={t.id} className="bg-white shadow p-3 rounded-lg mb-3 flex justify-between items-center">
          <div>{t.title}</div>

          <button
            onClick={() => onComplete(t.id)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
