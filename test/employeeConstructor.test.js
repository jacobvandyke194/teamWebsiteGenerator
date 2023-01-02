const employeeConstructor = require('../helpers/employeeConstructor');

test("init to test for undefined", () => {
    const employee = new employeeConstructor("Jake", 333, "Jake@gmail.com");
    expect(employee.id).toEqual(333);
    expect(employee.name).toEqual("Jake");
    expect(employee.email).toEqual("Jake@gmail.com");
});