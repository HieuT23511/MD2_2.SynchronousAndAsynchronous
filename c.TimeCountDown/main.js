let clicked =false;
function countdown(){
    if(!clicked){
        clicked = true;
        let inputNumber = document.getElementById('inputValue').value;
        let result = document.getElementById(`result`);
        result.innerHTML = inputNumber;
        let myInterval = setInterval(()=>{
            result.innerHTML = inputNumber--
            if(inputNumber<= 0){
                clearInterval(myInterval)
                result.innerHTML = `Counter Finished!`
                clicked = false;
            }
        },1000)
    }
}
