const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB=require('./Database/Database.js');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.options("*",cors);


// Routes
const AIroute = require("./Routes/AIroute.js");
const User = require("./Routes/Userroute.js");
const WisListroute = require("./Routes/WishListroute.js")


app.use("/api/AI",AIroute);
app.use("/api/User",User);
app.use('/api/Wishlist',WisListroute);


const PORT = 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
