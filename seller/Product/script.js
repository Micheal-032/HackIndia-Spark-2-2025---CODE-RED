document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.querySelector(".sidebar");
  
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
    });
  
    // Notification Dropdown (click toggles dropdown)
    const notifications = document.querySelector(".notifications");
    notifications.addEventListener("click", function (e) {
      const dropdown = notifications.querySelector(".dropdown");
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
      e.stopPropagation();
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
      const dropdown = notifications.querySelector(".dropdown");
      dropdown.style.display = "none";
    });
  
    // Modal Functionality
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");
    // Example: Open modal after 5 seconds (can be triggered on an event)
    setTimeout(() => {
      modal.style.display = "flex";
    }, 5000);
  
    modalClose.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Sales Chart (Line Chart)
    const salesCtx = document.getElementById("salesChart").getContext("2d");
    new Chart(salesCtx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [200, 400, 600, 800, 750, 900],
            backgroundColor: "rgba(0, 170, 255, 0.2)",
            borderColor: "#00aaff",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    function loadProductData() {
      let products = JSON.parse(localStorage.getItem('products')) || [];
      let salesData = [];
      let revenueData = [];

      // Extract sales and revenue data from products
      products.forEach(product => {
          salesData.push(product.sales);
          revenueData.push(product.price);
      });

      return { salesData, revenueData };
  }

  // Function to render the charts
  function renderCharts() {
      const { salesData, revenueData } = loadProductData();

      // Sales Analytics Chart (Line Chart)
      const ctxSales = document.getElementById('salesChart').getContext('2d');
      const salesChart = new Chart(ctxSales, {
          type: 'line',
          data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Month Labels
              datasets: [{
                  label: 'Sales',
                  data: salesData,
                  fill: true,
                  borderColor: '#0099ff',
                  backgroundColor: 'rgba(0, 153, 255, 0.2)',
                  tension: 0.4
              }]
          }
      });

      // Revenue Trends Chart (Bar Chart)
      const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
      const revenueChart = new Chart(ctxRevenue, {
          type: 'bar',
          data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Month Labels
              datasets: [{
                  label: 'Revenue',
                  data: revenueData,
                  backgroundColor: '#00cc99',
                  borderColor: '#00b37a',
                  borderWidth: 1
              }]
          }
      });
  }

  // Call the render function when the page loads
  window.onload = function() {
      renderCharts();
  }
  
    // Revenue Chart (Bar Chart)
    const revenueCtx = document
      .getElementById("revenueChart")
      .getContext("2d");
    new Chart(revenueCtx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Revenue",
            data: [1000, 2000, 1500, 3000, 2500, 3200],
            backgroundColor: "rgba(0, 255, 200, 0.5)",
            borderColor: "#00ffaa",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });
  