const fs = require('fs');
function registrar(nombre, edad, animal, color, enfermedad) {
    let citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8');
    console.log('Cita registrada exitosamente.');
}
function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log('Citas registradas:', citas);
}
module.exports = { registrar, leer };
