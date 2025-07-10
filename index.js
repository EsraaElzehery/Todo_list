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


// export const db = mysql2.createConnection({
//     host: 'localhost',
//     user:'root',
//     password: '123456789',
//     database: 'todo'    
// });


// db.connect((err)=>{
//     if(err){
//         console.log('failed', err.message)
//         return;
//     }
//     console.log('donnnne')
// })

app.use('/', appRoutes);

app.listen(PORT, () => {    console.log(`Server is running on http://localhost:${PORT}`);
});