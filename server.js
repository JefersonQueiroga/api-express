const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobs');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
