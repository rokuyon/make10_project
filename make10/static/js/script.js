var formula = [];
var operator = ["+", "-", "×", "÷"];
var parentheses = ["(", ")"];
var figures = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var numbers = [];
//var used_numbers = [];
var text;

function clickFigure(e){
    if(!(figures.includes(formula[formula.length-1]))){
        for(var i=0; i<numbers.length; i++){
            if(e.value == numbers[i]){
                formula.push(e.value);
                //used_numbers.push(e.value);
                numbers.splice(i, 1);
                break;
            }
        }
    }
    console.log(numbers);
    document.getElementById("formula").value = formulaToString();
}

function clickOperator(e){
    if(!operator.includes(formula[formula.length-1])){
        formula.push(e.value);
    }
    document.getElementById("formula").value = formulaToString();
}

function clickParenthesis(e){
    formula.push(e.value);
    document.getElementById("formula").value = formulaToString();
}

function popFormula(){
    var rm = formula.pop();

    if(figures.includes(rm)){
        numbers.push(rm);
    }

    console.log(numbers);
    document.getElementById("formula").value = formulaToString();
}

function postFormula(){
    console.log("postを開始します");

    var formula_json = {
        formula: formulaToString()
    };

    $.ajax({
        url: 'judge',
        type: 'POST',
        dataType: 'json',
        data: {'formula': formula_json},
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

$(function(){
    var figure_list = document.getElementById("figure").children;

    for(var i=0; i<figure_list.length; i++){
        numbers.push(figure_list.item(i).value);
    }

    console.log(numbers);
});