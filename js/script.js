const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const tempo1 = document.getElementById('tempo1');
const tempo2 = document.getElementById('tempo2');
const tempo3 = document.getElementById('tempo3');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    tempo1.textContent = '';
    tempo2.textContent = '';
    tempo3.textContent = '';

    if (hr === 1) {
        tempo1.textContent = 'Hora';
    } else {
        tempo1.textContent = 'Horas';
    }

    if (min === 1) {
        tempo2.textContent = 'Minuto';
    } else {
        tempo2.textContent = 'Minutos';
    }

    if (s === 1) {
        tempo3.textContent = 'Segundo';
    } else {
        tempo3.textContent = 'Segundos';
    }

    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});
