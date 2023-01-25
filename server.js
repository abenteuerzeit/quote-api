const express = require('express');
const app = express();
const apiRouter = require('./api');
const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
