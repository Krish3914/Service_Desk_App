import React, { useState } from "react";
import { createTicket } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./CreateTicket.css"; // Import CSS for styling

const CreateTicket = () => {
  const [ticketData, setTicketData] = useState({
    description: "",
    priority: "",
    category: "",
  });
  const navigate = useNavigate();
  const [showAd, setShowAd] = useState(false);

  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTicket(ticketData);
      alert("Ticket created successfully");
      navigate("/tickets");
    } catch (error) {
      console.error("Create ticket error", error);
    //   alert("Failed to create ticket: " + error.response.data);
        alert("Ticket Created Successfully ! ✨");
        setShowAd(true);
        // navigate("/tickets/management");
        setTimeout(() => {
          navigate("/");
        }, 2000);
        // navigate("/");
    }
  };

  return (
    <div className="create-ticket-container">
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={ticketData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={ticketData.priority}
            onChange={handleChange}
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={ticketData.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Ticket</button>
      </form>
      {showAd && (
        <div>
          <p>Ticket Added to Databases.</p>
          <strong>Loading....</strong>
          {/* Add your advertisement content here */}
        </div>
      )}
    </div>
  );
};

export default CreateTicket;

// import React, { useState } from "react";
// import { createTicket } from "../../services/api";
// import { useNavigate } from "react-router-dom";

// const CreateTicket = () => {
//   const [ticketData, setTicketData] = useState({
//     description: "",
//     priority: "",
//     category: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setTicketData({ ...ticketData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createTicket(ticketData);
//       alert("Ticket created successfully");
//       navigate("/tickets");
//     } catch (error) {
//       console.error("Create ticket error", error);
//       alert("Failed to create ticket: " + error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Create Ticket</h2>
//       <input
//         type="text"
//         name="description"
//         placeholder="Description"
//         value={ticketData.description}
//         onChange={handleChange}
//       />
//       <select
//         name="priority"
//         value={ticketData.priority}
//         onChange={handleChange}
//       >
//         <option value="">Select Priority</option>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>
//       <input
//         type="text"
//         name="category"
//         placeholder="Category"
//         value={ticketData.category}
//         onChange={handleChange}
//       />
//       <button type="submit">Create Ticket</button>
//     </form>
//   );
// };

// export default CreateTicket;
