// let getcolor = () =>{
//     let randomNumber = Math.floor(Math.random() * 16777215);
//     let randomCode = "#" + randomNumber.toString(16);
//     document.body.style.backgroundColor = randomCode;
//      document.querySelector(".code").innerText = randomCode;
//      navigator.clipboard.writeText(randomCode);
// }


 let getcolor = () =>{
    let randomNumber = Math.floor(Math.random()*16777215);
    let randomCode = '#'+randomNumber.toString(16);
    document.body.style.background = randomCode;
    document.querySelector(".code").innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode);
 }
 document.querySelector(".btn").addEventListener('click',getcolor);
getcolor();
