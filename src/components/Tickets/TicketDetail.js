// src/components/Tickets/TicketDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTicketById, updateTicketStatus } from "../../services/api";

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const getTicket = async () => {
      try {
        const response = await fetchTicketById(id);
        setTicket(response.data);
      } catch (error) {
        console.error("Fetch ticket detail error", error);
      }
    };
    getTicket();
  }, [id]);

  const handleStatusChange = async (status) => {
    try {
      await updateTicketStatus(id, status);
      setTicket({ ...ticket, status });
      alert("Ticket status updated");
    } catch (error) {
      console.error("Update ticket status error", error);
    }
  };

  if (!ticket) return <div>Loading...</div>;

  return (
    <div>
      <h2>Ticket Detail</h2>
      <p>{ticket.description}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Category: {ticket.category}</p>
      <p>Status: {ticket.status}</p>
      <button onClick={() => handleStatusChange("Resolved")}>
        Mark as Resolved
      </button>
    </div>
  );
};

export default TicketDetail;
