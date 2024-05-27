// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import CreateTicket from "./components/Tickets/CreateTicket";
import TicketList from "./components/Tickets/TicketList";
import TicketDetail from "./components/Tickets/TicketDetail";
import TicketManagement from "./components/Admin/TicketManagement";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tickets/new" element={<CreateTicket />} />
          <Route path="/tickets/:id" element={<TicketDetail />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/admin/tickets" element={<TicketManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


          // <Route
          //   path="/"
          //   component={HomePage}
          //   // element={<h1>Welcome to the Service Desk Application</h1>}
          // />
