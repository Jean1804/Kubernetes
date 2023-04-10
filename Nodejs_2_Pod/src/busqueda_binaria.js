// Implementación del algoritmo de búsqueda binaria
function busquedaBinaria(array, valorBuscado) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (array[medio] === valorBuscado) {
      return medio;
    } else if (array[medio] < valorBuscado) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  // Si el valor buscado no se encuentra en el array, retornamos -1
  return -1;
}

module.exports = {
  busquedaBinaria
};
