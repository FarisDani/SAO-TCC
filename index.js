const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./admin_router"); 
const donasiRoutes = require("./donasi_router");
const sedekahRoutes = require("./sedekah_router"); 
const wakafRoutes = require("./wakaf_router"); 


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/admins", adminRoutes);
app.use("/donasis", donasiRoutes);
app.use("/sedekahs", sedekahRoutes);
app.use("/wakafs", wakafRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
