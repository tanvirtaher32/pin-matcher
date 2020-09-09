document.getElementById('generate-button').addEventListener('click', function(){
    let generateInputValue = document.getElementById('generate-num');
    let display = parseInt(generateInputValue.value);
       let random = Math.random() * 8999 + 1000;
       let outPut = Math.round(random);

    generateInputValue.value = outPut;
    
})


document.getElementById("submit-button").addEventListener("click", function(){   
        let generateNum  = document.getElementById('generate-num').value;
        let calculatorNum = document.getElementById('calculator-num').value;
        let tryNum = document.getElementById('action-count').innerText;
        const pinMatch = document.getElementById("match");
        const pinMatchNot = document.getElementById("match-not");

    if( generateNum == calculatorNum){
        pinMatch.style.display = "block";
        pinMatchNot.style.display = "none";

        document.getElementById('calculator-num').value= "";
        document.getElementById('generate-num').value= "";
    }
        
    else if(generateNum != calculatorNum && tryNum >0) {
        let inputUpdate = parseInt(tryNum) - 1;
        document.getElementById('action-count').innerText = inputUpdate;

        pinMatchNot.style.display = "block";
        pinMatch.style.display = "none";

        document.getElementById('calculator-num').value= "";
    }
})