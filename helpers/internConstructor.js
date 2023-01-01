const employeeConstructor = require('./employeeConstructor');

class internConstructor extends employeeConstructor {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern"
    }
}

module.exports = internConstructor;