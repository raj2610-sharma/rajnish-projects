let val = "";
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let inputField = document.querySelector(".input");
        
        if (e.target.innerHTML == '=') {
            val = eval(val);
            inputField.value = val;
        } else if (e.target.innerHTML == 'C') {
            val = "";
            inputField.value = val;
        } else if (e.target.innerHTML == '@') {
            // Remove one digit at a time
             
            if (val.length >= 1){
                val = val.slice(0, -1);
                inputField.value = val;
            }
            if (val.length < 1){
                inputField.value = 0;
            }
        } else {
            val = val + e.target.innerHTML;
            inputField.value = val;
        }
           
    });
});
