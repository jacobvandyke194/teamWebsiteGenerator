const employeeConstructor = require('./employeeConstructor');

class engineerConstructor extends employeeConstructor {
    constructor(name, id, email, github){
        super(name, email, id)
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = engineerConstructor;