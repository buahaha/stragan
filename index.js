const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Stragan!');
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
