const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'Pagina')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pagina', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
