
import {DataTypes} from 'sequelize';
import sequelize from '../config/databases.js';

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false
    
    },
    description: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false 
    },
    createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
    },
   
  },
 {
        tableName: 'tasks',
        timestamps: false
    }
)

  export default Task;