import express from 'express';
import mysql2 from 'mysql2';
import appRoutes from './routes/appRoutes.js';
import sequelize from './config/databases.js';


// Sync the Task model with the database
await sequelize.sync({alter: true});
const app = express();
app.set('view engine', 'ejs');

const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/', appRoutes);

app.listen(PORT, () => {    console.log(`Server is running on http://localhost:${PORT}`);
});
