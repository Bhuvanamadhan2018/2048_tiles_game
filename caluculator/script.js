// let buttons = document.getElementsByTagName('button')
// let result = document. getElementById('result')


// for(i=0;i<buttons.length;i++){
//     buttons[i].onclick = function(){
//         let input = this.innerText;
//         updateDisplay(input)
//     }
// }
// function updateDisplay(input){
//     let currentDisplay = result.innerText
//     if(currentDisplay=="0"){
//         if(input!="C" && input!="DEL" && input!="="){
//         result.innerText = ""
//         result.innerText += input
//     }
// }
//     else{
//         if(input== "DEL"){
//             result.innerText=currentDisplay.substring(0,currentDisplay.length-1)
//         }
//     }
//     if(input=="C"){
//         result.innerText="0"
//     }
//     if(input!="C"&&input!="DEL"&&input!="="){
//         result.innerText=input
//     }
//     if(input=="="){
//         let display = result.innerText
//         result.innerText = eval(display)

//     }
// }
let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    let input = this.innerText;
    updateDisplay(input);
  }
}

function updateDisplay(input) {
  let currentDisplay = result.innerText;

  if (currentDisplay === "0" && input !== "C" && input !== "DEL" && input !== "=") {
    result.innerText = input;
  } else if (input === "DEL") {
    result.innerText = currentDisplay.substring(0, currentDisplay.length - 1);
  } else if (input === "C") {
    result.innerText = "0";
  } else if (input !== "C" && input !== "DEL" && input !== "=") {
    result.innerText += input;
  } else if (input === "=") {
    let display = result.innerText;
    result.innerText = eval(display);
  }
}

