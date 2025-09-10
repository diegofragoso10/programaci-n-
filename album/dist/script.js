//Array(Arreglo) para las imagenes, aquí van a poner las imagenes//
// de cada uno ( ES INDIVIDUAL) //

//fotos de Unsplash (ajustadas con w=400&h=300&fit=crop)//

const imagenes = [
 "https://cdn.pixabay.com/photo/2019/03/13/11/04/copenhagen-4052654_1280.jpg",
  "https://media.istockphoto.com/id/1193065316/photo/copenhagen-nyhavn-panorama-city-crowds-enjoying-sunshine-restaurants-bars-denmark.jpg?s=1024x1024&w=is&k=20&c=UeoCK0XFxoY8NT7lBSENtc-xU-bwNAn2sdjblp_Lg6U=",
  "https://cdn.pixabay.com/photo/2022/02/17/11/25/copenhagen-7018591_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/03/06/15/08/escalator-4907329_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/01/01/18/12/stockholm-4734117_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/01/09/03/40/gentlemen-4751771_1280.jpg",
];

//Seleccion de elementos // 

const boton = document.getElementById("btn-cambiar");
const imagenCard = document.getElementById("card-img");
const textoCard = document.getElementById("card-text");

//contador de las imagenes//

let indice = 0;

//evento del click//
boton.addEventListener("click", () => {
 
 //lo siguiente es para que avance la foto //
  indice++;

//el siguiente if es para que cuando llegue al final se regrese al inicio//
  
  if (indice >= imagenes.length) {
    indice = 0;
  }
      // Cambiar imagen y texto //
imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando imagen ${indice + 1} de ${imagenes.length}`;
});