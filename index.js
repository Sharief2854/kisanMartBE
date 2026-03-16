let express=require('express');
let cors = require('cors');
const connectDB = require('./config/db');
let customerRoutes=require('./routes/customerRoutes');
let adminRoutes = require('./routes/adminRoutes');


require("dotenv").config();
let app = express();

connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/customer",customerRoutes);
app.use("/admin", adminRoutes);


app.get("/", (req, res) => {
    res.send("home!!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", ()=>{
    console.log("server is running in prt 5000");
})