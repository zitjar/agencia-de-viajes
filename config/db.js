import Sequelize from "sequelize"
import dotenv from "dotenv"

const db = new Sequelize(process.env.NAME,process.env.USER,process.env.PASS,{
    host:process.env.HOST,
    port:'3306',
    dialect: 'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases:false
});

export default db;