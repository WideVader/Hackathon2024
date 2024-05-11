const express = require('express');
const router = express.Router()
import { addData } from "./db/realTimeDatabase.js";
import { validateRequest } from './services/detection_handler';

router.post('/transaction', (req, res) => {
  let isValid = validateRequest(validateRequest)
  req.body.transction.fraud = isValid
  addData("transactions", req.body.transction)
  res.send(isValid);
});

// Export the router instance
module.exports = router;