// src/components/Admin/TicketManagement.js
import React, { useEffect, useState } from "react";
import { fetchTickets, updateTicketStatus } from "../../services/api";

const TicketManagement = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await fetchTickets();
        setTickets(response.data);
      } catch (error) {
        console.error("Fetch tickets error", error);
      }
    };
    getTickets();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateTicketStatus(id, status);
      setTickets(
        tickets.map((ticket) =>
          ticket.id === id ? { ...ticket, status } : ticket
        )
      );
      alert("Ticket status updated");
    } catch (error) {
      console.error("Update ticket status error", error);
    }
  };

  return (
    <div>
      <h2>Ticket Management</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <button
              onClick={() => handleStatusChange(ticket.id, "In Progress")}
            >
              Mark as In Progress
            </button>
            <button onClick={() => handleStatusChange(ticket.id, "Resolved")}>
              Mark as Resolved
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketManagement;
