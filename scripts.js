// scripts.js

// Base path to your images folder
const baseImageUrl = 'images/IMG-20240731-WA';
const startImageNumber = 45;
const endImageNumber = 187;
const skipImageNumber = 72;

// Create an array of product objects, excluding the image with number 72
const products = Array.from({ length: endImageNumber - startImageNumber + 1 }, (v, i) => {
    const imageNumber = startImageNumber + i;
    return imageNumber !== skipImageNumber ? {
        id: imageNumber,
        serialNumber: i + 1,
        imageUrl: `${baseImageUrl}${String(imageNumber).padStart(4, '0')}.jpg`
    } : null;
}).filter(product => product !== null);

// Function to render products
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="Product ${product.serialNumber}" onclick="openModal('${product.imageUrl}', 'Product ${product.serialNumber}')">
            <h3>Product ${product.serialNumber}</h3>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Call the function to render products
renderProducts();

// Function to open the modal
function openModal(imageUrl, productName) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = imageUrl;
    captionText.innerHTML = productName;
}

// Get the <span> element that closes the modal
const closeSpan = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
