import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());

// Definir arreglo de números de ejemplo
const numeros = [1, 3, 5, 7, 9, 11, 13, 15];

// Rutas para la búsqueda secuencial
app.get('/busqueda-secuencial/:numero', (req, res) => {
  const numero = Number(req.params.numero);

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return res.send(`El número ${numero} se encuentra en el índice ${i}`);
    }
  }

  res.send(`El número ${numero} no se encuentra en el arreglo`);
});

app.post('/busqueda-secuencial', (req, res) => {
  const numero = req.body.numero;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return res.send(`El número ${numero} se encuentra en el índice ${i}`);
    }
  }

  res.send(`El número ${numero} no se encuentra en el arreglo`);
});

// Rutas para la búsqueda por saltos
app.get('/busqueda-saltos/:numero', (req, res) => {
  const numero = Number(req.params.numero);

  //let salto = Math.floor(Math.sqrt(numeros.length));
  let salto = 2;

  let indice = 0;
  while (numeros[Math.min(indice, numeros.length - 1)] < numero) {
    indice += salto;
  }

  for (let i = Math.max(indice - salto, 0); i < Math.min(indice, numeros.length); i++) {
    if (numeros[i] === numero) {
      return res.send(`El número ${numero} se encuentra en el índice ${i}`);
    }
  }

  res.send(`El número ${numero} no se encuentra en el arreglo`);
});

app.post('/busqueda-saltos', (req, res) => {
  const numero = req.body.numero;

  let salto = Math.floor(Math.sqrt(numeros.length));

  let indice = 0;
  while (numeros[Math.min(indice, numeros.length - 1)] < numero) {
    indice += salto;
  }

  for (let i = Math.max(indice - salto, 0); i < Math.min(indice, numeros.length); i++) {
    if (numeros[i] === numero) {
      return res.send(`El número ${numero} se encuentra en el índice ${i}`);
    }
  }

  res.send(`El número ${numero} no se encuentra en el arreglo`);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});


// Ruta GET para la búsqueda


/*import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());

// Definir arreglo de números de ejemplo
const numeros = [1, 3, 5, 7, 9, 11, 13, 15];

// Ruta GET para la búsqueda secuencial
app.get('/busqueda-secuencial/:numero', (req, res) => {
  const numero = Number(req.params.numero);

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return res.send(`El número ${numero} se encuentra en el índice ${i}`);
    }
  }

  res.send(`El número ${numero} no se encuentra en el arreglo`);
});

// Ruta POST para la búsqueda secuencial
app.post('/busqueda-secuencial', (req, res) => {
  const numero = req.body.numero;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return res.send(`El número ${numero} se encuentra en el índice ${i}`);
    }
  }

  res.send(`El número ${numero} no se encuentra en el arreglo`);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});*/


/*const express = require("express");
import busquedaLineal from "./busquedaLineal";
const port = 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
  <form action="/linearSearch" method="post">
    <input type="text" name="arr" />
    <input type="text" name="target" />
    <button type="submit">linearSearch</button>
  </form>
`);
});

app.post("/linearSearch", (req, res) => {
  const { arr, target } = req.body;
  const formattedArr = arr.split(",").map((item) => parseInt(item));
  const result = linearSearch(formattedArr, +target);
  if (result === -1) {
    res.send(`El número ${target} no se encuentra en el arreglo`);
  } else {
    res.send(`El número ${target} se encuentra en el índice ${result}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});*/











//const busquedaLineal = require('./linear-search');
/*
const arreglo = [3, 5, 2, 8, 1, 9];
const elementoABuscar = 8;

const resultado = busquedaLineal(arreglo, elementoABuscar);

if (resultado === -1) {
  console.log(`El elemento ${elementoABuscar} no está en el arreglo`);
} else {
  console.log(`El elemento ${elementoABuscar} se encuentra en el índice ${resultado} del arreglo`);
}
*/