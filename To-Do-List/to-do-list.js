


// let item = document.querySelector(".item");
// let box = document.querySelector(".to-do-box");

// item.addEventListener('keyup',(event)=>{
//     if(event.key==="Enter"){
//        addToDo(item.value);
//         item.value="";
//     }
// });

// let addToDo = (data)=>{
//     let listItem = document.createElement("li");
//     listItem.innerHTML = `${data}
//     <i class="fa-solid fa-xmark"></i>`;

//     listItem.addEventListener('click',()=>{
//         listItem.classList.toggle("done");
//     });

//     listItem.querySelector("i").addEventListener('click',()=>{
//         listItem.remove();
//     });

//     box.appendChild(listItem);
// }

let numbers = [21,5,96,35,45,6,25,32,5];
for(let num of numbers){
    numbers.map(num*num);
    
}

console.log(numbers)