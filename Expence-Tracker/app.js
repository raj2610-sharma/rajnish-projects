
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let itemName = document.querySelector("#itemName");
let amount = document.querySelector("#amount");
let totalAmount = document.querySelector(".totalAmount");
let currentTotal = 0;

function addExpense() {
    if (itemName.value !== "" && amount.value !== "") {
        var newItem = document.createElement("li");
        newItem.textContent = itemName.value + " - $" + amount.value;
        document.getElementById("expenseList").appendChild(newItem);
        // Update total amount
        currentTotal += parseInt(amount.value);
        totalAmount.innerHTML = "$" + currentTotal + ".00";
        itemName.value = "";
        amount.value = "";
    } else {
        alert("Please fill in both item name and amount fields.");
    }
}

function removeLastExpense() {
    var expenseList = document.getElementById("expenseList");
    var lastItem = expenseList.lastElementChild;
    if (lastItem) {
        // Extract amount from the removed item
        var amountStr = lastItem.textContent.split(" - $")[1];
        var removedAmount = parseInt(amountStr);
        // Update total amount
        currentTotal -= removedAmount;
        if (currentTotal < 0) {
            currentTotal = 0;
        }
        totalAmount.innerHTML = "$" + currentTotal + ".00";
        expenseList.removeChild(lastItem);
    }
}

btn1.addEventListener('click', addExpense);
btn2.addEventListener('click', removeLastExpense);
