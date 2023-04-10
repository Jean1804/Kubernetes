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
