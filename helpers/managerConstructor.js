const employeeConstructor = require('./employeeConstructor');

class managerConstructor extends employeeConstructor {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeId(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = managerConstructor;