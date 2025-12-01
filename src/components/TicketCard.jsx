const TicketCard = ({ ticket, onAdd }) => {
  return (
    <div
      onClick={() => onAdd(ticket)}
      className="bg-white shadow p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="font-bold text-lg">{ticket.title}</h3>
      <p className="text-sm opacity-80">{ticket.description}</p>

      <div className="mt-2 text-sm">
        <span className="font-semibold">#{ticket.id}</span> — 
        <span className="text-red-500 ml-1">{ticket.priority}</span>
      </div>

      <div className="text-sm text-gray-600">{ticket.customer}</div>
      <div className="text-xs text-gray-500 mt-2">{ticket.createdAt}</div>
    </div>
  );
};

export default TicketCard;
