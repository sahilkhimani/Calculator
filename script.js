function clean(){
    document.getElementById("result").value = "";
}

function inpVal(v){
    document.getElementById("result").value += v;
}

function calculate(){
    var input = document.getElementById('result').value;
    var result = eval(input);
    document.getElementById('result').value = result;
}