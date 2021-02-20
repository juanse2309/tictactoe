

// Este programa clacula el BMI de Andres y de Camila
// INPUT del programa
// Andres mide 170cm y pesa 88kg
// Camila mide 175 y pesa 65kg

// OUTPUT:
// BMI de Andres
// BMI de Camila


// DONE:
// BMI es peso/(altura^2)
const height_andres = 170;
const weight_andres = 88;
const height_camila = 175;
const weight_camila = 65;

var bmi_andres = weight_andres/(height_andres*height_andres);
var bmi_camila = weight_camila/(height_camila*height_camila);
console.log("El BMI de Andres es " + bmi_andres);
console.log("El BMI de Camila es " + bmi_camila);
