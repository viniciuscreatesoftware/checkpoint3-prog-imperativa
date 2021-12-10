const student = require('./Student');

const vinicius = new student.addStudent('Vinicius', 0, [10,8,6]);
student.addAbsences(vinicius);
student.addAbsences(vinicius);

const pablito = new student.addStudent('Pablito', 2, [8,7,4]);
student.addAbsences(pablito);

const maria = new student.addStudent('Maria', 1, [9,8,7]);
student.addAbsences(maria);
student.addAbsences(maria);
student.addAbsences(maria);

const luiza = new student.addStudent('Luiza', 3, [7,8,9]);
student.addAbsences(luiza);

module.exports = {
    vinicius,
    pablito,
    maria, 
    luiza
}