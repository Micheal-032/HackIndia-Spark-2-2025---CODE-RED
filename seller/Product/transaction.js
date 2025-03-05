// Sample transaction data (replace with real data or API calls)
const transactionData = {
    "T12345": {
        status: "Completed",
        amount: "$500",
        sender: "John Doe",
        receiver: "Alice Cooper",
        date: "2025-03-04",
    },
    "T67890": {
        status: "Pending",
        amount: "$1200",
        sender: "Bob Brown",
        receiver: "Charlie White",
        date: "2025-03-02",
    },
    "T11223": {
        status: "Failed",
        amount: "$300",
        sender: "David Green",
        receiver: "Eve Black",
        date: "2025-03-01",
    }
};

// Function to generate random transaction number (e.g., "T123456")
function generateRandomTransactionNumber() {
    const prefix = 'T';
    const randomNumber = Math.floor(Math.random() * 1000000);
    return prefix + randomNumber;
}

// Function to generate random status
function generateRandomStatus() {
    const statuses = ["Pending", "Completed", "Failed"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// Function to generate random amount
function generateRandomAmount() {
    const amounts = ["$500", "$1200", "$300", "$1500", "$250"];
    return amounts[Math.floor(Math.random() * amounts.length)];
}

// Function to generate random sender and receiver names
function generateRandomNames() {
    const names = ["John Doe", "Alice Cooper", "Bob Brown", "Charlie White", "David Green"];
    const sender = names[Math.floor(Math.random() * names.length)];
    const receiver = names[Math.floor(Math.random() * names.length)];
    return { sender, receiver };
}

// Function to generate random date
function generateRandomDate() {
    const today = new Date();
    today.setDate(today.getDate() - Math.floor(Math.random() * 10) - 1); // Random date in past 10 days
    return today.toISOString().split('T')[0];
}

// Function to display random transaction details
function trackTransaction() {
    // Generate random transaction data
    const transactionID = generateRandomTransactionNumber();
    const status = generateRandomStatus();
    const amount = generateRandomAmount();
    const { sender, receiver } = generateRandomNames();
    const date = generateRandomDate();

    const transactionDetailsDiv = document.getElementById('transaction-details');

    // Display the transaction details
    transactionDetailsDiv.style.display = 'block';
    transactionDetailsDiv.innerHTML = `
        <h3>Transaction ID: ${transactionID}</h3>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Status:</strong> <span class="status ${status.toLowerCase()}">${status}</span></p>
        <p><strong>Sender:</strong> ${sender}</p>
        <p><strong>Receiver:</strong> ${receiver}</p>
        <p><strong>Date:</strong> ${date}</p>
    `;
}

// Function to filter transactions based on the selected status
function filterTransactions() {
    const filterValue = document.getElementById('transactionFilter').value;
    const transactionListDiv = document.getElementById('transaction-list');
    let transactionListHTML = `
        <h3>Recent Transactions</h3>
        <table class="transaction-list-table">
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>`;

    Object.keys(transactionData).forEach(transactionID => {
        const transaction = transactionData[transactionID];
        if (filterValue === 'all' || transaction.status.toLowerCase() === filterValue) {
            transactionListHTML += `
                <tr>
                    <td>${transactionID}</td>
                    <td>${transaction.amount}</td>
                    <td><span class="status ${transaction.status.toLowerCase()}">${transaction.status}</span></td>
                    <td>${transaction.date}</td>
                </tr>
            `;
        }
    });

    transactionListHTML += `</tbody></table>`;
    transactionListDiv.innerHTML = transactionListHTML;
}

// Call the function to show transactions when the page loads
filterTransactions();
