import 'dotenv/config'; 
import express from 'express';
import routes from './routes';
const app = express();

app.use(express.json());

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
