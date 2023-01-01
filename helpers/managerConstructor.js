const employeeConstructor = require('./employeeConstructor');

class managerConstructor extends employeeConstructor {
    constructor(teamName, name, id, email, officeNumber){
        super(name, id, email);
        this.teamName = teamName;
        this.officeNumber = officeNumber;
    }
    getOfficeId(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager'
    }
    getTeamName(){
        return this.teamName;
    }
}

module.exports = managerConstructor;