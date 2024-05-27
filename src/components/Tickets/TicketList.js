import React, { useEffect, useState } from "react";
import { fetchTickets } from "../../services/api";
import { Link } from "react-router-dom";
import "./TicketList.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketsData = await fetchTickets();
        setTickets(ticketsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setError("Error fetching tickets");
        alert("Ticket Created Successfully ! ✨");
        // setShowAd(true);
        // navigate("/tickets/management");
        setTimeout(() => {
          navigate("/");
        }, 2000);
        // navigate("/tickets/new");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="ticket-list-container">
      <h2>Ticket List</h2>
      <ul className="ticket-list">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="ticket-item">
            {ticket.description}
          </li>
        ))}
      </ul>
      <Link to="/create-ticket" className="btn-create-ticket">
        Create New Ticket
      </Link>
    </div>
  );
};

export default TicketList;


// // TicketList.js

// import React, { useEffect, useState } from "react";
// import { fetchTickets } from "../../services/api";

// const TicketList = () => {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ticketsData = await fetchTickets();
//         setTickets(ticketsData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching tickets:", error);
//         setError("Error fetching tickets");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h2>Ticket List</h2>
//       <ul>
//         {tickets.map((ticket) => (
//           <li key={ticket.id}>{ticket.description}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TicketList;

// // import React, { useEffect, useState } from "react";
// // import { fetchTickets } from "../../services/api";

// // const TicketList = () => {
// //   const [tickets, setTickets] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetchTickets();
// //         setTickets(response.data || []);
// //       } catch (error) {
// //         console.error("Error fetching tickets:", error);
// //         setTickets([]); // Initialize with an empty array
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Ticket List</h2>
// //       <ul>
// //         {tickets.length > 0 ? (
// //           tickets.map((ticket) => <li key={ticket.id}>{ticket.description}</li>)
// //         ) : (
// //           <p>No tickets available</p>
// //         )}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TicketList;
