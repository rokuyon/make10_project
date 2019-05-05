var formula = [];
var operator = ["+", "-", "×", "÷"];
var parentheses = ["(", ")"];
var figures = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var numbers = [];
var text;

function clickFigure(e){
    if(!(figures.includes(formula[formula.length-1]))){
        formula.push(e.value)
    }
    document.getElementById("formula").innerHTML = formulaToString();
}

function clickOperator(e){
    if(!operator.includes(formula[formula.length-1])){
        formula.push(e.value);
    }
    document.getElementById("formula").innerHTML = formulaToString();
}

function clickParenthesis(e){
    formula.push(e.value);
    document.getElementById("formula").innerHTML = formulaToString();
}

function popFormula(){
    formula.pop();
    document.getElementById("formula").innerHTML = formulaToString();
}

function postFormula(){
    console.log("postを開始します");

    var formula_json = {
        formula: formulaToString()
    };

    $.ajax({
        url: '',
        type: 'POST',
        dataType: 'json',
        data: formula_json,
        timeout: 5000,
      })
      .done(function(data) {
          console.log("success");
          console.log(data);
      })
      .fail(function(err) {
          console.log("failed");
          console.log(err);
      });
}

function formulaToString(){
    text = formula.join(",");
    return text.replace(/,/g, "");
}