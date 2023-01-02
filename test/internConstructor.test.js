const internConstructor = require('../helpers/internConstructor');

test("make sure data is correctly defined", () => {
    const intern = new internConstructor("Jake", 333, "Jake@gmail.com", "CSU")
    expect(intern.name).toEqual("Jake");
    expect(intern.id).toEqual(333);
    expect(intern.email).toEqual("Jake@gmail.com");
    expect(intern.school).toEqual("CSU");
})