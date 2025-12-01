const TicketCard = ({ ticket, onAdd }) => {

  // Status dynamic colors
  const statusBadge = {
    "Open": "bg-green-100 text-green-700",
    "In-Progress": "bg-yellow-100 text-yellow-700"
  }[ticket.status] || "bg-gray-200 text-gray-700";

  // Priority color
  const priorityColor = {
    "HIGH PRIORITY": "text-red-600",
    "MEDIUM PRIORITY": "text-orange-500",
    "LOW PRIORITY": "text-green-600"
  }[ticket.priority] || "text-gray-600";

  return (
    <div
      onClick={() => onAdd(ticket)}
      className="bg-white shadow-sm hover:shadow-lg transition cursor-pointer p-4 rounded-lg border border-gray-100"
    >
      {/* Title + Status Badge */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-[15px] leading-5 w-[80%]">
          {ticket.title}
        </h3>

        <span className={`px-3 py-[3px] rounded-full text-xs font-medium ${statusBadge}`}>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {ticket.description}
      </p>

      {/* ID + Priority */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs font-semibold text-gray-500">#{ticket.id}</span>
        <span className={`text-xs font-bold ${priorityColor}`}>{ticket.priority}</span>
      </div>

      {/* Customer + Date */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{ticket.customer}</span>
        <span>{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
