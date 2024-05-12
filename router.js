import express from 'express';
const router = express.Router()
import { addData } from "./db/realTimeDatabase.js";
import { validateRequest } from './services/detection_handler/index.js';

router.post('/transaction', (req, res) => {
  let isValid = validateRequest(validateRequest)
  req.body.transction.fraud = isValid
  addData("transactions", req.body.transction)
  res.send(isValid);
});

// Export the router instance
export default router;