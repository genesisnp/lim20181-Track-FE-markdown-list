const verificarRuta = require('../ruta.js');
describe('verificar si verificarRuta es una funcion', () => {
  test('Verificar si es una funcion', () => {
    expect(verificarRuta('C:\\Users\\Martin\\Documents\\ProyectosLAB\\track-frontend\\lim20181-Track-FE-markdown-list\\index.js')).toBe('C:\\Users\\Martin\\Documents\\ProyectosLAB\\track-frontend\\lim20181-Track-FE-markdown-list\\index.js');
  })
  test('Verificar si es una funcion', () => {
    expect(verificarRuta('index.js')).toBe('C:\\Users\\Martin\\Documents\\ProyectosLAB\\track-frontend\\lim20181-Track-FE-markdown-list\\index.js');
  })
 
});
// test('sumar 1 + 2 es igual a 3', () => {
//     expect(suma(1, 2)).toBe(3);
//   });