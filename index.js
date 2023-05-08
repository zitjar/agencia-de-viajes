// const express = require('express');
import express from "express"
import router from "./routes/index.js";
import db from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()

console.log(process.env.DB_HOST)

const app = express();

//Conectar la base de datos
db.authenticate()
    .then(()=>console.log("Base de datos conectada"))
    .catch(error=>console.log(`Error = ${error}`))


//Definir puerto 
const port = process.env.PORT || 4000;

//habilitar pug
app.set('view engine','pug')

//Obtener el año actual
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear(); 
    res.locals.nombreSitio = "Agencia de viajes"
    return next();
})

//Agregar body parser para leer datos del formulario

app.use(express.urlencoded({extended:true}));

//Definir carpeta public
app.use(express.static('public'))

//Agregar router
app.use('/',router);

app.listen(port,()=>{
    console.log(`El Servidor se esta ejecutando en ${port}`);
});