alert("JS Connected");
let total = 0;

function addExpense(){

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if(name === "" || amount <= 0){
        alert("Enter valid details");
        return;
    }

    total += amount;

    document.getElementById("total").innerText = total;

    let today = new Date().toLocaleDateString();

    let li = document.createElement("li");

    li.innerHTML = `
    ${name} (${category}) - ₹${amount} - ${today}
    <button onclick="deleteExpense(this,${amount})">Delete</button>
    `;

    document.getElementById("expenseList").appendChild(li);

    document.getElementById("expenseName").value="";
    document.getElementById("amount").value="";
}

function deleteExpense(btn,amount){

    total -= amount;

    document.getElementById("total").innerText = total;

    btn.parentElement.remove();
}