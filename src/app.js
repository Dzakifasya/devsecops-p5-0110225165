const express = require('express');
const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ status: 'Online', message: 'DevSecOps P5 Task Manager API Active' });
});

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`);
  });
}

module.exports = app;