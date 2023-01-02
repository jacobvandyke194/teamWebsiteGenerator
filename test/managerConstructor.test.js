const managerConstructor = require('../helpers/managerConstructor');

test("making sure this constructor has correct and matching information", () =>{
    const manager = new managerConstructor("Jake", 333, "Jake@gmail.com", 444)
    expect(manager.name).toEqual("Jake");
    expect(manager.id).toEqual(333);
    expect(manager.email).toEqual("Jake@gmail.com");
    expect(manager.officeNumber).toEqual(444);
})