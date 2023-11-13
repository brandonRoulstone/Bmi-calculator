let evalBtn = document.getElementById("evaluate");
let result = document.getElementById("result");
let check = document.getElementById("check")
let underweightBMI = [18.5];
let normalBMI = [18.6, 24.9];
let OverweightBMI = [25, 29.9];
let obeseBMI = ["30"];
// Add
evalBtn.addEventListener("click", add)

function add(){
    let height = document.getElementById("display").value;
    let weight = document.getElementById("displaySecond").value;
    let bmi = eval(weight / (height * height));
    if (bmi < 18.5) {
        check.innerHTML = `<p>Looks like you underweight</p>`
    } else if (bmi > 24.9){
        check.innerHTML = `<p>Looks like you are overweight</p>`
    }else if (bmi > 29.9) {
        check.innerHTML = `<p>Looks like you are obese</p>` 
    }
    console.log(bmi);
   
    console.log(bmi);
    result.innerHTML = "Bmi: " + bmi
}
add();













// function multiply(){
//     let firstDisplay = document.getElementById("display").value;
//     let secondDisplay = document.getElementById("displaySecond").value;

//     let answer = eval(firstDisplay * secondDisplay)
// }