var formula = [];
var operator = ["+", "-", "×", "÷"];
var parentheses = ["(", ")"];
var figures = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var numbers = [];
var text;

function clickFigure(e){
    // 直前に入力されたものが数値でない時
    if(!(figures.includes(formula[formula.length-1]))){
        // 既に使った数値かどうかチェック
        for(var i=0; i<numbers.length; i++){
            if(e.value == numbers[i]){
                formula.push(e.value);  // 数値を数式に追加
                numbers.splice(i, 1);   // 使える数値を減らす
                break;
            }
        }
    }
    console.log(numbers);
    document.getElementById("formula").value = formulaToString();
}

function clickOperator(e){
    // 直前に入力されたものが演算子でない時
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
    var rm = formula.pop(); // 数式から末尾の文字列を削除

    // 数式から削除したものが数値であった場合
    if(figures.includes(rm)){
        numbers.push(rm);   // 使用できる数値として復活させる
    }

    console.log(numbers);
    document.getElementById("formula").value = formulaToString();
}

function checkUsedNumber(){
    // 数値をすべて使ったかチェック
    if(numbers.length > 0){
        alert("数字は全部使ってね");
        return;
    }
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