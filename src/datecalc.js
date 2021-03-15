import {formatError} from './common.js';

const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc_result')

dateCalcForm.addEventListener('submit', dateCalcForm);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();

    let {firstDate, secondDate} = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) console.log(firstDate, secondDate);
    else dateCalcResult.innerHTML = formatError('Необходимо запомнить оба поля')
}
