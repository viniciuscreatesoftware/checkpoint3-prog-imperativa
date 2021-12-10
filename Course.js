
const student = require('./Student');
const students = require('./Students');

course = {
    name: 'Curso Avançado de Alimentação de Psitacídeos',
    approvalGrade: 7,
    maxAbsences: 4,
    students: [
        students.vinicius,
        students.pablito, 
        students.maria,
        students.luiza,
    ],
    newStudent: function(name, absences, grades) {
        this.students.push(student.newStudent(name, absences, grades));
    },
    approved: function(std) {
        const avg = student.getAvg(std);
        let maxApprovalGrade = this.approvalGrade*1.1;

        if (avg >= this.approvalGrade && std.absences < this.maxAbsences) {
            return true;
        } else if (std.absences === this.maxAbsences && avg > maxApprovalGrade) {
            return true;
        } else {
            return false;
        }
    },

    resultList: function() {
        let result = [];
        for (let i = 0; i < this.students.length; i++) {
            if (this.approved(this.students[i]) == false){
                result.push('o aluno ' + this.students[i].name + ' não foi aprovado');
            }else if (this.approved(this.students[i]) == true) {
                result.push('o aluno ' + this.students[i].name + ' foi aprovado');
            }
        }
        return result;
    }
}
// console.log(students);
console.log(course.resultList());