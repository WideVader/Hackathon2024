//create express server
import express from 'express';
const app = express();
const port = 3000;
import router from './router.js';


app.use(express.json())
app.use(router)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
