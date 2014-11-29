var _ = require("lodash");

exports.calculateAge = function(birthYear)
{
    if(_.isNumber(birthYear))
    {
        var currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
    else
    {
        throw new Error("Only works with numbers");
    }
};