import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_NAME,  
  process.env.DATABASE_USER,      
  process.env.DATABASE_PASSWORD ,
   {
   host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT
});

try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
export default sequelize;