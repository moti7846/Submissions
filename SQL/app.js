import express from 'express';
import {config } from 'dotenv';
import { question1, question2, question3 } from './question_db.js';
config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/question1" , question1)
app.use("/question2" , question2)
app.use("/question3" , question3)

app.use((req, res)=>{
    res.status(404).json({msg: "Route not found."});
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});