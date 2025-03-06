document.addEventListener('DOMContentLoaded', function () {

    // Dummy data for dynamic content (You will replace this with real-time data from backend)
    const dashboardData = {
        orderStatus: "80% orders completed on time",
        deliveryTime: "10% delayed",
        fraudRisk: "5% chance of fraud",
        transactionStatus: "98% success rate"
    };

    const fraudAlerts = [
        { id: 1, transactionId: "TX12345", riskScore: 75, alert: "High risk of fraud!" },
        { id: 2, transactionId: "TX12346", riskScore: 40, alert: "Moderate fraud risk." },
        { id: 3, transactionId: "TX12347", riskScore: 10, alert: "Low risk." }
    ];

    const recommendations = [
        { supplier: "ABC Electronics", product: "Laptop", fraudRisk: 3, deliveryTime: "2 Days" },
        { supplier: "XYZ Logistics", product: "Smartphone", fraudRisk: 1, deliveryTime: "3 Days" },
        { supplier: "TechnoGoods", product: "Tablet", fraudRisk: 5, deliveryTime: "1 Day" }
    ];

    // Update dashboard
    document.getElementById('order-status').innerHTML = dashboardData.orderStatus;
    document.getElementById('delivery-time').innerHTML = dashboardData.deliveryTime;
    document.getElementById('fraud-risk').innerHTML = dashboardData.fraudRisk;
    document.getElementById('transaction-status').innerHTML = dashboardData.transactionStatus;

    // Display fraud alerts dynamically
    const fraudList = document.getElementById('fraud-alerts');
    fraudAlerts.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.classList.add('alert');
        alertItem.innerHTML = `
            <strong>Transaction ID:</strong> ${alert.transactionId}<br>
            <strong>Risk Score:</strong> ${alert.riskScore}%<br>
            <strong>Alert:</strong> ${alert.alert}
        `;
        fraudList.appendChild(alertItem);
    });

    // Display AI recommendations dynamically
    const recommendationList = document.getElementById('ai-recommendations');
    recommendations.forEach(rec => {
        const recommendationItem = document.createElement('div');
        recommendationItem.classList.add('recommendation');
        recommendationItem.innerHTML = `
            <p><strong>Supplier:</strong> ${rec.supplier}</p>
            <p><strong>Product:</strong> ${rec.product}</p>
            <p><strong>Fraud Risk:</strong> ${rec.fraudRisk}%</p>
            <p><strong>Delivery Time:</strong> ${rec.deliveryTime}</p>
        `;
        recommendationList.appendChild(recommendationItem);
    });

    // Search Functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function () {
        let searchQuery = searchBar.value.toLowerCase();
        const results = recommendations.filter(rec => rec.supplier.toLowerCase().includes(searchQuery) || rec.product.toLowerCase().includes(searchQuery));
        updateSearchResults(results);
    });

    function updateSearchResults(results) {
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = '';
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result');
            resultItem.innerHTML = `
                <p><strong>Supplier:</strong> ${result.supplier}</p>
                <p><strong>Product:</strong> ${result.product}</p>
                <p><strong>Fraud Risk:</strong> ${result.fraudRisk}%</p>
                <p><strong>Delivery Time:</strong> ${result.deliveryTime}</p>
            `;
            searchResults.appendChild(resultItem);
        });
    }

    // Fraud Alerts (Real-time)
    setInterval(() => {
        let newAlert = {
            id: fraudAlerts.length + 1,
            transactionId: "TX" + (12345 + fraudAlerts.length),
            riskScore: Math.floor(Math.random() * 100),
            alert: "Real-time fraud detection alert!"
        };
        fraudAlerts.push(newAlert);
        const newAlertItem = document.createElement('div');
        newAlertItem.classList.add('alert');
        newAlertItem.innerHTML = `
            <strong>Transaction ID:</strong> ${newAlert.transactionId}<br>
            <strong>Risk Score:</strong> ${newAlert.riskScore}%<br>
            <strong>Alert:</strong> ${newAlert.alert}
        `;
        fraudList.appendChild(newAlertItem);
    }, 5000); // New fraud alert every 5 seconds for simulation

});
// scripts/script.js

// Function to display AI alerts
function showAIAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "ai-alert";
    alertDiv.textContent = `AI Alert: ${message}`;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 5000); // Remove after 5 seconds
}

// Function to load data from localStorage
function loadData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Function to save data to localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
// scripts/script.js

// Function to update a table with data
function updateTable(tableId, data, columns) {
    const tableBody = document.querySelector(`#${tableId} tbody`);
    tableBody.innerHTML = data.map(item => `
        <tr>
            ${columns.map(col => `<td>${item[col]}</td>`).join("")}
        </tr>
    `).join("");
}
// scripts/index.js

// Simulate AI fraud detection
setInterval(() => {
    const fraudRisk = ["Low Risk", "Medium Risk", "High Risk"][Math.floor(Math.random() * 3)];
    document.getElementById("fraud-risk").textContent = `Risk: ${fraudRisk}`;
}, 5000); // Update every 5 seconds