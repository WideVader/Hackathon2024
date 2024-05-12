import express from 'express';
const router = express.Router()
import { addData } from "./db/realTimeDatabase.js";
import { validateRequest } from './services/detection_handler/index.js';

router.get('/', (req, res) => {
  res.send('Hello World!').status(200);
})

router.post('/transaction', (req, res) => {
  try {
    validateRequest(req.body.transaction)
    addData("transactions", req.body.transaction)
    res.send({fraud: false }).status(200);
  } catch (error) {
    res.send({fraud:true, msg: error.message}).status(200);
    
  }
});

// Export the router instance
export default router;