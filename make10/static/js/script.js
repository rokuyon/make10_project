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

                // 数値をすべて使ったかチェック
                if(numbers.length == 0){
                    $("#answer").get(0).disabled = false;
                }
                break;
            }
        }
    }
    //console.log(numbers);
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

// 数式から末尾の文字列を削除
function popFormula(){
    var rm = formula.pop(); 
    if(figures.includes(rm)){
        numbers.push(rm);
        $("#answer").get(0).disabled = true;
    }
    document.getElementById("formula").value = formulaToString();
}

function formulaToString(){
    text = formula.join(",");
    return text.replace(/,/g, "");
}

// --------------- Initialize Game --------------- //
function initGame() {
    numbersList = getNumbers();
    var figureButtonList = document.getElementById("figure").children;
    document.getElementById('statement').textContent = numbersList;
    for (var i=0; i<figureButtonList.length; i++) {
        figureButtonList.item(i).value = numbersList[i];
        numbers.push(numbersList[i]);
    }
    myStart = new Date();
    myButton = 1;
    myInterval=setInterval("myDisp()",1);
}

function myDisp(){	
    myStop = new Date();
    myTime = myStop.getTime() - myStart.getTime();	// 通算ミリ秒計算
    myS = Math.floor(myTime/1000);	// '秒'取得
    myMS = myTime%1000;	// 'ミリ秒'取得
    document.myForm.myFormTime.value = myS+"."+myMS;
}

// --------------- Judge --------------- //
function judge() {
    ans = formula.join("");
    ans = ans.replace(/×/g, "*");
    ans = ans.replace(/÷/g, "/");
    ans = eval(ans);
    ans = Number(ans);

    if (ans == 10) {
        document.getElementById("message").innerHTML = "正解です";
        correctCount = document.getElementById("correctCount").innerHTML;
        correctCount = Number(correctCount) + 1;
        document.getElementById("correctCount").innerHTML = correctCount.toString();

        if (correctCount >= 11) {
            var clearTime = document.getElementById("timer").value
            $("#clearTimeInput").attr({
                'value': clearTime
            });
            $("#clearTimeForm").submit();
        } else {
            numbers = [];
            numbersList = getNumbers();
            var figureButtonList = document.getElementById("figure").children;
            document.getElementById('statement').value = numbersList;
            for (var i=0; i<figureButtonList.length; i++) {
                figureButtonList.item(i).value = "";
                figureButtonList.item(i).value = numbersList[i];
                numbers.push(numbersList[i]);
            }
            document.getElementById("formula").value = "";
            formula = [];
        }

    } else {
        document.getElementById("message").innerHTML = "不正解です";
    }
}



// --------------- Data --------------- //
function getAllNumbers() {
    return allNumbers;
}

function getNumbers() {
    return allNumbers[Math.floor(Math.random() * allNumbers.length)];
}

allNumbers = [
    "0019",
    "0025",
    "0028",
    "0037",
    "0046",
    "0055",
    "0115",
    "0118",
    "0119",
    "0124",
    "0125",
    "0126",
    "0127",
    "0128",
    "0129",
    "0133",
    "0135",
    "0136",
    "0137",
    "0138",
    "0139",
    "0145",
    "0146",
    "0147",
    "0149",
    "0155",
    "0156",
    "0159",
    "0169",
    "0179",
    "0189",
    "0199",
    "0223",
    "0224",
    "0225",
    "0226",
    "0227",
    "0228",
    "0229",
    "0234",
    "0235",
    "0237",
    "0238",
    "0239",
    "0244",
    "0245",
    "0246",
    "0247",
    "0248",
    "0249",
    "0255",
    "0256",
    "0257",
    "0258",
    "0259",
    "0266",
    "0267",
    "0268",
    "0278",
    "0288",
    "0289",
    "0334",
    "0337",
    "0339",
    "0346",
    "0347",
    "0349",
    "0355",
    "0356",
    "0357",
    "0358",
    "0367",
    "0368",
    "0377",
    "0378",
    "0379",
    "0446",
    "0449",
    "0455",
    "0456",
    "0458",
    "0459",
    "0466",
    "0467",
    "0468",
    "0469",
    "0477",
    "0488",
    "0555",
    "0556",
    "0557",
    "0558",
    "0559",
    "0568",
    "0569",
    "0578",
    "0579",
    "0669",
    "0679",
    "0688",
    "0779",
    "0789",
    "0889",
    "0899",
    "0999",
    "1114",
    "1115",
    "1116",
    "1117",
    "1118",
    "1119",
    "1123",
    "1124",
    "1125",
    "1126",
    "1127",
    "1128",
    "1129",
    "1133",
    "1134",
    "1135",
    "1136",
    "1137",
    "1138",
    "1139",
    "1144",
    "1145",
    "1146",
    "1147",
    "1148",
    "1149",
    "1155",
    "1156",
    "1157",
    "1158",
    "1166",
    "1167",
    "1168",
    "1189",
    "1199",
    "1222",
    "1223",
    "1224",
    "1225",
    "1226",
    "1227",
    "1228",
    "1229",
    "1233",
    "1234",
    "1235",
    "1236",
    "1237",
    "1238",
    "1239",
    "1244",
    "1245",
    "1246",
    "1247",
    "1248",
    "1249",
    "1255",
    "1256",
    "1257",
    "1258",
    "1259",
    "1266",
    "1267",
    "1268",
    "1269",
    "1277",
    "1278",
    "1279",
    "1288",
    "1289",
    "1299",
    "1333",
    "1334",
    "1335",
    "1336",
    "1337",
    "1338",
    "1339",
    "1344",
    "1345",
    "1346",
    "1347",
    "1348",
    "1349",
    "1355",
    "1356",
    "1357",
    "1358",
    "1359",
    "1366",
    "1367",
    "1368",
    "1369",
    "1377",
    "1378",
    "1379",
    "1388",
    "1389",
    "1445",
    "1446",
    "1447",
    "1448",
    "1449",
    "1455",
    "1456",
    "1457",
    "1458",
    "1459",
    "1466",
    "1467",
    "1468",
    "1469",
    "1477",
    "1478",
    "1479",
    "1488",
    "1489",
    "1555",
    "1556",
    "1557",
    "1558",
    "1559",
    "1566",
    "1567",
    "1568",
    "1569",
    "1577",
    "1578",
    "1579",
    "1588",
    "1589",
    "1599",
    "1668",
    "1669",
    "1678",
    "1679",
    "1688",
    "1689",
    "1778",
    "1779",
    "1788",
    "1789",
    "1799",
    "1888",
    "1889",
    "1899",
    "1999",
    "2222",
    "2223",
    "2224",
    "2225",
    "2226",
    "2227",
    "2228",
    "2229",
    "2233",
    "2234",
    "2235",
    "2236",
    "2237",
    "2238",
    "2239",
    "2244",
    "2245",
    "2246",
    "2247",
    "2248",
    "2249",
    "2255",
    "2256",
    "2258",
    "2259",
    "2266",
    "2267",
    "2268",
    "2269",
    "2277",
    "2278",
    "2279",
    "2288",
    "2289",
    "2299",
    "2333",
    "2334",
    "2335",
    "2336",
    "2337",
    "2338",
    "2339",
    "2344",
    "2345",
    "2346",
    "2347",
    "2348",
    "2349",
    "2355",
    "2356",
    "2357",
    "2358",
    "2359",
    "2366",
    "2367",
    "2368",
    "2369",
    "2377",
    "2378",
    "2379",
    "2388",
    "2389",
    "2399",
    "2444",
    "2445",
    "2446",
    "2447",
    "2448",
    "2449",
    "2455",
    "2456",
    "2457",
    "2458",
    "2459",
    "2466",
    "2467",
    "2468",
    "2469",
    "2477",
    "2478",
    "2479",
    "2488",
    "2489",
    "2499",
    "2555",
    "2556",
    "2557",
    "2558",
    "2559",
    "2566",
    "2567",
    "2568",
    "2569",
    "2577",
    "2578",
    "2579",
    "2588",
    "2589",
    "2599",
    "2666",
    "2667",
    "2668",
    "2669",
    "2677",
    "2678",
    "2679",
    "2688",
    "2689",
    "2699",
    "2777",
    "2778",
    "2779",
    "2788",
    "2789",
    "2799",
    "2888",
    "2889",
    "2899",
    "2999",
    "3333",
    "3334",
    "3335",
    "3336",
    "3337",
    "3338",
    "3339",
    "3344",
    "3345",
    "3346",
    "3347",
    "3348",
    "3349",
    "3355",
    "3356",
    "3357",
    "3358",
    "3359",
    "3366",
    "3367",
    "3368",
    "3369",
    "3377",
    "3378",
    "3379",
    "3388",
    "3389",
    "3399",
    "3445",
    "3446",
    "3447",
    "3448",
    "3449",
    "3455",
    "3456",
    "3457",
    "3458",
    "3459",
    "3466",
    "3467",
    "3468",
    "3469",
    "3477",
    "3478",
    "3479",
    "3488",
    "3489",
    "3499",
    "3555",
    "3556",
    "3557",
    "3558",
    "3559",
    "3566",
    "3567",
    "3568",
    "3569",
    "3577",
    "3578",
    "3579",
    "3588",
    "3589",
    "3599",
    "3666",
    "3667",
    "3668",
    "3677",
    "3678",
    "3679",
    "3688",
    "3689",
    "3699",
    "3777",
    "3778",
    "3788",
    "3789",
    "3799",
    "3888",
    "3889",
    "3899",
    "4445",
    "4446",
    "4447",
    "4448",
    "4449",
    "4455",
    "4456",
    "4457",
    "4458",
    "4466",
    "4467",
    "4468",
    "4469",
    "4478",
    "4479",
    "4488",
    "4489",
    "4499",
    "4555",
    "4556",
    "4557",
    "4559",
    "4566",
    "4567",
    "4568",
    "4569",
    "4577",
    "4578",
    "4579",
    "4588",
    "4589",
    "4599",
    "4666",
    "4667",
    "4668",
    "4669",
    "4677",
    "4678",
    "4679",
    "4688",
    "4689",
    "4699",
    "4777",
    "4778",
    "4779",
    "4788",
    "4789",
    "4799",
    "4888",
    "4889",
    "5555",
    "5556",
    "5557",
    "5558",
    "5559",
    "5566",
    "5567",
    "5568",
    "5569",
    "5577",
    "5578",
    "5579",
    "5588",
    "5589",
    "5599",
    "5666",
    "5667",
    "5669",
    "5677",
    "5678",
    "5679",
    "5688",
    "5689",
    "5699",
    "5777",
    "5778",
    "5779",
    "5789",
    "5888",
    "5889",
    "5999",
    "6668",
    "6669",
    "6678",
    "6679",
    "6688",
    "6689",
    "6699",
    "6779",
    "6788",
    "6789",
    "6799",
    "6889",
    "7778",
    "7779",
    "7889",
    "7899",
    "8888",
    "8889",
    "8999",
    "9999"]