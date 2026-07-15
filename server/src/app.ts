import express from 'express';
import { Router } from 'express';


const app =express();
const router = Router();

app.use(express.json());
app.use(router)

app.get("/",(req, res)=>{
    res.json({
        message:'securevault api is running',
    });
});

export default app;
