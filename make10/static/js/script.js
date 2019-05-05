var formula = [];
var operator = ["+", "-", "×", "÷"];
var parentheses = ["(", ")"];
var figures = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var numbers = [];
var text;

function getNumber(number){
    numbers.push(number)
}

function buttonClick(e){
    //入力が演算子
    if(operator.includes(e.value)){
        if(!operator.includes(formula[formula.length-1])){
            formula.push(e.value);
        }
    }
    //入力が()
    else if(parentheses.includes(e.value)){
        formula.push(e.value);
    }
    else if(e.value == "削除"){
        formula.pop();
    }
    else if(e.value == "決定"){
        alert(formulaToString + "を送信しました");
    }
    //入力が数字
    else{
        //数式の最後の文字が数字でない時
        if(!(figures.includes(formula[formula.length-1]))){
            formula.push(e.value)
        }
    }
    document.getElementById("formula").innerHTML = formulaToString();
}

function formulaToString(){
    text = formula.join(",");
    return text.replace(/,/g, "");
}