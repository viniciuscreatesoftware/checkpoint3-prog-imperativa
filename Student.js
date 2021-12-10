

const Student = {
    name: '',
    absences: 0,
    grades: [],
    addStudent: function (name, absences, grades) {
        this.name = name;
        this.absences = absences;
        this.grades = grades;
    }, 
    getAvg: function (student) {
        let sum = 0;
        for (let i = 0; i < student.grades.length; i++) {
            sum += student.grades[i];
        }
        return sum / student.grades.length;
    },
   addAbsences: function (student) {
        student.absences++;
    }
}


module.exports = Student;
