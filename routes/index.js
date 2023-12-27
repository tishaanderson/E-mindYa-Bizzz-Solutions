//importing packagees and apiRoutes
const router = require('express').Router();
const apiRoutes = require('./api');

//building route to apis
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;