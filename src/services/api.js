import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure this points to your new server
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error" || !error.response) {
      console.error("Network error:", error);
      throw new Error("Network error. Please check your connection.");
    }
    return Promise.reject(error);
  }
);

export const registerUser = (userData) => api.post("/register", userData);
export const loginUser = (credentials) => api.post("/login", credentials);
export const createTicket = (ticketData) => api.post("/tickets", ticketData);

// export const fetchTickets = () => api.get("/tickets");
export const fetchTickets = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/tickets");
    console.log("Response from fetchTickets:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

export const fetchTicketById = (id) => api.get(`/tickets/${id}`);
export const updateTicketStatus = (id, status) =>
  api.put(`/tickets/${id}/status`, { status });

export default api;
