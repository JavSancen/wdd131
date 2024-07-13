document.addEventListener('DOMContentLoaded', () => {
    // Get current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get date of last modification of document
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
    document.getElementById('date-and-time').textContent = formattedLastModified;
});


document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 'fc-1888', name: "flux capacitor", avg_rating: 4.5 },
        { id: 'fc-2050', name: "power laces", avg_rating: 4.7 },
        { id: 'fs-1987', name: "time circuits", avg_rating: 3.5 },
        { id: 'ac-2000', name: "low voltage reactor", avg_rating: 3.9 },
        { id: 'jj-1969', name: "warp equalizer", avg_rating: 5.0 }
    ];
    
    const productNameSelect = document.getElementById('product-name');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
    
    document.getElementById("review-form").addEventListener("submit", function() {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        localStorage.setItem("reviewCount", ++reviewCount);
    });
});