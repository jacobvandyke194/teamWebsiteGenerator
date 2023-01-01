const employeeConstructor = require('./employeeConstructor');

class teamNameConstructor extends employeeConstructor {
    constructor(teamName, name, email, id) {
        super(name, email, id)
        this.teamName = teamName;
    }
    getTeamName() { return this.teamName; };
}

module.exports = teamNameConstructor;