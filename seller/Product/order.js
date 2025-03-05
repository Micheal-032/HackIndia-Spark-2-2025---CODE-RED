// Sample order data (replace this with actual data from backend or API)
const orderData = {
    "12345": {
        status: "Shipped",
        productName: "Product XYZ",
        deliveryDate: "2025-03-10",
        customerName: "John Doe",
        customerEmail: "john@example.com",
    },
    "67890": {
        status: "Processing",
        productName: "Product ABC",
        deliveryDate: "2025-03-12",
        customerName: "Jane Smith",
        customerEmail: "jane@example.com",
    },
    "11223": {
        status: "Delivered",
        productName: "Product DEF",
        deliveryDate: "2025-03-05",
        customerName: "Alice Cooper",
        customerEmail: "alice@example.com",
    }
};

// Function to generate random order number (e.g., "ORD123456")
function generateRandomOrderNumber() {
    const prefix = 'ORD';
    const randomNumber = Math.floor(Math.random() * 1000000);
    return prefix + randomNumber;
}

// Function to generate random customer name
function generateRandomName() {
    const names = ["John Doe", "Jane Smith", "Alice Cooper", "Bob Brown", "Charlie White", "David Green"];
    return names[Math.floor(Math.random() * names.length)];
}

// Function to generate random product names
function generateRandomProductName() {
    const products = ["Product XYZ", "Product ABC", "Product DEF", "Product MNO", "Product PQR"];
    return products[Math.floor(Math.random() * products.length)];
}

// Function to generate random delivery date
function generateRandomDeliveryDate() {
    const today = new Date();
    today.setDate(today.getDate() + Math.floor(Math.random() * 10) + 1); // Random date between today and 10 days from now
    return today.toISOString().split('T')[0];
}

// Function to generate random status
function generateRandomStatus() {
    const statuses = ["Processing", "Shipped", "Delivered"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// Function to display random order details
function trackOrder() {
    // Generate random order data
    const orderID = generateRandomOrderNumber();
    const customerName = generateRandomName();
    const productName = generateRandomProductName();
    const deliveryDate = generateRandomDeliveryDate();
    const status = generateRandomStatus();
    const customerEmail = customerName.replace(" ", ".").toLowerCase() + "@example.com"; // Create a fake email based on the name

    const orderDetailsDiv = document.getElementById('order-details');

    // Display the order details
    orderDetailsDiv.style.display = 'block';
    orderDetailsDiv.innerHTML = `
        <h3>Order ID: ${orderID}</h3>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Status:</strong> <span class="status ${status.toLowerCase()}">${status}</span></p>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Estimated Delivery:</strong> ${deliveryDate}</p>
    `;
}

// Function to display a list of orders for the seller
function showOrderList() {
    const orderListDiv = document.getElementById('order-list');
    let orderListHTML = `
        <h3>Recent Orders</h3>
        <table class="order-list-table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Status</th>
                    <th>Delivery Date</th>
                </tr>
            </thead>
            <tbody>`;

    Object.keys(orderData).forEach(orderID => {
        const order = orderData[orderID];
        orderListHTML += `
            <tr>
                <td>${orderID}</td>
                <td>${order.productName}</td>
                <td><span class="status ${order.status.toLowerCase()}">${order.status}</span></td>
                <td>${order.deliveryDate}</td>
            </tr>
        `;
    });

    orderListHTML += `</tbody></table>`;
    orderListDiv.innerHTML = orderListHTML;
}

// Call the function to show orders when the page loads
showOrderList();
