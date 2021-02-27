function calculate_bmi(weight, height){
    var bmi =  weight/(height*height);
    return bmi;
}


function set_up_click_event(){
    document.getElementById('calculate').addEventListener('click',handle_user_click);
}


function handle_user_click () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    
    const weight = document.getElementById('weight').value;
    console.log("got as input", name, height, weight);
    
    
    if (name != '' && height != '' && weight != '') {
        
        const valorIMC = calculate_bmi(weight, height);
        console.log("el imc es ", valorIMC);
        const result = document.getElementById('result');
        //injectar el resultado en el dom de results

        alert("el imc es: "+valorIMC);
    }
}

try{
    document;
    set_up_click_event();
}
catch(error){
    // version para node
    const prompt = require('prompt-sync')(); //npm install prompt-sync
    const name = prompt('What is your name ? ');
    const height = prompt('What is your height ? ');
    const weight = prompt('What is your weight ? ');
    
    // const bmi = calculate_bmi(weight, height);
    console.log(`${name} your bmi is ${calculate_bmi(weight, height)}` );

}

