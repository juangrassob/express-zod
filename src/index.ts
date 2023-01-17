import express from 'express';
import authRouter from './routes/auth.routes';
import productRoutes from './routes/products.router';

const app = express();
app.use(express.json());

app.use(authRouter);
app.use(productRoutes);

app.listen(3000);
console.log('http://127.0.0.1:3000');
