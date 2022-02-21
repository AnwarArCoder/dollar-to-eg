let container = document.createElement('div');
document.body.appendChild(container);


let inputDollar = document.createElement('input');
container.appendChild(inputDollar);
inputDollar.setAttribute('type', 'number');
inputDollar.setAttribute('placeholder', 'Dollar');
inputDollar.style.display = 'block';
inputDollar.style.width = '350px';
inputDollar.style.fontSize = '16px';
inputDollar.style.padding = '15px';
inputDollar.style.border = '1px solid #DDD';
inputDollar.style.marginBottom = '30px';
let inputDollarValue = inputDollar.value;






let inputEG = document.createElement('input');
container.appendChild(inputEG);
inputEG.setAttribute('type', 'number');
inputEG.setAttribute('placeholder', 'Dollar');
inputEG.style.display = 'block';
inputEG.style.width = '350px';
inputEG.style.fontSize = '16px';
inputEG.style.padding = '15px';
inputEG.style.border = '1px solid #DDD';
inputEG.style.marginBottom = '30px';
let inputEGValue = inputEG.value;





inputDollar.onkeyup = function(){
	inputEG.value = inputDollar.value * 15.6
}
inputEG.onkeyup = function(){
	inputDollar.value = inputEG.value / 15.6
}