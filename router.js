const express = require('express');
const router = express.Router();


router.post('/transaction', (req, res) => {
  res.send('Example route');
});

// Export the router instance
module.exports = router;