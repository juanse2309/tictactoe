function calculate_bmi(weight, height){
    var bmi =  weight/(height*height);
    return bmi;
}

// Este programa clacula el BMI de Andres y de Camila
// INPUT del programa
// Andres mide 170cm y pesa 88kg
// Camila mide 175 y pesa 65kg

// OUTPUT:
// BMI de Andres
// BMI de Camila


// DONE:
// BMI es peso/(altura^2)
// -----------------------------------------------------------
// 1) recolectar datos
//const height_andres = 1.70;
//const weight_andres = 88;

//const height_camila = 1.75;
//const weight_camila = 65;

//const height_juan = 1.70;
//const weight_juan = 88;

//const height_jorge = 1.80;
//const weight_jorge = 89;


// recibe de manera interactiva en la conosla, un peso y una altura y retorna el BMI

// 2) calcular los BMIs
//var bmi_andres = calculate_bmi(weight_andres, height_andres)
//var bmi_camila = calculate_bmi(weight_camila, height_camila)
//var bmi_juan = calculate_bmi(weight_juan, height_juan)
//var bmi_jorge = calculate_bmi(weight_jorge, height_jorge)

//3) entregar los resultados
//console.log("El BMI de Andres es " + bmi_andres);
// onsole.log("El BMI de Camila es " + bmi_camila);
//console.log("El BMI de juan es " + bmi_juan);
//console.log("El BMI de jorge es " + bmi_jorge);


//console.log(
    //calculate_bmi(
        //Math.pow(
            //Math.add(1,1), 2
        //),
        //Math.pow(2,4)
    //)
//)

const calcular = document.getElementById('calculate');
calcular.addEventListener('click',imc);


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    
    const weight = document.getElementById('weight').value;
    console.log("got as input", name, height, weight);
    
    
    if (name != '' && height != '' && weight != '') {
        
        const valorIMC = (weight/(height*height)).toFixed(1);
        console.log("el imc es ", valorIMC);
        const result = document.getElementById('result');
        //injectar el resultado en el dom de results

        
    }
}