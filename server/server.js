const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's origin
  })
);

app.use(express.json());
app.use(cors());

// app.use(express.json());

let users = []; // Temporarily store users here for demonstration
let tickets = []; // Temporarily store tickets here for demonstration

// Register endpoint
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { email, password: hashedPassword };
  users.push(user);
  res.status(201).send("User registered successfully");
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).send("User logged in successfully");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Create ticket endpoint
app.post("/api/tickets", (req, res) => {
  const { description, priority, category } = req.body;
  const ticket = {
    id: tickets.length + 1,
    description,
    priority,
    category,
    status: "Open",
  };
  tickets.push(ticket);
  res.status(201).json(ticket);
    res.status(201).send("Ticket created successfully");
});
// app.post("/api/tickets", (req, res) => {
//   // Your ticket creation logic here
//   res.status(201).send("Ticket created successfully");
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
