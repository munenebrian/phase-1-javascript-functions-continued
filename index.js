// code your solution here
function saturdayFun(fun = `roller-skate`) {
    return `This Saturday, I want to ${fun}!`;
}
saturdayFun(`bathe my dog`);
const mondayWork = function(ToDo = `go to the office`) {
    return `This Monday, I will ${ToDo}.`
}
mondayWork(`work from home`);

function wrapAdjective(star = "*") {
    function innerFunction(word = "special") {
        return `You are ${star}${word}${star}!`
    }
    return innerFunction;
}
const final = wrapAdjective("*")("a dedicated programmer");