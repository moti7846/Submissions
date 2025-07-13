import express from 'express';
import {config } from 'dotenv';
import { getCustomersFromFranceCount, getEmployeesReportingToManager1143, getClassicCarsProductCount } from './question_controlers.js';
config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/question1" , getCustomersFromFranceCount)
app.get("/question2" , getEmployeesReportingToManager1143)
app.get("/question3" , getClassicCarsProductCount)

app.use((req, res)=>{
    res.status(404).json({msg: "Route not found."});
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});