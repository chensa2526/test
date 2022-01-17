const express  = require("express");
const app      = express();
const dotenv   = require("dotenv");
const mongoose = require("mongoose");
const cors     = require("cors");

dotenv.config();

// Connection to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("Connection to db")
);

// Import Routes
const contectroutes = require("./routes/contect");
const userroute = require("./routes/user");

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


// Route Middlewares
app.use("/api/contectform", contectroutes);
app.use("/user",userroute);


app.listen(3000, () => console.log("server up and runnig on port 3000"));