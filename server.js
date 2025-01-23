const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbconnect');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cors()); 

dbConnect();

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
