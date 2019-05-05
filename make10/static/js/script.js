var formula = [];
var operator = ["+", "-", "×", "÷"];
var parentheses = ["(", ")"];
var numbers = [];
var text;

function getNumber(number){
    numbers.push(number)
}

function click(e){
    //入力が演算子
    if(operator.includes(e.value)){
        if(!operator.includes(formula[formula.length])){
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
    else if(e.value = "決定"){
        alert(formulaToString + "を送信しました");
    }
    //入力が数字
    else{
        //数式の最後の文字が数字でない時
        if(!numbers.includes(formula[formula.length])){
            formula.push(e.value)
        }
    }
    document.getElementById("formula").innerHTML = formulaToString();
}

function formulaToString(){
    text = formula.join(",");
    return text.replace(/,/g, "");
}