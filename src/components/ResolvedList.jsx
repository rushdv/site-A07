const ResolvedList = ({ resolved }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-5">
      <h2 className="text-xl font-bold mb-3">Resolved Task</h2>

      {resolved.length === 0 && (
        <p className="text-gray-600">No resolved tasks yet.</p>
      )}

      {resolved.map((r) => (
        <div key={r.id} className="bg-[#E0E7FF] shadow p-3 rounded-lg mb-3">
          {r.title}
        </div>
      ))}
    </div>
  );
};

export default ResolvedList;
