const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const roleRoutes = require("./routes/roleRoutes");
const permissionRoutes = require("./routes/permissionRoutes");
const rolePermissionRoutes = require("./routes/rolepermissionroutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use("/api/roles", roleRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/rolepermissions", rolePermissionRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, console.log("Server is started on port 3000"));