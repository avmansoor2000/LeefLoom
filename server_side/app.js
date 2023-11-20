const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/userRoute')
const adminRoutes = require('./routes/adminRoute')
const connectDB = require('./config/dbConnection')
const bodyParser = require('body-parser');
const cors = require('cors');
const cloudinary = require('cloudinary')
const app = express();
app.use(bodyParser.json());

// Database Connection
connectDB()

// Configure CORS
app.use(cors({
    origin:'http://localhost:5173',
    credentials : true,
}))

//  API routes
app.use('/api/user',userRoutes);
app.use('/api/admin',adminRoutes);

// Start your server
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on port ${port}`));


