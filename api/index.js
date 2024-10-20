import express from 'express'
import cors from 'cors'
import { getStates } from './controllers/getStates.js';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.get('/api/getStates',getStates);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))