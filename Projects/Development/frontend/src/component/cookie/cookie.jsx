import Cookies from 'js-cookie';

const obtenerDatosMaterial = () => {
  const material = Cookies.get('material');
  if (material) {
    const materialData = JSON.parse(material);
    console.log(materialData); // Muestra los datos del material en la consola
  } else {
    console.log('No hay material almacenado en la cookie.');
  }
};
