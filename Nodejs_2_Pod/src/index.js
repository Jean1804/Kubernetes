const http = require('http');

// Array desordenado de elementos
const arr = [5, 3, 9, 7, 1, 11];

// Función de búsqueda binaria
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// Función de ordenamiento por el método de burbuja
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiar elementos
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Crear servidor HTTP
const server = http.createServer((req, res) => {
  if (req.url.startsWith('/search')) {
    // Obtener los parámetros de consulta
    const query = new URLSearchParams(req.url.split('?')[1]);
    const value = Number(query.get('value'));
    if (isNaN(value)) {
      res.statusCode = 400;
      res.end('El parámetro "value" no es un número válido');
    } else {
      // Buscar el valor en el array
      const index = binarySearch(arr, value);
      if (index !== -1) {
        res.end(`El valor ${value} se encuentra en el índice ${index}`);
      } else {
        res.end(`El valor ${value} no se encuentra en el array`);
      }
    }
  } else if (req.url === '/sort') {
    // Ordenar el array
    const sortedArr = bubbleSort(arr);
    res.end(`Array ordenado: ${sortedArr}`);
  } else {
    res.statusCode = 404;
    res.end('No se encontró la página solicitada');
  }
});

// Iniciar servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

