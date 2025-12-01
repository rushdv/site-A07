import { useState } from "react";
import { ticketsData } from "../data/ticketsData";
import TicketCard from "../components/TicketCard";
import TaskStatus from "../components/TaskStatus";
import ResolvedList from "../components/ResolvedList";
import Banner from "../components/Banner";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainSection = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // When card clicked → add to task status
  const handleAdd = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast.success("Added to Task Status");
    }
  };

  // When complete button clicked
  const handleComplete = (id) => {
    const task = inProgress.find((t) => t.id === id);

    // Add to resolved
    setResolved([...resolved, task]);

    // Remove from in-progress
    setInProgress(inProgress.filter((t) => t.id !== id));

    // Remove from main tickets
    setTickets(tickets.filter((t) => t.id !== id));

    toast.success("Task Completed!");
  };

  return (
    <div className="w-[90%] mx-auto my-10">

      <Banner inProgress={inProgress.length} resolved={resolved.length} />
        <h2 className="text-xl font-bold mt-5 mb-[-2rem]">Customer Tickets</h2>
      <div className="grid grid-cols-3 gap-6 mt-10">

        {/* Left: Ticket List */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} onAdd={handleAdd} />
          ))}
        </div>

        {/* Right: Task Status + Resolved */}
        <div>
          <TaskStatus tasks={inProgress} onComplete={handleComplete} />
          <ResolvedList resolved={resolved} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
