var methods = require("../methods");
describe("methods tests", function ()
{
    it("should return 29", function ()
    {
        expect(methods.calculateAge(1985)).toBe(29);
    });

    it("should throw an error",function()
    {
        expect(function()
        {
            methods.calculateAge("Mumbo-Jumbo")
        }).toThrow(new Error("Only works with numbers"));
    })
});