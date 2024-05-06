const calculator = document.querySelector('#calculator');
const divResult = document.querySelector('.result');
const welcome = document.querySelector('.welcome');

calculator.addEventListener('submit', calculateBMI);

// Calcular BMI
function calculateBMI (e) {

    e.preventDefault()

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    // Validar campos
    if (height === "" || weight === "") {
        return printAlert('Todos los campos son obligatorios')
    };
    if (height <= .2 || isNaN(height) ) {
        return printAlert('El valor ingresado en Altura no es válido')
    };
    if (weight <= 5 || isNaN(weight)) {
        return printAlert('El valor ingresado en Peso no es válido')        
    };

    const result = weight / Math.pow(height, 2);

    clearHTML(divResult);

    printResult(result);

    calculator.reset()
    
};

// Imprimir resultado
function printResult (result) {

    const resultFinal = result.toFixed(2);

    weightLevel(resultFinal)

    welcome.classList.add('hide');

    const bmiResult = document.createElement('div');

    bmiResult.classList.add('flex');

    // Generar el HTML del ingreso
	bmiResult.innerHTML = `
    <div class="col-lg-6">Su IMC es...<br><span class="resultFinal" >${resultFinal}</span></div>
    <div class="col-lg-6"><h6>Su IMC sugiere que tiene ${weightType}.</h6></div>
    `;

    divResult.appendChild(bmiResult);
};

// Definir tipo de peso
let weightType;

function weightLevel (resultFinal) {    

    if (resultFinal < 18.5) {
        weightType = "bajo peso"        
    };
    if (resultFinal >= 18.5 && resultFinal <= 24.9) {
        weightType = "peso normal"        
    };
    if (resultFinal >= 25 && resultFinal <= 29.9) {
        weightType = "sobrepeso"        
    };
    if (resultFinal > 30) {
        weightType = "obesidad"        
    };

    return
};

// Limpiar HTML
function clearHTML(divResult) {
    while (divResult.firstChild) {
		divResult.removeChild(divResult.firstChild)
	}
};


// Imprimir alerta
function printAlert(message) {

    const messageAlert = document.querySelector('.printAlert');    

	// Crear el div
	const divMessage = document.createElement('div');
	divMessage.classList.add('text-center', 'alert', 'alert-danger');

	divMessage.textContent = message;

    messageAlert.appendChild(divMessage);

	// Quitar mensaje
	setTimeout(() => {
		divMessage.remove();
	}, 3000);
};