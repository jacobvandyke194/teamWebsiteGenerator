const engineerConstructor = require('../helpers/engineerConstructor');

test("values are properly assigned and none are undefined", () => {
    const engineer = new engineerConstructor("Jake","Jacob@gmail.com", 333, "jacobvandyke194")
    expect(engineer.name).toEqual("Jake");
    expect(engineer.id).toEqual(333);
    expect(engineer.email).toEqual("Jacob@gmail.com");
    expect(engineer.github).toEqual("jacobvandyke194");
})