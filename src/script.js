let balance = 0;

document.getElementById("incomeBtn").addEventListener("click", function() {
    const desc = document.getElementById("desc").value;
    const amountStr = document.getElementById("amount").value;

                                                        if (desc === "" || amountStr === "") return;

                                                        const amount = parseFloat(amountStr);
    if (isNaN(amount)) return;

                                                        const li = document.createElement("li");
    li.textContent = desc + " - " + amount + " kr (Inkomst)";
    document.getElementById("incomeList").appendChild(li);

                                                        balance += amount;
    document.getElementById("balance").textContent = balance;

                                                        document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
});

document.getElementById("expenseBtn").addEventListener("click", function() {
    const desc = document.getElementById("desc").value;
    const amountStr = document.getElementById("amount").value;

                                                         if (desc === "" || amountStr === "") return;

                                                         const amount = parseFloat(amountStr);
    if (isNaN(amount)) return;

                                                         const li = document.createElement("li");
    li.textContent = desc + " - " + amount + " kr (Utgift)";
    document.getElementById("expenseList").appendChild(li);

                                                         balance -= amount;
    document.getElementById("balance").textContent = balance;

                                                         document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
});
