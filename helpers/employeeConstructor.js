class employeeConstructor{
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return "Selected Role: Employee";
    }
    getEmail(){
        return this.email;
    }
}



module.exports = employeeConstructor;